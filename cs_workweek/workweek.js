
    
    
    //objects
    const nextLink = $('.next_cs_link');
    const nextGradient = $('.next_ending_gradient');
    //image
    // typography
    const mainP = $('.clyx_colour');
        // //sections
    // const secHead = $('#sec_heading');
    // const secDes = $('#sec_description');
    // const secType = $('#sec_type');
    // const secAdv = $('#sec_adventure');
    // const secClu = $('#sec_clue');
    // const secGym = $('#sec_gym');
    // const secOrg = $('#sec_organize');
    // const secCase = $('#sec_case');
    // const secNext = $('#sec_next');
// function winScroll() {
//     //size
//     let headLength = secHead.innerHeight();
//     let desLength = secDes.innerHeight();
//     let typeLength = secType.innerHeight();
//     let advLength = secAdv.innerHeight();
//     let cluLength = secClu.innerHeight();
//     let gymLength = secGym.innerHeight();
//     let orgLength = secOrg.innerHeight();
//     let caseLength = secCase.innerHeight();
//     let nextLength = secNext.innerHeight();

//     let windowH = $(window).innerHeight();  

//     $(window).scroll($.throttle( 5, function() {
//         let wScroll = $(window).scrollTop();
//         let headStart = secHead.offset().top;
//         let desStart = secDes.offset().top;
//         let typeStart = secType.offset().top;
//         let advStart = secAdv.offset().top;
//         let cluStart = secClu.offset().top;
//         let gymStart = secGym.offset().top;
//         let orgStart = secOrg.offset().top;
//         let caseStart = secCase.offset().top;
//         let nextStart = secNext.offset().top;
        

//         if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
//             block.css("background-color", "#f6f6f6");
//             mainP.css({"color":"#5018a8"});
//             pageTrans.css({"display":"flex"});
//         }
//         else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
//             block.css("background-color", "#f6f6f6");
//             mainP.css({"color":"#5018a8"});
//             console.log('is_working');
//             pageTrans.css({"display":"none"});

//         }
//         else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < typeStart + typeLength - windowH*titleChange) {
//             //type
//             block.css("background-color", "#F6EFE2");
//             mainP.css({"color":"#2f40c9"});
//         }
//         else if (wScroll >= typeStart + typeLength - windowH*titleChange && wScroll < advStart + advLength - windowH*titleChange) {
//             //adventure
//             block.css("background-color", "#D9F4AA");
//             mainP.css({"color":"#272753"});
//         }
//         else if (wScroll >= advStart + advLength - windowH*titleChange && wScroll < cluStart + cluLength - windowH*titleChange) {
//             //clu
//             block.css("background-color", "#FCED5F");
//             mainP.css({"color":"#4303A7"});
//         }
//         else if (wScroll >= cluStart + cluLength - windowH*titleChange && wScroll < gymStart + gymLength - windowH*titleChange) {
//             //gym
//             block.css("background-color", "#D9F4AA");
//             mainP.css({"color":"#272753"});
//         }
//         else if (wScroll >= gymStart + gymLength - windowH*titleChange && wScroll < orgStart + orgLength - windowH*titleChange) {
//             //org
//             block.css("background-color", "#FCED5F");
//             mainP.css({"color":"#4303A7"});
//         }
//         else if (wScroll >= orgStart + orgLength - windowH*titleChange && wScroll < caseStart + caseLength - windowH*titleChange) {
//             block.css("background-color", "#f6f6f6");
//             mainP.css({"color":"#272753"});
//         }
//         else {
//             block.css("background-color", "#f6f6f6");
//         }
//     }));
// }
function nextSlide() {

    nextLink.click(function (e) {
        console.log('transition start');
        e.preventDefault();

        let goTo = this.getAttribute("href");

        timeout = window.setTimeout(function () {
            linkTrans.addClass('toalmost');
            setTimeout(function () {
                console.log('transition complete');
                window.location = goTo;
            }, 900);
        }, 200);
    });

}
(function($) {
    nextSlide();
    // winScroll();
    // $(window).resize(function() {
    //     winScroll();
    // });
}(jQuery));