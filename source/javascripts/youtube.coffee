---
---

$ ->
  $.getJSON "https://gdata.youtube.com/feeds/api/users/bryanveloso/uploads?v=2&max-results=1&alt=jsonc", (response) ->
    console.log response.data.items[0]

  $.getJSON "https://gdata.youtube.com/feeds/api/users/bryanveloso?v=2&alt=json", (response) ->
    $('.js-youtube-subscriber-count').text response.entry.yt$statistics.subscriberCount
