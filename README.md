# NodeSapp01
Prueba01


.on('beforeChange', function(event, slick, currentSlide) {
        if ($('.slick-highlight').parents('.highlight').css('display') !== 'none') {
          $('.slick-higlight-bg')
            .slick('slickGoTo', currentSlide +1, true);
        }
      })
	  
en el archivo bin/www modifica la liena donde dice: var port = ...
por este
var port = normalizePort(process.env.PORT || process.argv[2] || '3000');

alli solo colocas node bin/www #port y listo
eso mientras hay soluciones mas elabordas pero con eso deberia bastar por ahora

npm -i nodemon -g
nodemon bin/www