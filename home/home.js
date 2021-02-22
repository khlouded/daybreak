
function startSizing() {
    if(screenMobileTop()) {
        let startHeading = 81;
        return startHeading;
    } else if (screenLandscapeBase() && screenLandscapeTop()) {
        let startHeading = 150;
        return startHeading;
    } else if (screenTabletBase() && screenTabletTop()) {
        let startHeading = 200;
        return startHeading;
    } else if (screenDesktopBase() && screenDesktopTop()) {
        let startHeading = 280;
        return startHeading;
    } else if (screenLargeOneBase() && screenLargeOneTop()) {
        let startHeading = 300;
        return startHeading;
    } else if (screenLargeTwoBase() && screenLargeTwoTop()) {
        let startHeading = 370;
        return startHeading;
    } else if (screenLarger()) {
        let startHeading = 440;
        return startHeading;
    } else {
        let startHeading = 280;
        return startHeading;
    }
}
// function startTransform() {
//     //media queries
//     if(screenMobileTop()) {
//         let startSize = 100;
//         return startSize;
//     } else if (screenLandscapeBase() && screenLandscapeTop()) {
//         let startSize = 125;
//         return startSize;
//     } else if (screenTabletBase() && screenTabletTop()) {
//         let startSize = 135;
//         return startSize;
//     } else if (screenDesktopBase() && screenDesktopTop()) {
//         let startSize = 200;
//         return startSize;
//     } else if (screenLargeOneBase() && screenLargeOneTop()) {
//         let startSize = 220;
//         return startSize;
//     } else if (screenLargeTwoBase() && screenLargeTwoTop()) {
//         let startSize = 230;
//         return startSize;
//     } else if (screenLarger()) {
//         let startSize = 270;
//         return startSize;
//     } else {
//         let startSize = 150;
//         return startSize;
//     }
// }

function winScroll() {
    // sections
    const secHead = $('#sec_heading');
    const secC_one = $('#sec_caseOne');
    const secC_two = $('#sec_caseTwo');
    const secC_three = $('#sec_caseThree');
    const secFooter = $('#sec_footer');
    
    // Case Study Images
    const mainP = $('.home_colour');
    const caseImg = $('.case_item');
    const c1_i1 = $('.caseone_imageone');
    const c1_i2 = $('.caseone_imagetwo');
    const c1_i3 = $('.caseone_imagethree');
    const c2_i2 = $('.home_imageclyx');
    const c2_i3 = $('.casetwo_imagethree');

    const c3_i3_m1 = $('.home_caseimage_snacks.c3_vid1');
    const c3_i3_m2 = $('.home_caseimage_snacks.c3_vid2');

    //other
    const banText = $('.banner_text');

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
        caseImg.css({"background-color":"#f1f1f1"});
        block.css("background-color", "#D4DCDE");
        banText.css({"color":"#000"});
    } else if (wScroll >= headStart + headLength  - windowH*titleChange && wScroll < C_oneStart + C_oneLength - windowH*titleChange) {
        //case one
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1"});
        banText.css({"color":"#fff"});
        block.css("background-color", "#000000");
        let scrollValue1 = Math.abs(wScroll - (C_oneStart - windowH*titleChange));
        let scrollPercent1 = (scrollValue1 / C_oneLength) * 100;  
        // images
        c1_i1.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
        c1_i2.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
        c1_i3.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
    } else if (wScroll >= C_oneStart + C_oneLength - windowH*titleChange && wScroll < C_twoStart + C_twoLength - windowH*titleChange) {
        //case two
        mainP.css({"color":"#4303A7"});
        caseImg.css({"background-color":"#FFF9DB"});
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
        caseImg.css({"background-color":"#ADDAD5"});
        block.css("background-color", "#FCFAF7"); 
        let scrollValue3 = Math.abs(wScroll - (C_threeStart - windowH*titleChange));
        let scrollPercent3 = (scrollValue3 / C_threeLength) * 100;
        console.log(scrollPercent3+" percent3");

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
            startTransform();
            startSizing();
        });
        $(window).scroll();
    });
    $(window).on( "load", function() {
        winScroll();
        startTransform();
        startSizing();
    });
}(jQuery));  