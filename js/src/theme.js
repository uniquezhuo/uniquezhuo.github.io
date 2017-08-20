(function () {
  "use strict";

  var Theme = {};

  Theme.backToTop = {
    register: function () {
      var $backToTop = $('#back-to-top');

      $(window).scroll(function () {
        if($(window).scrollTop() > 100) {
          $backToTop.fadeIn(1000);
        } else {
          $backToTop.fadeOut(1000);
        }
      });

      $backToTop.click(function () {
        $('body').animate({ scrollTop: 0 });
      });
    }
  };

  Theme.fancybox = {
    register: function () {
      if ($.fancybox){
        $('.post').each(function () {
          $(this).find('img').each(function () {
            $(this).wrap('<a class="fancybox" href="' + this.src + '" title="' + this.alt + '"></a>')
          });
        });

        $('.fancybox').fancybox({
          openEffect	: 'elastic',
          closeEffect	: 'elastic'
        });
      }
    }
  };

  this.Theme = Theme;

  //注册serviceWork
  navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration){
    console.log('Excellent, registered with scope: ', registration.scope);
  })
}.call(this));
