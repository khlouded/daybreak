
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
    let nav = $('.navigation');
    let navSelect = $('.nav_select');
    let navPseudoSVG = $(".nav_pseudo_container svg path");

    // Case Study Images
    const caseImg = $('.case_item');
    const c1_i1 = $('.caseone_imageone');
    const c1_i2 = $('.caseone_imagetwo');
    const c1_i3 = $('.caseone_imagethree');
    const c2_i1 = $('.casetwo_imageone');
    const c2_i2 = $('.casetwo_imagetwo');
    const c2_i3 = $('.casetwo_imagethree');
    const c3_i1 = $('.casethree_imageone');
    const c3_i2 = $('.casethree_imagetwo');
    const c3_i3 = $('.casethree_imagethree');

    // Heights
    let headLength = secHead.innerHeight();
    let desLength = secDes.innerHeight();
    let C_oneLength = secC_one.innerHeight();
    let C_twoLength = secC_two.innerHeight();
    let C_threeLength = secC_three.innerHeight();
    let footerLength = secFooter.innerHeight();

    //numbers
    const titleChange = 0.25;
    const logoFinalSize = 27;
    const logoHeaderWidth = 50;

$(window).scroll(function() {		
    let wScroll = $(window).scrollTop();

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
        navHead.addClass('nav_start').css({"font-size": (startSizing()-logoFinalSize)*((100 - scrollPercent)/100) + logoFinalSize + "px", "opacity":1});
        navLogo_icon.addClass('nav_start');
        nav.addClass('nav_start');
        navSelect.addClass('nav_start');
        
        if(screenMobileTop()) {
            navLogo_box.removeClass('nav_start').css({"grid-template-columns": "1fr " + 0 + "px","-ms-grid-columns": "1fr " + 0 + "px"});
            navPseudo.addClass("nav_start").css({"margin-left": 0 + "px", "opacity":1});
            navPseudoSVG.css({"fill":"#000"});
        } else {
            navLogo_box.addClass('nav_start').css({"grid-template-columns": "1fr " + (logoHeaderWidth)*((scrollPercent)/100) + "px","-ms-grid-columns": "1fr " + (logoHeaderWidth)*((scrollPercent)/100) + "px"});
            navPseudo.addClass("nav_start").css({"margin-left": (-118)*((100 - scrollPercent)/100) + "px", "opacity":1});
            navPseudoSVG.css({"fill":"#000"});
        }
    } else {
        navLogo_cont.removeClass('nav_start').css({"transform":"translate(0,0vH)"});
        nav.removeClass('nav_start');
        navSelect.removeClass('nav_start');
        navPseudoSVG.css({"fill":"#fff"});
        if(screenMobileTop()) {
            navPseudo.addClass('nav_start').css({"margin-left":0 + "px", "opacity":1});
            navHead.removeClass('nav_start').css({"font-size": logoFinalSize + "px", "opacity":0});
            navLogo_box.removeClass('nav_start').css({"grid-template-columns": "1fr " + logoHeaderWidth + "px","-ms-grid-columns": "1fr " + logoHeaderWidth + "px"});
            navLogo_icon.addClass('nav_start');
        } else {
            navPseudo.removeClass("nav_start").css({"margin-left":0 + "px", "opacity":0});
            navHead.removeClass('nav_start').css({"font-size": logoFinalSize + "px", "opacity":1});
            navLogo_box.removeClass('nav_start').css({"grid-template-columns": "1fr " + logoHeaderWidth + "px", "-ms-grid-columns": "1fr " + logoHeaderWidth + "px"});
            navLogo_icon.removeClass('nav_start');
        }
    }

    if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
        block.css("background-color", "#D4DCDE"); // background colour of bodys
    } else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
        block.css("background-color", "#D4DCDE"); // background colour of bodys
    } else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < C_oneStart + C_oneLength - windowH*titleChange) {
        //case one
        block.css("background-color", "#000000"); // background colour of bodys
        
        // quick maths
        let scrollValue1 = Math.abs(wScroll - (C_oneStart - windowH*titleChange)); // get the value of the scroll starting from the beginning of this section
        let scrollPercent1 = (scrollValue1 / C_oneLength) * 100; //get the percentage of scroll in the specific breakpoint section
        
        c1_i1.css({"background-position":"50% " + scrollPercent1 +"%"});
        c1_i2.css({"background-position": scrollPercent1 +"% 50%"});
        c1_i3.css({"background-position":"50% " + (100 - scrollPercent1) +"%"});
    } else if (wScroll >= C_oneStart + C_oneLength - windowH*titleChange && wScroll < C_twoStart + C_twoLength - windowH*titleChange) {
        //case two
        block.css("background-color", "#FFE66A"); // background colour of bodys
        
        // quick maths
        let scrollValue2 = Math.abs(wScroll - (C_twoStart - windowH*titleChange)); // get the value of the scroll starting from the beginning of this section
        let scrollPercent2 = (scrollValue2 / (C_twoLength + windowH*titleChange)) * 100; //get the percentage of scroll in the specific breakpoint section
        c2_i1.css({"background-position":"50% " + scrollPercent2 +"%"});
        c2_i2.css({"background-position": scrollPercent2 +"% 50%"});
        c2_i3.css({"background-position":"50% " + (100 - scrollPercent2) +"%"});
    } else if (wScroll >= C_twoStart + C_twoLength - windowH*titleChange && wScroll < C_threeStart + C_threeLength - windowH*titleChange) {
        //case three
        block.css("background-color", "#FCFAF7"); // background colour of bodys
        
        // quick maths
        let scrollValue3 = Math.abs(wScroll - (C_threeStart - windowH*titleChange)); // get the value of the scroll starting from the beginning of this section
        let scrollPercent3 = (scrollValue3 / C_threeLength) * 100; //get the percentage of scroll in the specific breakpoint section
        c3_i1.css({"background-position":"50% " + scrollPercent3 +"%"});
        c3_i2.css({"background-position": scrollPercent3 +"% 50%"});
        c3_i3.css({"background-position":"50% " + (100 - scrollPercent3) +"%"});
    } else if (wScroll >= C_threeStart + C_threeLength - windowH*titleChange && wScroll < footerStart + footerLength - windowH*titleChange) {
        //footer
        block.css("background-color", "#FCFAF7"); // background colour of bodys
    }
});
}

// Checks & runs
(function($) {
    winScroll();
    footerReveal();
    $(window).resize(function() {
        winScroll();
        startTransform();
        startSizing();
    });
}(jQuery));  
