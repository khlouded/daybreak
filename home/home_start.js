$(window).on('load', function(){
    const navLogo_cont = $('.nav_logo_container');
    const navHead = $('.nav_heading');
    const navLogo_icon = $('.nav_logo_box .nav_logo');
    const navPseudo = $('.nav_pseudo_container');
    const nav = $('.navigation');
    const navSelect = $('.nav_select');
    const navLogo_box = $('.nav_logo_box');
    const navPseudoSVG = $(".nav_pseudo_container svg path");

    navLogo_cont.addClass('nav_start');
    navHead.addClass('nav_start').css({'opacity':1});
    navLogo_icon.addClass('nav_start');
    navSelect.addClass('nav_start');
    nav.addClass('nav_start');
    navPseudo.addClass("nav_start");
    navPseudoSVG.css({"fill":"#000"});
    
    navLogo_box.addClass('nav_start').css({"grid-template-columns": "1fr " + 0 + "px","-ms-grid-columns": "1fr " + 0 + "px"});
    navPseudo.addClass("nav_start").css({"margin-left": 0 + "px", "opacity":1});

    startSizing();
});
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