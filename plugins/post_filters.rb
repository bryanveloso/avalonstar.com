module Jekyll
  # Extended plugin type that allows the plugin to be called on various
  # callback methods.
  class PostFilter < Plugin
    # Called before post is sent to the converter. Allows you to modify the
    # post object before the converter does its thing.
    def pre_render(post)
    end

    # Called after the post is rendered with the converter. Use the post
    # object to modify its contents before the post is inserted into the
    # template.
    def post_render(post)
    end

    # Called after the post is written to the disk. Use the post object to
    # read its contents to do something after the post has been safely
    # written.
    def post_write(post)
    end
  end

  # Monkey patch for the Jekyll Site class. For the original class, see:
  # https://github.com/mojombo/jekyll/blob/master/lib/jekyll/site.rb
  class Site
    # Instance variable to store the various post_filter plugins that
    # are loaded.
    attr_accessor :post_filters

    # Instantiates all of the post_filter plugins. This is basically a
    # duplication of the other loaders in Site#setup.
    def load_post_filters
      self.post_filters = Jekyll::PostFilter.subclasses.select do |c|
        !self.safe || c.safe
      end.map do |c|
        c.new(self.config)
      end
    end
  end

  # Monkey patch for the Jekyll Post class. For the original class, see:
  # https://github.com/mojombo/jekyll/blob/master/lib/jekyll/post.rb
  class Post
    # Copy the #write method to #old_write, so we can redefine #write.
    alias_method :old_write, :write

    # Write the generated post file to the destination directory. It then
    # calls any post_write methods that may exist. `dest` is the String
    # path to the destination directory.
    #
    # Returns nothing.
    def write(dest)
      old_write(dest)
      post_write if respond_to?(:post_write)
    end
  end

  # Monkey patch for the Jekyll Page class. For the original class, see:
  # https://github.com/mojombo/jekyll/blob/master/lib/jekyll/page.rb
  class Page
    # Copy the #write method to #old_write, so we can redefine #write.
    alias_method :old_write, :write

    # Write the generated page file to the destination directory. It then
    # calls any post_write methods that may exist. `dest` is the String
    # path to the destination directory.
    #
    # Returns nothing.
    def write(dest)
      old_write(dest)
      post_write if respond_to?(:post_write)
    end
  end

  # Monkey patch for the Jekyll Convertible module. For the original class,
  # see: https://github.com/mojombo/jekyll/blob/master/lib/jekyll/convertible.rb
  module Convertible
    def is_post?
      self.class.to_s == 'Jekyll:Post'
    end

    def is_page?
      self.class.to_s == 'Jekyll:Page'
    end

    def is_filterable?
      is_post? or is_page?
    end

    # Call the #pre_render methods on all of the loaded post_filter plugins.
    #
    # Returns nothing.
    def pre_render
      self.site.load_post_filters unless self.site.post_filters

      if self.site.post_filters and is_filterable?
        self.site.post_filters.each do |filter|
          filter.pre_render(self)
        end
      end
    end

    # Call the #post_render methods on all of the loaded post_filter plugins.
    #
    # Returns nothing.
    def post_render
      if self.site.post_filters and is_filterable?
        self.site.post_filters.each do |filter|
          filter.post_render(self)
        end
      end
    end

    # Call the #post write methods on all of the loaded post_filter plugins.
    #
    # Returns nothing.
    def post_write
      if self.site.post_filters and is_filterable?
        self.site.post_filters.each do |filter|
          filter.post_write(self)
        end
      end
    end

    # Copy the #transform method to #old_transform, so we can redefine the
    # #transform method.
    alias_method :old_transform, :transform

    # Transform the contents based on the content type. Then call the
    # #post_render method if it exists.
    #
    # Returns nothing.
    def transform
      old_transform
      post_render if respond_to?(:post_render)
    end

    # Copy the #do_layout method to #old_do_layout, so we can redefine the
    # #do_layout method.
    alias_method :old_do_layout, :do_layout

    # Calls the pre_render method if it exists and then adds any necessary
    # layouts to this convertible document.
    #
    # payload - The site payload Hash.
    # layouts - A hash of {"name" => "layout"}.
    #
    # Returns nothing.
    def do_layout(payload, layouts)
      pre_render if respond_to?(:pre_render)
      old_do_layout(payload, layouts)
    end

    # Returns the full URL of each post, including the configured URL.
    def full_url
      self.site.config['url'] + self.url
    end
  end
end
