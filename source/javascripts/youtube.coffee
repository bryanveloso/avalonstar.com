---
---

$ ->
  $.getJSON "https://gdata.youtube.com/feeds/api/users/bryanveloso/uploads?v=2&max-results=1&alt=jsonc", (response) ->
    console.log response.data.items[0]
