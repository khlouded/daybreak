
function winScroll() {
    // sections
    const secHead = $('#sec_heading');
    const secC_one = $('#sec_caseOne');
    // const secC_two = $('#sec_caseTwo');
    // const secC_three = $('#sec_caseThree');
    const secFooter = $('#sec_footer');
    
    // Case Study Images
    const mainP = $('.home_colour');
    const aboutArrow = $('.about_arrow svg path');
    // const caseImg = $('.case_item');
    // const c1_i3 = $('.caseone_imagethree');
    const title = $('.home_h1_title');
    const introText = $('.variable_word span');

    // Heights
    let headLength = secHead.innerHeight();
    let C_oneLength = secC_one.innerHeight();
    // let C_twoLength = secC_two.innerHeight();
    // let C_threeLength = secC_three.innerHeight();
    let footerLength = secFooter.innerHeight();

    let wScroll = $(window).scrollTop();

    //position information
    let headStart = secHead.offset().top;
    let C_oneStart = secC_one.offset().top;
    // let C_twoStart = secC_two.offset().top;
    // let C_threeStart = secC_three.offset().top;
    let footerStart = secFooter.offset().top;


    if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
        mainP.css({"color":"#000"});
        // caseImg.css({"background-color":"#f1f1f1"});
        block.css("background-color", "#fff");
        aboutArrow.css({"color":"#000"});
        typeWriter();
    } else if (wScroll >= headStart + headLength  - windowH*titleChange && wScroll < C_oneStart + C_oneLength - windowH*titleChange) {
        //case one ,"background-image": "linear-gradient(180deg, #BCCAEF 0%, #E5D4E2 100%)"
        introText.removeClass("word_enter");
        mainP.css({"color":"#000"});
        title.css({"color":"#000"});
        // caseImg.css({"background-color":"#fff9db"});
        aboutArrow.css({"color":"#000"});
        block.css("background-color", "#fff");
        // images
        // if (wScroll >= headStart + headLength && wScroll < C_oneStart + C_oneLength) {
        //     let scrollValue1 = Math.abs(wScroll - (C_oneStart));
        // let scrollPercent1 = (scrollValue1 / C_oneLength) * 100;  
        //     c1_i3.css({"background-position": scrollPercent1 + "% " + scrollPercent1 +"%"});
        // }
    } else if (wScroll >= C_oneStart + C_oneLength - windowH*titleChange && wScroll < footerStart + footerLength - windowH*titleChange){

    }
    // else if (wScroll >= C_oneStart + C_oneLength - windowH*titleChange && wScroll < C_twoStart + C_twoLength - windowH*titleChange) {
    //     //case two
    //     mainP.css({"color":"#4303A7"});
    //     caseImg.css({"background-color":"#FFF9DB"});
    //     block.css("background-color", "#FFE66A");       
    //     //let scrollValue2 = Math.abs(wScroll - (C_twoStart - windowH*titleChange)); 
    //     //let scrollPercent2 = (scrollValue2 / C_twoLength) * 100;
    // } else if (wScroll >= C_twoStart + C_twoLength - windowH*titleChange && wScroll < C_threeStart + C_threeLength - windowH*titleChange) {
    //     //case three
    //     mainP.css({"color":"#295849"});
    //     caseImg.css({"background-color":"#ADDAD5"});
    //     block.css("background-color", "#FCFAF7"); 
    //     //let scrollValue3 = Math.abs(wScroll - (C_threeStart - windowH*titleChange));
    //     //let scrollPercent3 = (scrollValue3 / C_threeLength) * 100;
    // } else if (wScroll >= C_threeStart + C_threeLength - windowH*titleChange && wScroll < footerStart + footerLength - windowH*titleChange) {
    //     //footer
    //     mainP.css({"color":"#000"});
    //     caseImg.css({"background-color":"#f1f1f1"});
    //     block.css("background-color", "#FCFAF7");
    // }
}
function worksTransition() { //the LinkTrans changes colours depending on where it is linked to
    let napLink = $(".nap_link");
    let clyxLink = $(".clyx_link");
    let stacksLink = $(".stacks_link");
    let almostLink = $(".almost_link");
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
    stacksLink.click(function (e) {
        console.log('transition stacks');

        e.preventDefault();

        let goTo = this.getAttribute("href");
        window.setTimeout(function () {
            linkTrans.addClass('toalmost');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    });
}

(function($) {
    window.setTimeout(function () {
        typeWriter();
        setTimeout(function () {
            $('.home_h1_title').css({"z-index":"9"});
            $('.studio_reel').css({"z-index":"9"});
            $('.heading_item').css({"z-index":"9"});
        }, 2000);
    }, 300);
    
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