require "bundler/setup"
require "rack-rewrite"

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

  # Miscellaneous redirections.
  r301 '/colophonics/', '/about/'

  # Redirect ChaoticSoul to its repository on GitHub.
  r301 '/chaoticsoul', 'https://github.com/bryanveloso/chaoticsoul'

  # LOL, Custom built PHP site! Holla 2001!
  r301 %r{^\/index.php(\?.*)?$}, '/'
end

Bundler.require(:default)
run Rack::Jekyll.new
