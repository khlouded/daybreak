    //sections
    const secHead = $('#sec_heading');
    const secDes = $('#sec_description');
    const secYear = $('#sec_year');
    const secCase = $('#sec_case');
    const secNext = $('#sec_next');
    
    //objects
    const nextLink = $('.next_cs_link');
    const nextGradient = $('.next_ending_gradient');
    const yearHead = $('.year_heading');
    const stick = $('.stick');
    //image
    let snackRight = $('.snack_right');
    let snackLeft = $('.snack_left');
    // typography
    const mainP = $('.snacks_colour');
function winScroll() {
    //size
    let headLength = secHead.innerHeight();
    let desLength = secDes.innerHeight();
    let yearLength = secYear.innerHeight();
    let caseLength = secCase.innerHeight();
    let nextLength = secNext.innerHeight();

    let windowH = $(window).innerHeight();  

    $(window).scroll($.throttle( 10,function() {
        let wScroll = $(window).scrollTop();
        let headStart = secHead.offset().top;
        let desStart = secDes.offset().top;
        let yearStart = secYear.offset().top;
        let caseStart = secCase.offset().top;
        let nextStart = secNext.offset().top;

        if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
            pageTrans.css({"display":"flex"});
        }
        else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
            stick.css({"color":"#000000"});
            pageTrans.css({"display":"none"});
        }
        else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < yearStart + yearLength - windowH*titleChange) {
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
        else if (wScroll >= yearStart + yearLength - windowH*titleChange && wScroll < caseStart + caseLength - windowH*titleChange) {
            // case
            block.css("background-color", "#CAE6E2");
            mainP.css({"color":"#295849"});
            stick.css({"color":"#295849"});
            yearHead.css("background-color", "#CAE6E2");
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
            nextLink.css({"transform":"translate( 0,-" + Math.sqrt(5*scrollPercentNext*100) + "%)"});
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