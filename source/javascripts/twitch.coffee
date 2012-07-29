---
---

status = ->
  $.getJSON "https://api.twitch.tv/kraken/streams/vlogalonstar/?callback=?", (response) ->
    console.log response

setInterval status, 60000
