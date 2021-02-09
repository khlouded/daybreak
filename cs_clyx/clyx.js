function winScroll() {
    //sections
    const secHead = $('#sec_heading');
    const secDes = $('#sec_description');
    const secType = $('#sec_type');
    const secAdv = $('#sec_adventure');
    const secClu = $('#sec_clue');
    const secGym = $('#sec_gym');
    const secOrg = $('#sec_organize');
    const secCase = $('#sec_case');
    const secNext = $('#sec_next');
    //size
    let headLength = secHead.innerHeight();
    let desLength = secDes.innerHeight();
    let typeLength = secType.innerHeight();
    let advLength = secAdv.innerHeight();
    let cluLength = secClu.innerHeight();
    let gymLength = secGym.innerHeight();
    let orgLength = secOrg.innerHeight();
    let caseLength = secCase.innerHeight();
    let nextLength = secNext.innerHeight();
    //timing
    const titleChange = 0.25;
    //objects
    const nextLink = $('.next_cs_link');
    const nextGradient = $('.next_ending_gradient');
    //image
    // typography
    const mainP = $('.clyx_colour');

    $(window).scroll(function() {
        let wScroll = $(window).scrollTop();
        let headStart = secHead.offset().top;
        let desStart = secDes.offset().top;
        let typeStart = secType.offset().top;
        let advStart = secAdv.offset().top;
        let cluStart = secClu.offset().top;
        let gymStart = secGym.offset().top;
        let orgStart = secOrg.offset().top;
        let caseStart = secCase.offset().top;
        let nextStart = secNext.offset().top;

        if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#5018a8"});
        }
        else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#5018a8"});
        }
        else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < typeStart + typeLength - windowH*titleChange) {
            //type
            block.css("background-color", "#F6EFE2");
            mainP.css({"color":"#2f40c9"});
            
        }
        else if (wScroll >= typeStart + typeLength - windowH*titleChange && wScroll < advStart + advLength - windowH*titleChange) {
            //adventure
            block.css("background-color", "#D9F4AA");
            mainP.css({"color":"#272753"});
        }
        else if (wScroll >= advStart + advLength - windowH*titleChange && wScroll < cluStart + cluLength - windowH*titleChange) {
            //clu
            block.css("background-color", "#FCED5F");
            mainP.css({"color":"4303A7"});
        }
        else if (wScroll >= cluStart + cluLength - windowH*titleChange && wScroll < gymStart + gymLength - windowH*titleChange) {
            //gym
            block.css("background-color", "#D9F4AA");
            mainP.css({"color":"#272753"});
        }
        else if (wScroll >= gymStart + gymLength - windowH*titleChange && wScroll < orgStart + orgLength - windowH*titleChange) {
            //org
            block.css("background-color", "#FCED5F");
            mainP.css({"color":"4303A7"});
        }
        else if (wScroll >= orgStart + orgLength - windowH*titleChange && wScroll < caseStart + caseLength - windowH*titleChange) {
            block.css("background-color", "#f6f6f6");
            mainP.css({"color":"#272753"});
        }
        else {

            block.css("background-color", "#f6f6f6");
        }
        if (wScroll >= nextStart - windowH*titleChange) {
            let scrollValueNext = Math.abs(wScroll - (nextStart - windowH*titleChange));
            let scrollPercentNext = (scrollValueNext /  (nextLength*0.25)) * 100;
            nextLink.css({"transform":"translate( 0,-" + 10*Math.sqrt(scrollPercentNext) + "%)"});
            nextGradient.css({
                "display":"block",
                "background-image":"linear-gradient(180deg, transparent " + (100 - scrollPercentNext) + "%, #fff 100%)"
            });
        } else {
            nextLink.css({ "transform": "translate( 0, 0%)" });
            nextGradient.css({
                "display":"none",
                "background-image":"linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)"
            });
        }

        let timeout = null;

        function cancelNext() {
            timeout = null;
            clearTimeout(timeout);
        }

        if (wScroll >= nextStart + nextLength*0.8 - windowH) {
            timeout = setTimeout(function() {
                let goTo = nextLink.attr("href");
                window.location = goTo;
            }, 2500);
        } else {
            cancelNext();
        }
    });
}
(function($) {
        winScroll();
    $(window).resize(function() {
        winScroll();
    });
}(jQuery));