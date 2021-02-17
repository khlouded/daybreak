(function($) {
    worksTransition();
    winScroll();
    footerReveal();
    $(window).resize(function() {
        winScroll();
        startTransform();
        startSizing();
    });
    $(document).ready(function() {
        winScroll();
        startTransform();
        startSizing();
    });
}(jQuery));  