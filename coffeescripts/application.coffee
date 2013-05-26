$ ->
  size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

  if size is 'mobile'
    $('body').addClass('mobile')
    console.log 'mobile'
