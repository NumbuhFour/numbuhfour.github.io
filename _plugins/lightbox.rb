# A Liquid tag for Jekyll sites that allows embedding Lightbox images.
# by: kyoendo
# Source URL: https://gist.github.com/4035604
#
# Heavily edited
# Example usage: {% lightbox Title of Image, Alt Title, image1, image2 %}
module Jekyll
  class LightboxTag < Liquid::Tag
    def initialize(tag_name, text, token)
      super
      @text = text
    end

    def render(context)
      paths = @text.split(',').map(&:strip)
      source = "<div class=\"gallery\">"
      for path in paths
        id = rand(999999)
        # source += "<a href=\"/images/#{path}\" rel=\"lightbox\" title=\"#{title}\"><img src=\"/images/#{path}\" alt=\"#{alt || title}\" style=\"width:130px;height:auto;\"/></a>"
        source += "<a href=\"#img#{id}\"><img src=\"/images/#{path}\" style=\"width:130px;height:auto\"/></a>"
        source += "<a href=\"#_\" class=\"lightbox\" id=\"img#{id}\"><img src=\"/images/#{path}\"/></a>"
      end
      source += "</div>"
    end
  end
end

Liquid::Template.register_tag('lightbox', Jekyll::LightboxTag)
