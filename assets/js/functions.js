/* Declare a namespace for the site */
var Site = window.Site || {};

(function($) {

  //same as $(document).ready();
  $(function() {

    $('input, textarea').placeholder();

    // replace inline svg files with png fallbacks, include parent container
    // as selector(s) inside the parenthesis
    svgReplace();

  });


})(jQuery);