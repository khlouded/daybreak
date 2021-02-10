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

    const titleChange = 0.25; // shifting the scroll position in order to manipulate the breakpoints
    //const logoFinalSize = 27; // the final size of the logo text

    $(window).scroll(function() {
        // variables that need to be calculated every time someone scrolls
        let wScroll = $(window).scrollTop();

        //position information
        let abHeadStart = aboutHead.offset().top;
        //let abDesStart = aboutDes.offset().top;
        //let abIllStart = aboutIll.offset().top;
        //let abSkillStart = aboutSkill.offset().top;
        //let abWorkStart = aboutWork.offset().top;

        if (wScroll >= -20 && wScroll < abHeadStart + abHeadLength - windowH*titleChange) {
            // Header Section
            let scrollValue = Math.abs(wScroll - abHeadStart);
            let scrollPercent = (scrollValue / (abHeadLength - windowH*titleChange)) * 100; 
            // intro section
            typeWriter();
            //image changes
            if (scrollPercent > -10 && scrollPercent <= 16 ) {
                console.log('image one');
                aboutLogo.children().addClass('logo_one').removeClass('logo_two logo_three logo_four logo_five');
            } else if (scrollPercent > 16 && scrollPercent <=32) {
                console.log('image two');
                aboutLogo.children().addClass('logo_two').removeClass('logo_one logo_three logo_four logo_five');
            } else if (scrollPercent > 32 && scrollPercent <=48) {
                console.log('image three');
                aboutLogo.children().addClass('logo_three').removeClass('logo_one logo_two logo_four logo_five');
            } else if (scrollPercent > 48 && scrollPercent <=64) {
                console.log('image four');
                aboutLogo.children().addClass('logo_four').removeClass('logo_one logo_two logo_three logo_five');
            } else if (scrollPercent > 64 && scrollPercent <=200) {
                console.log('image five');
                aboutLogo.children().addClass('logo_five').removeClass('logo_one logo_two logo_three logo_four');
            } else {
                aboutLogo.children().removeClass('logo_one logo_two logo_three logo_four logo_five');
            }
        } else {
            introText.removeClass("word_enter");
        }
    });
}
// Checks & runs
(function($) {
    typeWriter();
    winScroll();
    $(window).resize(function() {

        winScroll();
    });
}(jQuery));
