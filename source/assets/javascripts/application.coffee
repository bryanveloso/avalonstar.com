# Media Query Detection
#
$ ->
  size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

  if size is 'mobile'
    $('body').addClass('mobile')
    console.log 'mobile'


# Off-Canvas
#
OffCanvasToggle =
  init: (triggers) ->
    $(triggers).click (e) ->
      console.log 'wat'
      e.preventDefault()
      OffCanvasToggle.toggleClasses this
      # OffCanvasToggle.toggleText triggers

  toggleClasses: (el) ->
    body = $('body')
    direction = $(el).attr('href')
    body.toggleClass('show-left').removeClass('show-right') if direction is '#left'
    body.toggleClass('show-right').removeClass('show-left') if direction is '#right'
    body.attr 'class'

  toggleText: (triggers) ->
    body = $('body')
    left = $(triggers).filter('[href="#left"]')
    right = $(triggers).filter('[href="#right"]')

    if body.hasClass('show-left')
      left.text 'hide left'
    else
      left.text 'show left'
    if body.hasClass('show-right')
      right.text 'hide right'
    else
      right.text 'show right'

$(document).ready ->
  OffCanvasToggle.init $('.toggle')


# Other Things
#
$(document).ready ->
  $('.header > .site-logotype').fitText 1.2
  $('.scroll-target').smoothScroll()
