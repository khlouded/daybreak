
function winScroll() {
    // sections
    const secHead = $('#sec_heading');
    const secC_one = $('#sec_caseOne');
    const secC_two = $('#sec_caseTwo');
    const secC_three = $('#sec_caseThree');
    const secFooter = $('#sec_footer');
    
    // Case Study Images
    const mainP = $('.home_colour');
    const aboutArrow = $('.about_arrow svg path');
    const caseImg = $('.case_item');
    const c1_i2 = $('.caseone_imagetwo');
    const c1_i3 = $('.caseone_imagethree');
    const c2_i2 = $('.home_imageclyx');
    const c2_i3 = $('.casetwo_imagethree');
    const c3_i3_m1 = $('.home_caseimage_snacks.c3_vid1');
    const c3_i3_m2 = $('.home_caseimage_snacks.c3_vid2');

    // Heights
    let headLength = secHead.innerHeight();
    let C_oneLength = secC_one.innerHeight();
    let C_twoLength = secC_two.innerHeight();
    let C_threeLength = secC_three.innerHeight();
    let footerLength = secFooter.innerHeight();

    let wScroll = $(window).scrollTop();

    //position information
    let headStart = secHead.offset().top;
    let C_oneStart = secC_one.offset().top;
    let C_twoStart = secC_two.offset().top;
    let C_threeStart = secC_three.offset().top;
    let footerStart = secFooter.offset().top;

    if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1","background-image":"none"});
        block.css("background-color", "#D4DCDE");
        aboutArrow.css({"color":"#000"});
    } else if (wScroll >= headStart + headLength  - windowH*titleChange && wScroll < C_oneStart + C_oneLength - windowH*titleChange) {
        //case one
        mainP.css({"color":"#fff"});
        caseImg.css({"background-color":"#f1f1f1","background-image": "linear-gradient(180deg, #BCCAEF 0%, #E5D4E2 100%)"});
        aboutArrow.css({"color":"#fff"});
        block.css("background-color", "#000");
        let scrollValue1 = Math.abs(wScroll - (C_oneStart - windowH*titleChange));
        let scrollPercent1 = (scrollValue1 / C_oneLength) * 100;  
        // images
        c1_i1.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
        c1_i2.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
    } else if (wScroll >= C_oneStart + C_oneLength - windowH*titleChange && wScroll < C_twoStart + C_twoLength - windowH*titleChange) {
        //case two
        mainP.css({"color":"#4303A7"});
        caseImg.css({"background-color":"#FFF9DB","background-image":"none"});
        block.css("background-color", "#FFE66A");       
        let scrollValue2 = Math.abs(wScroll - (C_twoStart - windowH*titleChange)); 
        let scrollPercent2 = (scrollValue2 / C_twoLength) * 100;
        // images
        c2_i2.css({"bottom": "-" + 3*(Math.abs(100-scrollPercent2)) + 150 + "px"});
        c2_i3.css({"background-position":  50+"% 10%"});
        c3_i3_m1.css({"transform":"translate(0, " + (-1)*((100/1)) + "%)"});
        c3_i3_m2.css({"transform":"translate(0, " + ((100/1)) + "%)"});
    } else if (wScroll >= C_twoStart + C_twoLength - windowH*titleChange && wScroll < C_threeStart + C_threeLength - windowH*titleChange) {
        //case three
        mainP.css({"color":"#295849"});
        caseImg.css({"background-color":"#ADDAD5","background-image":"none"});
        block.css("background-color", "#FCFAF7"); 
        let scrollValue3 = Math.abs(wScroll - (C_threeStart - windowH*titleChange));
        let scrollPercent3 = (scrollValue3 / C_threeLength) * 100;
        // console.log(scrollPercent3+" percent3");

        // vids
        if (scrollPercent3 >= 1 ){
            c3_i3_m1.css({"transform":"translate(0, " + (-1)*(200/(scrollPercent3+1)-2*Math.sqrt(scrollPercent3)+18) + "%)"});
            c3_i3_m2.css({"transform":"translate(0, " + (200/(scrollPercent3+1)-2*Math.sqrt(scrollPercent3)+18) + "%)"});
        }
    } else if (wScroll >= C_threeStart + C_threeLength - windowH*titleChange && wScroll < footerStart + footerLength - windowH*titleChange) {

        //footer
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1"});
        block.css("background-color", "#FCFAF7");
    }

}
function worksTransition() {
    let napLink = $(".nap_link");
    let clyxLink = $(".clyx_link");
    let stacksLink = $(".stacks_link");
    napLink.click(function (e) {
        console.log('transition nap');

        e.preventDefault();

        let goTo = this.getAttribute("href");
        window.setTimeout(function () {
            linkTrans.addClass('tonap');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    });
    clyxLink.click(function (e) {
        console.log('transition clyx');

        e.preventDefault();

        let goTo = this.getAttribute("href");
        window.setTimeout(function () {
            linkTrans.addClass('toclyx');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    });
    stacksLink.click(function (e) {
        console.log('transition stacks');

        e.preventDefault();

        let goTo = this.getAttribute("href");
        window.setTimeout(function () {
            linkTrans.addClass('tostacks');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    });
}

(function($) {
    $(document).ready(function() {
        worksTransition();
        $(window).scroll($.throttle( 10,function() {
            winScroll();
        }));
        footerReveal();
        $(window).resize(function() {
            winScroll();
        });
        $(window).scroll();
    });
    $(window).on( "load", function() {
        winScroll();
    });
}(jQuery));  