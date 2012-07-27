require "bundler/setup"
require "sinatra/base"
require "rack-rewrite"

# The project root directory.
$root = ::File.dirname(__FILE__)

use Rack::Rewrite do
  # Redirections to journal entries.
  r301 %r{^\/(?:legacy)\/(?:journal)\/([0-9]{4})\/[a-z]{3}\/[0-9]{1,2}\/(.*)\/$}, '/journal/$1/$2/'
  r301 %r{^\/(?:blog|journal)\/([0-9]{4})\/[a-z]{3}\/[0-9]{1,2}\/(.*)\/$}, '/journal/$1/$2/'
  r301 %r{^\/([0-9]{4})\/[0-9]{1,2}\/[0-9]{1,2}\/(.*)\/$}, '/journal/$1/$2/'

  # Redirections to /journal.
  r301 %r{^\/archives(\/.*\/)?$}, '/journal'
  r301 %r{^\/category(\/.*\/)?$}, '/journal'
  r301 %r{^\/topic(\/.*\/)?$}, '/journal'
  r301 '/blog', '/journal'

  # Redirections to /.
  r301 %r{^\/featurettes(\/.*\/)?$}, '/'
  r301 %r{^\/memoirs(\/.*\/)?$}, '/'
  r301 %r{^\/sotm(\/.*\/)?$}, '/'
  r301 '/bsod', '/'
  r301 '/product', '/'

  # Miscellaneous redirections.
  r301 '/colophonics', '/about'

  # Redirect ChaoticSoul to its repository on GitHub.
  r301 '/chaoticsoul', 'https://github.com/bryanveloso/chaoticsoul'

  # LOL, Custom built PHP site! Holla 2001!
  r301 '/index.php', '/'
end

class SinatraStaticServer < Sinatra::Base
  get(/.+/) do
    send_sinatra_file(request.path) {404}
  end

  not_found do
    send_sinatra_file("404.html") {"Sorry, I cannot find #{request.path}"}
  end

  def send_sinatra_file(path, &missing_file_block)
    file_path = File.join(File.dirname(__FILE__), "public", path)
    file_path = File.join(file_path, "index.html") unless file_path =~ /\.[a-z]+$/i
    File.exist?(file_path) ? send_file(file_path) : missing_file_block.call
  end
end

run SinatraStaticServer
