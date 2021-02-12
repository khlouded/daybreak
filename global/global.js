//variables for the navigation
const secNav = $('.navigation');
const navButt = $('.nav_button');
const navMenu = $('.nav_menu_base');
const navMenuOpen = $('.nav_menu_base');
const navClose = $('.nav_menu_base .close_button');
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
// main large size variables
let block = $('#block');
let maxHeight = $('body').innerHeight();
let windowH = $(window).innerHeight();
//global actions and effects
//numbers
const titleChange = 0.25;
const logoFinalSize = 27;
const logoHeaderWidth = 50;

function navClick() {
    navButt.click(function () {
        navMenu.addClass("nav_menu");
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

    navMWork.click(function () {

        navText.removeClass("nav_linkShow");

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
    const secFooter = $('#sec_footer');
    // Heights
    let footerLength = secFooter.innerHeight();
    const footerText = $('.footer_link');

    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();
        let footerStart = secFooter.offset().top;
        if (wScroll >= footerStart - (windowH - 300) && wScroll < footerStart + footerLength) {
            footerText.addClass('footer_show');
        } else {
            footerText.removeClass('footer_show');
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
function pageTransition() {
    //const navDelay = $('.nav_delay');
    navDelay.click(function (e) {
        e.preventDefault();

        let goTo = this.getAttribute("href");
        navText.removeClass("nav_linkShow");
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
                setTimeout(function () {
                    window.location = goTo;
                }, 200);
            }, 300);
        }, 700);

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
    if ($('#sec_footer').length) {
        footerReveal();
    }
    splitFont();
    smoothScroll();
}(jQuery));