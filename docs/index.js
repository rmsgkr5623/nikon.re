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

function SwiperBox1__init() {
  const swiper = new Swiper(".swiper-box-1 .swiper", {
    loop: true,
    pagination: {
      el: ".swiper-box-1 .swiper-pagination"
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-box-1 .swiper-button-next",
      prevEl: ".swiper-box-1 .swiper-button-prev"
    },
    on: {
      slideChangeTransitionStart: function () {
        $('.swiper-box-1 [data-aos]').hide();
        $('.swiper-box-1 [data-aos]').removeClass('aos-init').removeClass('aos-animate');
      },
      slideChangeTransitionEnd: function () {
        $('.swiper-box-1 [data-aos]').show();
        AOS.init();
      }
    }
  });
}

$("body").imagesLoaded(function () {
  setTimeout(function() {
    $('.loading').remove();
    SwiperBox1__init();
  }, 0);
});

function SwiperBox3__init() {
  const swiper = new Swiper('.swiper-box-3 .swiper', {
    slidesPerView:1.3,
    spaceBetween:30,
    loop: true,
    centeredSlides: true,
   
    pagination: {
      el: ".swiper-box-3 .swiper-pagination",
      clickable: true,
    },
  });
}

SwiperBox3__init();
new AOS.init();
$('body').imagesLoaded(function() {
  $('.loading').remove();
  AOS.init();
});
