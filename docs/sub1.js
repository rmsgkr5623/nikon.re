

console.clear();

$('body').imagesLoaded(function() {
  $('.loading').remove();
  AOS.init();
});


console.clear();

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ( scrollTop == 0 ) {
    $('.top-bar').removeClass('follow');
  }
  else {
    $('.top-bar').addClass('follow');
  }
});

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ($(window).scrollTop() > 2) {
    $('.top-bar-2').addClass('shown');
  }
  else {
    $('.top-bar-2').removeClass('shown');
  }
  
  if ($(window).scrollTop() > 2) {
    $('.top-bar-2').addClass('under-line');
  }
  else {
    $('.top-bar-2').removeClass('under-line');
  }
})

$('.menu-1 > li').mouseenter(function() {
  const $li = $(this);
  const width = $li.width();
  const left = $li.position().left;
  $('.menu-1__line').css('left', left).css('width', width);
  
});

$('.menubox-1').mouseenter(function() {
  $(this).find(' > ul > li > ul, > .menubox-1__sub-menu-bg').stop().slideDown(0);
});

$('.menubox-1').mouseleave(function() {
  $(this).find(' > ul > li > ul, > .menubox-1__sub-menu-bg').stop().slideUp(0);
});