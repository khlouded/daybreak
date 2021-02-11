    //sections
    const secHead = $('#sec_heading');
    const secDes = $('#sec_description');
    const secYear = $('#sec_year');
    const secCase = $('#sec_case');
    const secNext = $('#sec_next');
    
    //objects
    const nextLink = $('.next_cs_link');
    const nextGradient = $('.next_ending_gradient');
    //image
    // typography
    const mainP = $('.snacks_colour');
function winScroll() {
    //size
    let headLength = secHead.innerHeight();
    let desLength = secDes.innerHeight();
    let yearLength = secYear.innerHeight();
    let caseLength = secCase.innerHeight();
    let nextLength = secNext.innerHeight();

    $(window).scroll($.throttle( 20,function() {
        let wScroll = $(window).scrollTop();
        let headStart = secHead.offset().top;
        let desStart = secDes.offset().top;
        let yearStart = secYear.offset().top;
        let caseStart = secCase.offset().top;
        let nextStart = secNext.offset().top;

        if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
        }
        else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
        }
        else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < yearStart + yearLength - windowH*titleChange) {
            //year
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
            
        }
        else if (wScroll >= yearStart + yearLength - windowH*titleChange && wScroll < caseStart + caseLength - windowH*titleChange) {
            // case
            block.css("background-color", "#CAE6E2");
            mainP.css({"color":"#295849"});
        }
        else if (wScroll >= caseStart + caseLength - windowH*titleChange && wScroll < nextStart + nextLength - windowH*titleChange) {
            // next
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
        }
        else {

            block.css("background-color", "#f6f6f6");
        }
        if (wScroll >= nextStart - windowH*titleChange) {
            let scrollValueNext = Math.abs(wScroll - (nextStart - windowH*titleChange));
            let scrollPercentNext = (scrollValueNext /  (nextLength*0.5)) * 100;
            nextLink.css({"transform":"translate( 0,-" + Math.sqrt(scrollPercentNext*100) + "%)"});
            nextGradient.css({
                "display":"flex",
                "background-image":"linear-gradient(180deg, transparent " + (100 - scrollPercentNext) + "%, #fff 100%)"
            });
        } else {
            nextLink.css({ "transform": "translate( 0, 0%)" });
            nextGradient.css({
                "display":"none",
                "background-image":"linear-gradient(180deg, transparent 100%, #fff 100%);"
            });
        }
    }));
}
function nextSlide() {
    let nextLength = secNext.innerHeight();
    
    let timeout = null;

    function cancelNext() {
        timeout = null;
        clearTimeout(timeout);
    }
    $(window).scroll($.throttle( 20, function() {
        let wScroll = $(window).scrollTop();
        let nextStart = secNext.offset().top;

        if (wScroll >= nextStart + nextLength*0.8 - windowH) {
            timeout = setTimeout(function() {
                let goTo = nextLink.attr("href");
                window.location = goTo;
            }, 2500);
        } else {
            cancelNext();
        }
    }));

}
(function($) {
    nextSlide();
    winScroll();
    $(window).resize(function() {
        winScroll();
    });
}(jQuery));