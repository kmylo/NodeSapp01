$( document ).ready(function() {

  $( ".section-highlight03 " ).addClass( "selected highlight" );
  $( "div.main-wrapper" ).removeClass( "dirty" );
});

 $(document).ready(function() {
    $('.responsive-slick').slick({
        // dots: true,
        infinite: true,
        lazyLoad: 'ondemand',
      /*  variableWidth: true,*/
        // animating: true,
       /*  cssEase: 'cubic-bezier(0.50, 0.050, 0.65, 0.1)',*/
        cssEase: 'ease-out',
       /* useCSS: false,*/
        asNavFor: '.responsive',
        useTransform: true,
        transformsEnabled: true,
        // easing: 'transform 0.5s ease 0',
        speed: 950,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                // centerMode: true,
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                /*dots: true,*/
                infinite: true,
            }
        },{
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                /*dots: true,*/
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                /*dots: true,*/
                infinite: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                /*dots: true,*/
                infinite: true,
                /*autoplay: true,
                autoplaySpeed: 2000,*/
            }
        }]
    });

    $('.slick-highlight')
    .slick({
      infinite: true,
      asNavFor: '.slick-highlight',
      speed: 550,
      lazyLoad: 'ondemand',
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      cssEase: 'ease-out',
      useTransform: true,
      waitForAnimate: false,
      transformsEnabled: true,
      responsive: [{
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  $('.slick-highlight-xs')
    .slick({
      asNavFor: '.slick-highlight-xs',
      infinite: true,
      speed: 550,
      autoplay: true,
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      cssEase: 'ease-out',
      useTransform: true,
      transformsEnabled: true,
      responsive: [{
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  $('.slick-higlight-bg')
    .slick({
      asNavFor: '.slick-highlight-bg',
      infinite: true,
      autoplay: false,
      speed: 1950,
      lazyLoad: 'ondemand',
      autoplayspeed: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      cssEase: 'ease-in',
      useTransform: true,
      transformsEnabled: true,
      centerPadding: '0',
      responsive: [{
        breakpoint: 4000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }]
    });
});

