module Octopress
  module Date
    # Returns a datetime if the input is a string.
    def datetime(date)
      if date.class == String
        date = Time.parse(date)
      end
      date
    end

    # Returns an ordinal date (e.g. July 22 2007 -> July 22nd 2007).
    def ordinalize(date)
      date = datetime(date)
      "#{date.strftime("%b")} #{ordinal(date.strftime("%e").to_i)}, #{date.strftime("%Y")}"
    end

    # Returns an ordinal number (e.g. 13 -> 13th, 21 -> 21st, etc.).
    def ordinal(number)
      if (11..13).include?(number.to_i % 100)
        "#{number}<span class=\"ordinal\">th</span>"
      else
        case number.to_i % 10
        when 1; "#{number}<span class=\"ordinal\">st</span>"
        when 2; "#{number}<span class=\"ordinal\">nd</span>"
        when 3; "#{number}<span class=\"ordinal\">rd</span>"
        else "#{number}<span class=\"ordinal\">th</span>"
        end
      end
    end

    # Formats date either as an ordinal or by a given date format.
    # Adds %o as ordinal representation of the day.
    def format_date(date, format)
      date = datetime(date)
      if format.nil? || format.empty? || format == "ordinal"
        date_formatted = ordinalize(date)
      else
        date_formatted = date.strftime(format)
        date_formatted.gsub!(/%o/, ordinal(date.strftime("%e").to_i))
      end
      date_formatted
    end
  end
end

module Jekyll
  class Post
    include Octopress::Date

    # Convert this post into a hash for use in Liquid templates.
    #
    # Returns <hash>
    def to_liquid
      date_format = self.site.config['date_format']
      self.data.deep_merge({
        "title" => self.data["title"] || self.slug.split("-").select { |w| w.capitalize! || w }.join(" "),
        "url" => self.url,
        "date" => self.date,

        # Monkey patching...
        "date_formatted" => format_date(self.date, date_format),

        "id" => self.id,
        "categories" => self.categories,
        "next" => self.next,
        "previous" => self.previous,
        "content" => self.content
      })
    end
  end

  class Page
    include Octopress::Date

    # Initialize a new Page.
    #
    # site - The Site object.
    # base - The String path to the source.
    # dir  - The String path between the source and the file.
    # name - The String filename of the file.
    def initialize(site, base, dir, name)
      @site = site
      @base = base
      @dir = dir
      @name = name

      self.process(name)
      self.read_yaml(File.join(base, dir), name)

      # Monkey patching...
      date_format = self.site.config["date_format"]
      self.data["date_formatted"] = format_date(self.date["date"], date_format) if self.data.has_key?("date")
    end
  end
end
