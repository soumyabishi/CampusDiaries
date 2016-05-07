'use strict';

var app = (function(document, $) {
    var docElem = document.documentElement,
        _userAgentInit = function() {
            docElem.setAttribute('data-useragent', navigator.userAgent);
        },
        _init = function() {
            $(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function() {
                $(document).foundation('joyride', 'start');
            });
            _userAgentInit();
        };
    return {
        init: _init
    };
})(document, jQuery);

(function() {
    app.init();
})();



 $(function() {

     $('#mi-slider').catslider();

 });

 $(function() {
     $('header a').bind('click', function(event) {
         var $anchor = $(this);

         $('html, body').stop().animate({
             scrollTop: $($anchor.attr('href')).offset().top
         }, 1500, 'easeInOutExpo');
         event.preventDefault();
     });
 });



