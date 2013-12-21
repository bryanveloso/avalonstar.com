# If you have OpenSSL installed, we recommend updating
# the following line to use 'https'
source 'http://rubygems.org'

ruby '2.0.0'

gem 'middleman', '~> 3.2.1'

# Middleman's blog functionality
gem 'middleman-blog'
gem 'builder'
gem 'nokogiri'

# Live-reloading plugin
gem 'middleman-livereload', '~> 3.1.0'

# Autoprefixer plugin
gem 'middleman-autoprefixer', '~> 0.2.3'

# HTML minification
gem 'middleman-minify-html'

# Syntax-highlighting support
gem 'middleman-syntax'

# Image optimization at build time
gem 'middleman-imageoptim', '~> 0.1.3'

# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.0', :platforms => [:mswin, :mingw]

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem 'ruby18_source_location'
end

# Deployment-related plugins
gem 'newrelic_rpm'
gem 'rack-contrib'
gem 'rack-rewrite'
gem 'unicorn'
