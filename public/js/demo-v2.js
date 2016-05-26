$( document ).ready(function() {

  $( ".section-highlight03 " ).addClass( "selected highlight" );
  $( "div.main-wrapper" ).removeClass( "dirty" );
});
$(document).ready(function() {
  'use strict';
  let slickConfig = {
    infinite: true,
    lazyLoad: 'progressive',
    cssEase: 'ease-out',
    useTransform: true,
    transformsEnabled: true,
    speed: 500,
    responsive: [{
      breakpoint: 4000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }]
  };

  $('#slick1, #slick2, #slick3, #slick4, #slick5, #slick6, #slick7, #slick8, #slick9, #slick10, #slick1xs, #slick2xs, #slick3xs, #slick4xs, #slick5xs, #slick6xs, #slick7xs, #slick8xs, #slick9xs, #slick10xs')
    .on('init', function(event, slick) {

      slick.buildOut = function buildOut() {

        var _ = this;
        _.$slides =
          _.$slider
            .children(_.options.slide + ':not(.slick-cloned)')
            .addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) {
          $(element)
            .attr('data-slick-index', index)
            .data('originalStyling', $(element).attr('style') || '');
        });
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ?
          $('<div class="slick-track"/>').appendTo(_.$slider) :
          _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap(
          '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
          _.options.slidesToScroll = 1;
        }
        /**
         * add class to the parent div of the a tag for handling the image load
         */
        $('.img-load', _.$slider)//.not('[src]')
        //.addClass('slick-loading')
          .parents('.image')
          .addClass('image-loading');

        //console.log($('img[data-echo]', _.$slider).parents('.image'));


        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) {
          _.$list.addClass('draggable');
        }

        _.changeSlide = function(event, dontAnimate) {

          var  $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

          // If target is a link, prevent default action.
          if($target.is('a')) {
            event.preventDefault();
          }

          // If target is not the <li> element (ie: a child), find the <li>.
          if(!$target.is('li')) {
            $target = $target.closest('li');
          }

          unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
          indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

          switch (event.data.message) {

            case 'previous':
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
              }
              break;

            case 'next':
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
              }
              break;

            case 'index':
              var index = event.data.index === 0 ? 0 :
              event.data.index || $target.index() * _.options.slidesToScroll;

              _.slideHandler(_.checkNavigable(index), false, dontAnimate);
              $target.children().trigger('focus');
              break;

            default:
              return;
          }

          /**
           * llamado a echo.js
           */
          setTimeout(function(){
            echo.render();
          }, 1000);

        };
      };
    })
    .on('breakpoint', function(event, slick, breakpoint){
      echo.render();
    })
    .slick(slickConfig);
});
$(document).ready(function() {
  'use strict';
  $('#slick1')
    .on('beforeChange', function(event, slick, currentSlide) {

    })
    .on('breakpoint', function(event, slick, breakpoint) {
      $('#slick1').slick('slickGoTo');
    })
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick1xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick1xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick1')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick2')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick2xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick2xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick2')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick3')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick3xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick3xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick3')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick4')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick4xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick4xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick4')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick5')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick5xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick5xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick5')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick6')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick6xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick6xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick6')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick7')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick7xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick7xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick7')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick8')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick8xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick8xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick8')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick9')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick9xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick9xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick9')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick10')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick10xs')
        .slick('slickGoTo', currentSlide, true)
    });
  $('#slick10xs')
    .on('afterChange', function(event, slick, currentSlide) {
      $('#slick10')
        .slick('slickGoTo', currentSlide, true)
    });
});
$(document).ready(function() {
  $('.slick-highlight')
    .on('afterChange', function(event, slick, currentSlide) {
      if ($('.slick-highlight').parents('.highlight').css('display') !== 'none') {
        $('.slick-higlight-bg')
          .slick('slickGoTo', currentSlide, true);
      }
    })
    .slick({
      infinite: true,
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
    .on('afterChange', function(event, slick, currentSlide) {
      if ($('.slick-highlight-xs').parents('.highlight-xs').css('display') !== 'none') {
        $('.slick-higlight-bg')
          .slick('slickGoTo', currentSlide, true);
      }
    })
    .slick({
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
