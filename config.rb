# Require any additional compass plugins here.
require "compass-normalize"
require "susy"

# Additional import paths for external dependencies:
add_import_path "components/typeplate/scss/"

project_type = :stand_alone

# Publishing paths
http_path = "/"
http_images_path = "/images"
http_fonts_path = "/fonts"
css_dir = "public/stylesheets"

# Local development paths
sass_dir = "sass"
images_dir = "source/images"
fonts_dir = "source/fonts"

line_comments = false
output_style = :compressed
