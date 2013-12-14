# Require any additional compass plugins here.
require 'autoprefixer-rails'
require 'compass-normalize'
require 'csso'
require 'modular-scale'
require 'susy'

# Additional import paths for external dependencies:
add_import_path 'components/typeplate/scss/'

project_type = :stand_alone

# Publishing paths
http_path = '/'
http_images_path = '/images'
http_fonts_path = '/fonts'
css_dir = '_source/stylesheets'

# Local development paths
sass_dir = 'sass'
images_dir = '_source/images'
fonts_dir = '_source/fonts'

line_comments = false
output_style = :compressed
preferred_syntax = :sass

# Post-compile hoook to autoprefix our CSS.
on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << Csso.optimize(AutoprefixerRails.compile(css))
  end
end
