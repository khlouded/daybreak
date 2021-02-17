
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
function startTransform() {
    //media queries
    if(screenMobileTop()) {
        let startSize = 100;
        return startSize;
    } else if (screenLandscapeBase() && screenLandscapeTop()) {
        let startSize = 125;
        return startSize;
    } else if (screenTabletBase() && screenTabletTop()) {
        let startSize = 135;
        return startSize;
    } else if (screenDesktopBase() && screenDesktopTop()) {
        let startSize = 200;
        return startSize;
    } else if (screenLargeOneBase() && screenLargeOneTop()) {
        let startSize = 220;
        return startSize;
    } else if (screenLargeTwoBase() && screenLargeTwoTop()) {
        let startSize = 230;
        return startSize;
    } else if (screenLarger()) {
        let startSize = 270;
        return startSize;
    } else {
        let startSize = 150;
        return startSize;
    }
}

function winScroll() {
    // sections
    const secHead = $('#sec_heading');
    const secDes = $('#sec_description');
    const secC_one = $('#sec_caseOne');
    const secC_two = $('#sec_caseTwo');
    const secC_three = $('#sec_caseThree');
    const secFooter = $('#sec_footer');
    
    // navigation
    let navLogo_cont = $('.nav_logo_container');
    let navHead = $('.nav_heading');
    let navLogo_icon = $('.nav_logo_box .nav_logo');
    let navLogo_box = $('.nav_logo_box');
    let navPseudo = $('.nav_pseudo_container');
    
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
    let desLength = secDes.innerHeight();
    let C_oneLength = secC_one.innerHeight();
    let C_twoLength = secC_two.innerHeight();
    let C_threeLength = secC_three.innerHeight();
    let footerLength = secFooter.innerHeight();

	
    let wScroll = $(window).scrollTop();
    console.log(wScroll + 'dragon');
    

    //position information
    let headStart = secHead.offset().top;
    let desStart = secDes.offset().top;
    let C_oneStart = secC_one.offset().top;
    let C_twoStart = secC_two.offset().top;
    let C_threeStart = secC_three.offset().top;
    let footerStart = secFooter.offset().top;

    //HEADER action specific to homepage
    if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
        //header section
        let scrollValue = Math.abs(wScroll - headStart);
        let scrollPercent = (scrollValue / (headLength - windowH*titleChange)) * 100;        

        navLogo_cont.addClass('nav_start').css({"transform":"translate(0," + startTransform()*((100 - scrollPercent)/100) +"px)"});
        navHead.addClass('nav_start').css({"font-size": ((startSizing()-logoFinalSize)*((100 - scrollPercent)/100)) + logoFinalSize + "px", "opacity":1});
        navLogo_icon.addClass('nav_start');
        navLink_event.css({"pointer-events":"none"});
        navPseudoSVG.css({"fill":"#fff"});
        if(screenMobileTop()) {
            navLogo_box.removeClass('nav_start').css({"grid-template-columns": "1fr " + 0 + "px","-ms-grid-columns": "1fr " + 0 + "px"});
            navPseudo.addClass("nav_start").css({"margin-left": 0 + "px", "opacity":1});
            
        } else {
            navLogo_box.addClass('nav_start').css({"grid-template-columns": "1fr " + (logoHeaderWidth)*((scrollPercent)/100) + "px","-ms-grid-columns": "1fr " + (logoHeaderWidth)*((scrollPercent)/100) + "px"});
            navPseudo.addClass("nav_start").css({"margin-left": (-logoHeaderWidth*2)*((100 - scrollPercent)/100) + "px", "opacity":1});
        }

    } else {
        navLink_event.css({"pointer-events":"all"});
        navLogo_cont.removeClass('nav_start').css({"transform":"translate(0,0vH)"});
        navLogo_icon.removeClass('nav_start');
        navPseudo.removeClass("nav_start").css({"margin-left":0 + "px", "opacity":0});
        if(screenMobileTop()) {
            navHead.addClass('nav_start').css({"font-size": logoFinalSize + "px", "opacity":0});
            navLogo_box.addClass('nav_start').css({"grid-template-columns": "0px " + logoHeaderWidth + "px","-ms-grid-columns": "0px " + logoHeaderWidth + "px"});
        } else {
            navHead.removeClass('nav_start').css({"font-size": logoFinalSize + "px", "opacity":1});
            navLogo_box.removeClass('nav_start').css({"grid-template-columns": "1fr " + logoHeaderWidth + "px", "-ms-grid-columns": "1fr " + logoHeaderWidth + "px"});

        }
    }

    if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1"});
        block.css("background-color", "#D4DCDE");
        banText.css({"color":"#000"});
    } else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1"});
        block.css("background-color", "#D4DCDE");
        banText.css({"color":"#000"});
    } else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < C_oneStart + C_oneLength - windowH*titleChange) {
        //case one
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1"});
        banText.css({"color":"#fff"});
        block.css("background-color", "#000000");
        let scrollValue1 = Math.abs(wScroll - (C_oneStart - windowH*titleChange));
        let scrollPercent1 = (scrollValue1 / C_oneLength) * 100;  
        // images
        c1_i1.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
        c1_i2.css({"background-position":  scrollPercent1 + "% " + scrollPercent1 +"%"});
        c1_i3.css({"background-position":"50% " + (100 - scrollPercent1) +"%"});
    } else if (wScroll >= C_oneStart + C_oneLength - windowH*titleChange && wScroll < C_twoStart + C_twoLength - windowH*titleChange) {
        //case two
        mainP.css({"color":"#4303A7"});
        caseImg.css({"background-color":"#FFF9DB"});
        block.css("background-color", "#FFE66A");       
        let scrollValue2 = Math.abs(wScroll - (C_twoStart - windowH*titleChange)); 
        let scrollPercent2 = (scrollValue2 / (C_twoLength + windowH*titleChange)) * 100;
        // images
        c2_i2.css({"bottom": "-" + 3*(Math.abs(100-scrollPercent2)) + 100 + "px"});
        c2_i3.css({"background-position":  "50% " + (scrollPercent2/4)-5 +"%"});
        c3_i3_m1.css({"transform":"translate(0, -" + 100 + "%)"});
        c3_i3_m2.css({"transform":"translate(0, " + 100 + "%)"});
    } else if (wScroll >= C_twoStart + C_twoLength - windowH*titleChange && wScroll < C_threeStart + C_threeLength - windowH*titleChange) {
        //case three
        mainP.css({"color":"#295849"});
        caseImg.css({"background-color":"#ADDAD5"});
        block.css("background-color", "#FCFAF7"); 
        let scrollValue3 = Math.abs(wScroll - (C_threeStart - windowH*titleChange));
        let scrollPercent3 = (scrollValue3 / C_threeLength) * 100;
        // vids
        c3_i3_m1.css({"transform":"translate(0, " + (-1)*((100 - scrollPercent3)/2) + "%)"});
        c3_i3_m2.css({"transform":"translate(0, " + ((100 - scrollPercent3)/2) + "%)"});
    } else if (wScroll >= C_threeStart + C_threeLength - windowH*titleChange && wScroll < footerStart + footerLength - windowH*titleChange) {

        //footer
        mainP.css({"color":"#000"});
        caseImg.css({"background-color":"#f1f1f1"});
        block.css("background-color", "#FCFAF7");
        //prep
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
    $(window).load(function() {
        winScroll();
        startTransform();
        startSizing();
    });
}(jQuery));  