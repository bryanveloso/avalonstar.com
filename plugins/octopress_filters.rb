require './plugins/post_filters'
require 'rubypants'

module OctopressFilters
  def post_filter(input)
    input = unwrap(input)
    RubyPants.new(input).to_html
  end
end

module Jekyll
  class ContentFilters < PostFilter
    include OctopressFilters
    def post_render(post)
      if post.ext.match('html|markdown')
        post.content = post_filter(post.content)
      end
    end
  end
end

module OctopressLiquidFilters
  # Removes trailing forward slashes from a string for easily appending
  # URL segments.
  def strip_slash(input)
    if input =~ /(.+)\/$|^\/$/
      input = $1
    end
    input
  end

  # Returns a title-cased string based on John Gruber's title case
  # http://daringfireball.net/2008/08/title_case_update
  def titlecase(input)
    input.titlecase
  end
end

Liquid::Template.register_filter OctopressLiquidFilters
