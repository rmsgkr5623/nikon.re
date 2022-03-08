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
  $(this).find(' > ul > li > ul, > .menubox-1__sub-menu-bg').stop().slideDown(00);
});

$('.menubox-1').mouseleave(function() {
  $(this).find(' > ul > li > ul, > .menubox-1__sub-menu-bg').stop().slideUp(00);
});


console.clear();

function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper-container", {
    slidesPerView: 1,
    loop:true,
    effect: "fade",
     autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider-box-1 .slider-button-next",
      prevEl: ".slider-box-1 .slider-button-prev",
    },
  });
}

SliderBox1__init();