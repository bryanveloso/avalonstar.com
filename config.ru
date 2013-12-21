require 'rubygems'

require 'middleman/rack'
require 'rack'
require 'rack-rewrite'
require 'rack/contrib/try_static'

# The project root directory.
$root = ::File.dirname(__FILE__)

use Rack::Rewrite do
  # Redirections to journal entries.
  r301 %r{^(?:(?:/legacy)?/(?:archives|blog|journal))?/([0-9]{4})/(?:[a-z]{3}|[0-9]{1,2})/[0-9]{1,2}/(.*)/.*?$}, '/journal/$1/$2/'

  # Specific post redirections.
  # r301 ..., ...

  # Redirections to /journal.
  r301 %r{^/archives(/.*/)?$}, '/journal/'
  r301 %r{^/blog(/.*/)?$}, '/journal/'
  r301 %r{^/category(/.*/)?$}, '/journal/'
  r301 %r{^/topic(/.*/)?$}, '/journal/'

  # Redirections to /.
  r301 %r{^/featurettes(/.*/)?$}, '/'
  r301 %r{^/memoirs(/.*/)?$}, '/'
  r301 %r{^/podcasts(/.*/)?$}, '/'
  r301 %r{^/sotm(/.*/)?$}, '/'
  r301 '/bsod', '/'
  r301 '/dancetracker', '/'
  r301 '/product', '/'
  r301 '/radio', '/'

  # Feed redirection.
  r301 '/blog/feed/', '/feed.xml'
  r301 '/journal/feed/', '/feed.xml'

  # Miscellaneous redirections.
  r301 '/colophonics/', '/about/'

  # Redirect ChaoticSoul to its repository on GitHub.
  r301 '/chaoticsoul', 'https://github.com/bryanveloso/chaoticsoul'

  # LOL, Custom built PHP site! Holla 2001!
  r301 %r{^\/index.php(\?.*)?$}, '/'
end

# Build the static site when the app boots
`bundle exec middleman build`

# Enable proper HEAD responses
use Rack::Head

# Deflate Gzip things
use Rack::Deflater

# Attempt to serve static HTML files
use Rack::TryStatic,
  :root => 'tmp',
  :urls => %w[/],
  :try => ['.html', 'index.html', '/index.html']

# Serve a 404 page if all else fails
run lambda { |env|
  [
    404,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=60'
    },
    File.open('tmp/404/index.html', File::RDONLY)
  ]
}
