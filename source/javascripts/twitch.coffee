---
---

status = ->
  $.getJSON "https://api.twitch.tv/kraken/streams/vlogalonstar/?callback=?", (response) ->
    console.log response

    if response.stream != null
      return

status()

setInterval status, 60000
