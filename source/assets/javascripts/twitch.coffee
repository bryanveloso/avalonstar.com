status = ->
  $.getJSON "https://api.twitch.tv/kraken/streams/avalonstar/?callback=?", (response) ->
    console.log response

    if response.stream != null
      return

status()

setInterval status, 60000

# Follower count.
$ ->
  $.getJSON "https://api.twitch.tv/kraken/channels/avalonstar/?callback=?", (response) ->
    ($ '.js-twitch-subscriber-count').html response.followers
