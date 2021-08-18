//variables for the navigation
const secNav = $('.navigation');
const navButt = $('.nav_button');
const navMenu = $('.nav_menu_base');
const navMenuOpen = $('.nav_menu_base');
const navClose = $('.nav_menu_base .close_button');
const secFooter = $('#sec_footer');
const footerText = $('.footer_link');
//text items
const navText = $('.nav_menulink');
const navLinks = $('.navmenu_link');
const navDes = $('.navmenu_des');
const navDesCont = $('.navmenu_des_cont');
const navMHome = $('.menu_link_home');
const navMWork = $('.menu_link_work');
const navMAbout = $('.menu_link_about');
const navMContact = $('.menu_link_contact');
const nav_link = $('.nav_link');
const navDelay = $('.nav_delay');
const pageTrans = $('.pagetransition');
const navPseudoSVG = $(".nav_pseudo_container svg path");
const navLink_event = $('.nav_logo_link');
const caseLink = $('.caselink');
const footLink = $('.footer_link');
// main large size variables
let block = $('#block');
let maxHeight = $('body').innerHeight();
let windowH = $(window).innerHeight();

//cursor
const hoverable = $("a[href]");
const cart = $(".cart_icon");
const cartButton = $(".cart_button");
const cartWrapper = $("#cart_wrapper");
const cartBlock = $(".cart_block");
const mouseItem = $('.cursor');
var cartTimer; 
//global actions and effects
//numbers
const titleChange = 0.25;
const logoFinalSize = 27;
const logoHeaderWidth = 50;

//page transition
const linkTrans = $('.linktransition');

function navClick() {
    navButt.click(function () {
        navMenu.addClass("nav_menu");
        if ($('.home_h1_title').length){
            $('.home_h1_title').css({"z-index":"9"});
            $('.studio_reel').css({"z-index":"9"});
            $('.heading_item').css({"z-index":"9"});
        }
        function show_menu() {
            navMenu.addClass("menu_transition");
        }
        function show_text() {
            navText.addClass("nav_linkShow");
        }
        window.setTimeout(function () {
            show_menu();
            setTimeout(function () {
                show_text();
            }, 700);
        }, 10);
    });

    navClose.click(function () {
        navText.removeClass("nav_linkShow");
        if ($('.home_h1_title').length){
            $('.home_h1_title').css({"z-index":"9"});
            $('.studio_reel').css({"z-index":"9"});
            $('.heading_item').css({"z-index":"9"});
        }

        function close_menu() {
            navMenu.removeClass("menu_transition");
        }
        function hide_menu() {
            navMenu.removeClass("nav_menu");
        }
        window.setTimeout(function () {
            close_menu();
            setTimeout(function () {
                hide_menu();
            }, 300);
        }, 700);
    });

    // navigation links
    navLink_event.click(function (e) {
        if (document.location.pathname !== "/" ){
            console.log('transition start');
            e.preventDefault();

            let goTo = this.getAttribute("href");
            if ($('.home_h1_title').length){
                $('.home_h1_title').css({"z-index":"9"});
                $('.studio_reel').css({"z-index":"9"});
                $('.heading_item').css({"z-index":"9"});
            }

            window.setTimeout(function () {
                linkTrans.addClass('tohome');
                setTimeout(function () {
                    console.log('transition complete');
                    window.location = goTo;
                }, 900);
            }, 200);
        } else {
            e.preventDefault();
        }
    });
    $('.nav_wwu').click(function (e) {
        if (document.location.pathname !== "/contact" ){
            console.log('transition start');
            e.preventDefault();

            let goTo = this.getAttribute("href");

            window.setTimeout(function () {
                linkTrans.addClass('tonap');
                setTimeout(function () {
                    console.log('transition complete');
                    window.location = goTo;
                }, 900);
            }, 200);
        } else {
            e.preventDefault();
        }
    });
    footLink.click(function (e) {
        if ($('#sec_footer').length){
            console.log('transition start');
            e.preventDefault();

            let goTo = this.getAttribute("href");
            
            window.setTimeout(function () {
                linkTrans.addClass('tonap');
                setTimeout(function () {
                    console.log('transition complete');
                    window.location = goTo;
                }, 900);
            }, 200);
        } else {
            e.preventDefault();
        }
    });
    $('.home_link').click(function (e) {
        if ($('#sec_footer').length){
            console.log('transition start');
            e.preventDefault();

            let goTo = this.getAttribute("href");
            if ($('.home_h1_title').length){
                $('.home_h1_title').css({"z-index":"9"});
                $('.studio_reel').css({"z-index":"9"});
                $('.heading_item').css({"z-index":"9"});
            }
            window.setTimeout(function () {
                linkTrans.addClass('toabout');
                setTimeout(function () {
                    console.log('transition complete');
                    window.location = goTo;
                }, 900);
            }, 200);
        } else {
            e.preventDefault();
        }
    });
}
function cartCheck() {
    cart.click(function() {
        cartBlock.removeClass("cart_diff");
        window.clearTimeout(cartTimer);
    });
    cartButton.click(function() {
        cartBlock.removeClass("cart_diff");
        window.clearTimeout(cartTimer);
    });
    
    $('.w-commerce-commercecartcloselink').click(function() {
        cartTimer = setTimeout(
            function() {
                cartBlock.addClass("cart_diff");
            },
        500);
    });
    if( $('#cart_wrapper:visible').length == 0) {
        cartBlock.addClass("cart_diff");
        console.log("it's different");
    }
}
function navButtonFix() {
    navButt.removeAttr("href");
}
function change_menuShow() {
    navDesCont.addClass('nav_linkShow');
}
function change_menuHide() {
    navDesCont.removeClass('nav_linkShow');
}
function navDescription() {
    let desText = navDes.text();
    if (desText.includes("create") === false) {
        navLinks.mouseleave(function () {
        //hidelink
        change_menuHide();
        navMHome.css({"opacity":"1"});
        navMWork.css({"opacity":"1"});
        navMAbout.css({"opacity":"1"});
        navMContact.css({"opacity":"1"});

        function change_menuDes() {
            navDes.html("Create for tomorrow");
        }
        window.setTimeout(function () {
            change_menuDes();
            setTimeout(function () {
                change_menuShow();
            }, 150);
        }, 150);
        });
    }   
    //home button hover
    navMHome.on('mouseenter touchstart', function () {
        change_menuHide();
        navMHome.css({"opacity":"1"});
        navMWork.css({"opacity":".5"});
        navMAbout.css({"opacity":".5"});
        navMContact.css({"opacity":".5"});
        function change_menuDes() {
            navDes.html("Build for tomorrow");
        }
        window.setTimeout(function () {
            change_menuDes();
            setTimeout(function () {
                change_menuShow();
            }, 150);
        }, 150);
    });
    navMWork.on('mouseenter touchstart', function () {
        change_menuHide();
        navMHome.css({"opacity":".5"});
        navMWork.css({"opacity":"1"});
        navMAbout.css({"opacity":".5"});
        navMContact.css({"opacity":".5"});
        function change_menuDes() {
            navDes.html("Grow for tomorrow");
        }
        window.setTimeout(function () {
            change_menuDes();
            setTimeout(function () {
                change_menuShow();
            }, 150);
        }, 150);
    });
    navMAbout.on('mouseenter touchstart', function () {
        change_menuHide();
        navMHome.css({"opacity":".5"});
        navMWork.css({"opacity":".5"});
        navMAbout.css({"opacity":"1"});
        navMContact.css({"opacity":".5"});
        function change_menuDes() {
            navDes.html("Think for tomorrow");
        }
        window.setTimeout(function () {
            change_menuDes();
            setTimeout(function () {
                change_menuShow();
            }, 150);
        }, 150);
    });
    navMContact.on('mouseenter touchstart', function () {
        change_menuHide();
        navMHome.css({"opacity":".5"});
        navMWork.css({"opacity":".5"});
        navMAbout.css({"opacity":".5"});
        navMContact.css({"opacity":"1"});
        function change_menuDes() {
            navDes.html("Work for tomorrow");
        }
        window.setTimeout(function () {
            change_menuDes();
            setTimeout(function () {
                change_menuShow();
            }, 150);
        }, 150);
    });
}
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
function footerReveal() {

    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();
        let footerStart = secFooter.offset().top;
        if (wScroll >= footerStart - (windowH - 100)) {
            footerText.addClass('footer_show');
            window.setTimeout(function () {
                footerText.addClass('clipRemove');
            }, 300);
        } else {
            footerText.removeClass('footer_show clipRemove');
        }
    });
}

function typeWriter() {
    var textlength = $(".variable_word").children().length;
    var i = 1;
    function myLoop() {
        setTimeout(function () {
            var letter = ".word" + i;
            $(letter).addClass('word_enter');
            i++;
            if (i <= textlength) {
                myLoop();
            }
        }, 50);
    }
    myLoop();
}
function splitFont() {
    $(".variable_word").lettering('words');
}
function customCursor(){
    $(window).mousemove($.throttle( 3,function(e) {
        var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
        mouseItem.css({
            top : e.clientY -10,
            left: e.clientX -10,
            "opacity":0
        });

    } else {
        mouseItem.css({
            top : e.clientY -10,
            left: e.clientX -10,
            "opacity":1
        });
    }
    }));
    $(window).on("touchstart", function() {
        mouseItem.css({
            "opacity":0
        });
    });
    $(window).on("touchend", function() {
        mouseItem.css({
            "opacity":0
        });
    });
    $(window).on("touchmove", function() {
        $(window).mousemove(function(e) {e.preventDefault();});
        mouseItem.css({
            "opacity":0
        });
    });

    hoverable.mouseover(function(){
        mouseItem.css({"clip-path": "circle(15% at 50% 50%)"});
    });
    hoverable.mouseleave(function(){
        mouseItem.css({"clip-path": "circle(72% at 50% 50%)"});
    });
    cart.mouseover(function(){
        mouseItem.css({"clip-path": "circle(15% at 50% 50%)"});
    });
    cart.mouseleave(function(){
        mouseItem.css({"clip-path": "circle(72% at 50% 50%)"});
    });
    navLink_event.mouseover(function(){
        mouseItem.css({"clip-path": "circle(15% at 50% 50%)"});
    });
    navLink_event.mouseleave(function(){
        mouseItem.css({"clip-path": "circle(72% at 50% 50%)"});
    });
    navButt.mouseover(function(){
        mouseItem.css({"clip-path": "circle(15% at 50% 50%)"});
    });
    navButt.mouseleave(function(){
        mouseItem.css({"clip-path": "circle(72% at 50% 50%)"});
    });
    caseLink.mouseover(function(){
        mouseItem.css({"transform": "scale(1.5)","clip-path": "circle(72% at 50% 50%)"});
    });
    caseLink.mouseleave(function(){
        mouseItem.css({"transform": "scale(1)","clip-path": "circle(72% at 50% 50%)"});
    });
    
}
function backTransition() {
    window.onpopstate = function(e) {
        console.log('transition start');
        e.preventDefault();

        let goTo = history.go(-1);

        window.setTimeout(function () {
            linkTrans.addClass('tonap');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    };
}

function pageTransition() {
    //menu links
    navMHome.click(function (e) {
        if (document.location.pathname !== "/" ){
            console.log('transition start');
            e.preventDefault();

            let goTo = this.getAttribute("href");
            navText.removeClass("nav_linkShow");
            navDesCont.css({"display":"none"});
            window.setTimeout(function () {
                navMenu.css({"background-color":"#f6f6f6"});
                setTimeout(function () {
                    window.location = goTo;
                    console.log('transition complete');
                }, 900);
            }, 200);
        } else {
            e.preventDefault();
            navText.removeClass("nav_linkShow");
            window.setTimeout(function () {
                navMenu.removeClass("menu_transition");
                setTimeout(function () {
                    navMenu.removeClass("nav_menu");
                }, 300);
            }, 700);
        }
    });

    navMWork.click(function (e) {
        if (document.location.pathname !== "/work" ){
            console.log('transition start');

            e.preventDefault();

            let goTo = this.getAttribute("href");
            navText.removeClass("nav_linkShow");
            navDesCont.css({"display":"none"});
            window.setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 500);
        } else {
            e.preventDefault();
            navText.removeClass("nav_linkShow");
            window.setTimeout(function () {
                navMenu.removeClass("menu_transition");
                setTimeout(function () {
                    navMenu.removeClass("nav_menu");
                }, 300);
            }, 700);
        }
    });
    navMAbout.click(function (e) {
        if (document.location.pathname !== "/about" ){
            console.log('transition start');

            e.preventDefault();

            let goTo = this.getAttribute("href");
            navText.removeClass("nav_linkShow");
            navDesCont.css({"display":"none"});
            window.setTimeout(function () {
                linkTrans.addClass('toabout');
                setTimeout(function () {
                    console.log('transition complete');
                    window.location = goTo;
                }, 900);
            }, 200);
        } else {
            e.preventDefault();
            navText.removeClass("nav_linkShow");
            navDesCont.css({"display":"none"});
            window.setTimeout(function () {
                navMenu.removeClass("menu_transition");
                setTimeout(function () {
                    navMenu.removeClass("nav_menu");
                }, 300);
            }, 700);
        }
    });

    navMContact.click(function (e) {
        if (document.location.pathname !== "/contact" ){
            console.log('transition start');

            e.preventDefault();

            let goTo = this.getAttribute("href");
            navText.removeClass("nav_linkShow");
            navDesCont.css({"display":"none"});
            window.setTimeout(function () {
                window.location = goTo;
            }, 500);
    } else {
        e.preventDefault();
        navText.removeClass("nav_linkShow");
        window.setTimeout(function () {
            navMenu.removeClass("menu_transition");
            setTimeout(function () {
                navMenu.removeClass("nav_menu");
            }, 300);
        }, 700);
    }
    });

}
function screenMobileTop() {
    var mq = window.matchMedia("(max-width: 477px)");
    return mq.matches;
}
function screenLandscapeBase() {
    var mq = window.matchMedia("(min-width: 478px)");
    return mq.matches;
}
function screenLandscapeTop() {
    var mq = window.matchMedia("(max-width: 767px)");
    return mq.matches;
}
function screenTabletBase() {
    var mq = window.matchMedia("(min-width: 768px)");
    return mq.matches;
}
function screenTabletTop() {
    var mq = window.matchMedia("(max-width: 990px)");
    return mq.matches;
}
function screenDesktopBase() {
    var mq = window.matchMedia("(min-width: 991px)");
    return mq.matches;
}
function screenDesktopTop() {
    var mq = window.matchMedia("(max-width: 1279px)");
    return mq.matches;
}
function screenLargeOneBase() {
    var mq = window.matchMedia("(min-width: 1280px)");
    return mq.matches;
}
function screenLargeOneTop() {
    var mq = window.matchMedia("(max-width: 1439px)");
    return mq.matches;
}
function screenLargeTwoBase() {
    var mq = window.matchMedia("(min-width: 1440px)");
    return mq.matches;
}
function screenLargeTwoTop() {
    var mq = window.matchMedia("(max-width: 1919px)");
    return mq.matches;
}
function screenLarger() {
    var mq = window.matchMedia("(min-width: 1920px)");
    return mq.matches;
}
(function ($) {
    pageTransition();
    navButtonFix();
    navDescription();
    navClick();
    customCursor();
    backTransition();
    cartCheck();
    if ($('#sec_footer').length) {
        footerReveal();
    }
    splitFont();
    $(window).resize(function(e) {
        mouseItem.css({
            top : e.clientY-10,
            left: e.clientX-10
        });
    });
    $(window).scroll($.throttle( 2,function(e) {
        mouseItem.css({
            top : e.clientY-10,
            left: e.clientX-10
        });
    }));
    $(window).on( "load", function(e) {
        mouseItem.css({
            top : e.clientY-10,
            left: e.clientX-10
        });
    });
    smoothScroll();
}(jQuery));