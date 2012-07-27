module Jekyll
  class YouTube < Liquid::Tag
    def initialize(name, id, tokens)
      super
      @id = id
    end

    def render(context)
      %(<iframe src="http://youtube.com/embed/#{@id}" frameborder="0" allowfullscreen="allowfullscreen"></iframe>)
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTube)
