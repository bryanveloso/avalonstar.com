preload_app true   # Avoid regeneration of the site for each fork.
timeout 30         # Restarts workers that hang for 30 seconds.
worker_processes 6 # Amount of unicorn workers to spin up.
