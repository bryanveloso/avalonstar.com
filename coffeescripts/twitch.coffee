status = ->
  $.getJSON "https://api.twitch.tv/kraken/streams/avalonstartv/?callback=?", (response) ->
    console.log response

    if response.stream != null
      return

status()

setInterval status, 60000


$ ->
  $.getJSON "https://api.twitch.tv/kraken/channels/avalonstartv/?callback=?", (response) ->
    console.log response
    console.log response.name
