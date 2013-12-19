class String
  def titlecase
    small_words = %w(a an and as at but by en for if in of on or the to v v. via vs vs.)

    x = split(" ").map do |word|
      # Note: The word could contain non-word characters!
      # Downcase all `small_words`, capitalize the rest.
      small_words.include?(word.gsub(/\W/, "").downcase) ? word.downcase! : word.smart_capitalize!
      word
    end
    # Capitalize the first and last words.
    x.first.to_s.smart_capitalize!
    x.last.to_s.smart_capitalize!
    # Small words are capitalized after colon, period, exclamation mark
    # and question mark.
    x.join(" ").gsub(/(:|\.|!|\?)\s?(\W*#{small_words.join("|")}\W*)\s/) { "#{$1} #{$2.smart_capitalize} " }
  end

  def titlecase!
    replace(titlecase)
  end

  def smart_capitalize
    # Ignore any leading crazy characters and capitalize the first
    # real character.
    if self =~ /^['"\(\[']*([a-z])/
      i = index($1)
      x = self[i,self.length]
      # Word with capitals and periods mid-word are left alone.
      self[i,1] = self[i,1].upcase unless x =~ /[A-Z]/ or x =~ /\.\w+/
    end
    self
  end

  def smart_capitalize!
    replace(smart_capitalize)
  end
end
