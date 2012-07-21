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
