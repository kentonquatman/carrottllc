var Site = window.Site || {};
(function($) {
  $(function() {
  
    // SMOOTH SCROLL
    $('header nav a').smoothScroll({offset: -60});
    $('.top-button').smoothScroll();
    
    // STICKY NAV BAR
		$(function() {
		  function stickyNav() {
		    if ($(window).scrollTop() >= 301) {
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
		
		// SLIDES
    $('#cases .content').flexslider({
      animation: "slide",
      slideshow: false,
      smoothHeight: "1"
    });
    
    // TEAM SLIDE TOGGLE
    $('#team .staff-header').click(function(){
      $(this).toggleClass('open');
      $(this).siblings('.bio').slideToggle();
    });

  });
})(jQuery);