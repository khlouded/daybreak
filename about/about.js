const aboutLogo = $(".image_carousel_container");
//sections
const aboutHead = $('#about_header');
const aboutDes = $('#about_description');
const aboutIll = $('#about_illustration');
const aboutSkill = $('#about_skills');
const aboutWork = $('#about_work');
//intro text
const introText = $('.variable_word span');

function winScroll() {

    // Heights
    let abHeadLength = aboutHead.innerHeight();
    //let abDesLength = aboutDes.innerHeight();
    //let abIllLength = aboutIll.innerHeight();
    //let abSkillLength = aboutSkill.innerHeight();
    //let abWorkLength = aboutWork.innerHeight();
    $(window).scroll($.throttle( 10,function() {
        let wScroll = $(window).scrollTop();

        //position information
        let abHeadStart = aboutHead.offset().top;
        //let abDesStart = aboutDes.offset().top;
        //let abIllStart = aboutIll.offset().top;
        //let abSkillStart = aboutSkill.offset().top;
        //let abWorkStart = aboutWork.offset().top;

        if (wScroll >= -20 && wScroll < abHeadStart + abHeadLength - windowH*titleChange) {
            // intro section
            typeWriter();
            //image changes
        } else {
            introText.removeClass("word_enter");
        }
    }));
}
// Checks & runs
(function($) {
    typeWriter();
    winScroll();
    $(window).resize(function() {

        winScroll();
    });
}(jQuery));
