$ ->
  # Fetches all of my uploaded videos.
  $.getJSON "https://gdata.youtube.com/feeds/api/users/bryanveloso/uploads?v=2&max-results=1&alt=jsonc", (response) ->
    console.log response.data.items[0]

  # Fetches my YouTube user. Prints out the subscriber count.
  $.getJSON "https://gdata.youtube.com/feeds/api/users/bryanveloso?v=2&alt=json", (response) ->
    $('.js-youtube-subscriber-count').text response.entry.yt$statistics.subscriberCount

  # Fetches the Vlogalonstar playlist.
  $.getJSON "https://gdata.youtube.com/feeds/api/playlists/PLD47E8E769D01C633?v=2&alt=jsonc", (response) ->
    video = response.data.items[0].video
    console.log video
