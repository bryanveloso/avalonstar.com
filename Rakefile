require "rubygems"
require "bundler/setup"
require "stringex"

# Configuration variables.
public_dir = "_public"
source_dir = "_source"
server_port = "4000"

desc "Generate site."
task :generate do
  puts "## Generating site with Jekyll."
  system "compass --compile --css-dir #{source_dir}/stylesheets"
  system "jekyll"
end

desc "Watch the site and regenerate it when changes are made."
task :watch do
    puts "Starting to watch source with Jekyll and Compass."
    system "compass compile --css-dir #{source_dir}/stylesheets" unless File.exist?("#{source_dir}/stylesheets/screen.css")
    jekyllPid = Process.spawn("jekyll --auto")
    compassPid = Process.spawn("compass watch")

    trap("INT") {
      [jekyllPid, compassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
      exit 0
    }

    [jekyllPid, compassPid].each { |pid| Process.wait(pid) }
end

desc "Preview the site in a browser."
task :preview do
  puts "Starting to watch source with Jekyll and Compass. Starting Rack on port #{server_port}."
  system "compass compile --css-dir #{source_dir}/stylesheets" unless File.exist?("#{source_dir}/stylesheets/screen.css")
  jekyllPid = Process.spawn("jekyll --auto")
  compassPid = Process.spawn("compass watch")
  rackupPid = Process.spawn("rackup --port #{server_port}")

  trap("INT") {
    [jekyllPid, compassPid, rackupPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, compassPid, rackupPid].each { |pid| Process.wait(pid) }
end

desc "List tasks."
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end
