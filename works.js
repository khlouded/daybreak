    //sections
    const secHead = $('#sec_heading');
    const secC1 = $('#sec_caseone');
    const secC2 = $('#sec_casetwo');
    const secC3 = $('#sec_casethree');
    const secFoot = $('#sec_footer');
    
    // typography
    const mainP = $('.works_colour');
function winScroll() {
    //size
    let headLength = secHead.innerHeight();
    let c1Length = secC1.innerHeight();
    let c2Length = secC2.innerHeight();
    let c3Length = secC3.innerHeight();
    let footLength = secFoot.innerHeight();

    $(window).scroll($.throttle( 20,function() {
        let wScroll = $(window).scrollTop();
        let headStart = secHead.offset().top;
        let c1Start = secC1.offset().top;
        let c2Start = secC2.offset().top;
        let c3Start = secC3.offset().top;
        let footStart = secfoot.offset().top;

        if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
        }
        else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < c1Start + c1Length - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
            stick.css({"color":"#000000"});
        }
        else if (wScroll >= c1Start + c1Length - windowH*titleChange && wScroll < c2Start + c2Length - windowH*titleChange) {
            let scrollValueYear = Math.abs(wScroll - (yearStart - windowH*titleChange));
            let scrollPercentYear = (scrollValueYear /  (yearLength));
            //year ((input - min) * 100) / (max - min) = percent range is between 10 and -10 0% = 0  100% = 20
            snackRight.css({"transform":"rotate(" + ((10 - (-10))*scrollPercentYear - 10 )+ "deg)"});
            snackLeft.css({"transform":"rotate(" + ((10 - (-10))*(1-scrollPercentYear) - 10 ) + "deg)"});
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
            stick.css({"color":"#000000"});
            yearHead.css("background-color", "#f6f6f6");
            
        }
        else if (wScroll >= c2Start + c2Length - windowH*titleChange && wScroll < c3Start + c3Length - windowH*titleChange) {
            // case
            block.css("background-color", "#CAE6E2");
            mainP.css({"color":"#295849"});
            stick.css({"color":"#295849"});
            yearHead.css("background-color", "#CAE6E2");
        }
        else if (wScroll >= c3Start + c3Length - windowH*titleChange && wScroll < footStart + footLength - windowH*titleChange) {
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
                "background-image":"linear-gradient(180deg, transparent " + (200 - scrollPercentNext) + "%, #fff 100%)"
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