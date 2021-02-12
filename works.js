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
            block.css("background-color", "#D4DCDE");
            mainP.css({"color":"#000000"});
            typeWritter();
        }
        else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < c1Start + c1Length - windowH*titleChange) {
            // case1
            block.css("background-color", "#000");
            mainP.css({"color":"#F6F6F6"});
            $('works_title').removeClass('word_enter');
        }
        else if (wScroll >= c1Start + c1Length - windowH*titleChange && wScroll < c2Start + c2Length - windowH*titleChange) {
            // case2
            block.css("background-color", "#FFE66A");
            mainP.css({"color":"#4303A7"});
            
        }
        else if (wScroll >= c2Start + c2Length - windowH*titleChange && wScroll < c3Start + c3Length - windowH*titleChange) {
            // case3
            block.css("background-color", "#CAE6E2");
            mainP.css({"color":"#295849"});
        }
        else if (wScroll >= c3Start + c3Length - windowH*titleChange && wScroll < footStart + footLength - windowH*titleChange) {
            // footer
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#000000"});
        }
        else {
            block.css("background-color", "#f6f6f6");
        }
    }));
}
(function($) {
    winScroll();
    $(window).resize(function() {
        winScroll();
    });
}(jQuery));