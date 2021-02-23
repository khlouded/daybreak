const aboutLogo = $(".image_carousel_container");
//sections
const aboutHead = $('#about_header');
const aboutIll = $('#about_illustration');
const aboutTag = $('#about_tagline');
const aboutDes = $('#about_description');
const aboutSkill = $('#about_skills');
const aboutWork = $('#about_work');
const aboutFoot = $('#sec_footer');
//intro text
const introText = $('.variable_word span');
const mainP = $('.about_colour');
function winScroll() {

    // Heights
    let headLength = aboutHead.innerHeight();
    let illLength = aboutIll.innerHeight();
    let tagLength = aboutTag.innerHeight();
    let desLength = aboutDes.innerHeight();
    let skillLength = aboutSkill.innerHeight();
    let workLength = aboutWork.innerHeight();
    let footLength = aboutFoot.innerHeight();

    // Heights
    let abHeadLength = aboutHead.innerHeight();
    $(window).scroll($.throttle( 10,function() {
        // Heights
        //position information || - windowH*titleChange
        let headStart = aboutHead.offset().top;
        let illStart = aboutIll.offset().top;
        let tagStart = aboutTag.offset().top;
        let desStart = aboutDes.offset().top;
        let skillStart = aboutSkill.offset().top;
        let workStart = aboutWork.offset().top;
        let footStart = aboutFoot.offset().top;

        let wScroll = $(window).scrollTop();

        

        if (wScroll >= -20 && wScroll < abHeadStart + abHeadLength ) {
            typeWriter();
            mainP.css('color','#fff');
            block.css("background-color", "#000"); 
        } 
        else if (wScroll >= headStart + headLength && wScroll < illStart + illLength - windowH*titleChange  ) {
            introText.removeClass("word_enter");
            mainP.css('color','#fff');
            block.css("background-color", "#000"); 
        }
        else if (wScroll >= illStart + illLength - windowH*titleChange  && wScroll < tagStart + tagLength - windowH*titleChange  ) {
            mainP.css('color','#fff');
            block.css("background-color", "#000"); 
        }
        else if (wScroll >= tagStart + tagLength - windowH*titleChange  && wScroll < desStart + desLength - windowH*titleChange  ) {
            mainP.css('color','#000');
            block.css("background-color", "#FFFFFF"); 
        }
        else if (wScroll >= desStart + desLength - windowH*titleChange  && wScroll < skillStart + skillLength  - windowH*titleChange ) {
            mainP.css('color','#000');
            block.css("background-color", "#FFFFFF"); 
        }
        else if (wScroll >= skillStart + skillLength - windowH*titleChange  && wScroll < workStart + workLength  - windowH*titleChange ) {
            mainP.css('color','#000');
            block.css("background-color", "#FFFFFF"); 
        }
        else if (wScroll >= workStart + workLength - windowH*titleChange  && wScroll < footStart + footLength  - windowH*titleChange ) {
            mainP.css('color','#fff');
            block.css("background-color", "#000"); 
        }

    }));
}
(function($) {
    typeWriter();
    winScroll();
    $(window).resize(function() {
        winScroll();
    });
}(jQuery));
