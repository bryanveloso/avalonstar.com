module Jekyll
  class YouTube < Liquid::Tag
    def initialize(name, id, tokens)
      super
      @id = id
    end

    def render(context)
      %(
        <div class="embed-container">
          <iframe src="http://youtube.com/embed/#{@id}?vq=hd720" frameborder="0"></iframe>
        </div>
      )
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTube)
