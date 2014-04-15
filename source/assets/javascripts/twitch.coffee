status = ->
  $.getJSON "https://api.twitch.tv/kraken/streams/avalonstar/?callback=?", (response) ->
    console.log response

    if response.stream != null
      return

status()

setInterval status, 60000


$ ->
  $.getJSON "https://api.twitch.tv/kraken/channels/avalonstar/?callback=?", (response) ->
    console.log response
    console.log response.name
