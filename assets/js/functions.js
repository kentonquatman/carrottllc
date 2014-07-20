var Site = window.Site || {};
(function($) {
  $(function() {
  
    // SMOOTH SCROLL
    $('header nav a').smoothScroll({offset: -40});
    $('.top-button').smoothScroll();
    
    // STICKY NAV BAR
		$(function() {
		  function stickyNav() {
		    if ($(window).scrollTop() >= 440) {
					$('header nav').addClass('sticky');
					$('.top-button').removeClass('hide');
		    }
		    else {
		      $('header nav').removeClass('sticky');
		      $('.top-button').addClass('hide');
				}
		  }
		  $(window).scroll(stickyNav);
		});

  });
})(jQuery);