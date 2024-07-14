// smooth-scroll-plugin.js
(function($) {
    $.fn.smoothScroll = function() {
        return this.each(function() {
            var $this = $(this);

            $this.on('click', function(event) {
                event.preventDefault();
                var target = $($this.attr('href'));

                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            });
        });
    };
})(jQuery);

// Apply the plugin to elements with the class 'smooth-scroll'
$(document).ready(function() {
    $('.smooth-scroll').smoothScroll();
});
