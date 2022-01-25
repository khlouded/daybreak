
    
    
    //objects
    const nextLink = $('.next_cs_link');
    const nextGradient = $('.next_ending_gradient');
    //image
    // typography
    const mainP = $('.clyx_colour');
        // //sections

function nextSlide() {

    nextLink.click(function (e) {
        console.log('transition start');
        e.preventDefault();

        let goTo = this.getAttribute("href");

        timeout = window.setTimeout(function () {
            linkTrans.addClass('toworkweek');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    });

}
(function($) {
    nextSlide();
    // winScroll();
    // $(window).resize(function() {
    //     winScroll();
    // });
}(jQuery));