function winScroll() {
    //sections
    const secHead = $('#sec_heading');
    const secDes = $('#sec_description');
    const secType = $('#sec_type');
    //
    const secArch = $('#sec_arch');
    const secArch_end = $('#sec_arch_end');
    const secPeople = $('#sec_people');
    const secPeople_end = $('#sec_people_end');
    const secTodo = $('#sec_todo');
    const secOrg = $('#sec_org');
    const secNext = $('#sec_next');
    //size
    let headLength = secHead.innerHeight();
    let desLength = secDes.innerHeight();
    let stickyLength = secSticky.innerHeight();
    let archLength = secArch.innerHeight();
    let arch_endLength = secArch_end.innerHeight();
    let peopleLength = secPeople.innerHeight();
    let people_endLength = secPeople_end.innerHeight();
    let todoLength = secTodo.innerHeight();
    let orgLength = secOrg.innerHeight();
    let nextLength = secNext.innerHeight();
    //timing
    const titleChange = 0.25;
    //objects
    const gradient = $('.reveal_gradient');
    const archH1 = $('.arch_heading');
    const nextLink = $('.next_cs_link');
    const nextGradient = $('.next_ending_gradient');
    const nextText_des = $('next_explanation_p');
    //image
    const napScroll1 = $('.nap_scroll_image.nap_img3');
    const napScroll2 = $('.nap_scroll_image.imagetwo');
    const napScroll3 = $('.nap_scroll_image.todo_img2');
    //mobile transform
    const img_des3 = $('.nap_img3');
    const img_people1 = $('.people_image1');
    const img_todo1 = $('.todo_img1');
    const img_todo2 = $('.todo_img2');
    const img_org1 = $('org_img1');
    // typography
    const mainP = $('.cs_main_p');
    const bulletD = $('.cs_bullet_description');
    const imgD = $('.cs_img_description');
    const imgNumb = $(".cs_img_num");

    $(window).scroll(function() {
        let wScroll = $(window).scrollTop();
        let headStart = secHead.offset().top;
        let desStart = secDes.offset().top;
        let stickyStart = secSticky.offset().top;
        let archStart = secArch.offset().top;
        let arch_endStart = secArch_end.offset().top;
        let peopleStart = secPeople.offset().top;
        let people_endStart = secPeople_end.offset().top;
        let todoStart = secTodo.offset().top;
        let orgStart = secOrg.offset().top;
        let nextStart = secNext.offset().top;

        if (wScroll >= -20 && wScroll < headStart + headLength - windowH*titleChange) {
            block.css("background-color", "#D4DCDE");
            napScroll1.css({"background-position": 0 +"% 50%"});
        }
        else if (wScroll >= headStart + headLength - windowH*titleChange && wScroll < desStart + desLength - windowH*titleChange) {
            let scrollValueDes = Math.abs(wScroll - (desStart - windowH*titleChange));
            let scrollPercentDes = (scrollValueDes / desLength) * 100;
            napScroll1.css({"background-position": scrollPercentDes +"% 50%"});
            napScroll2.css({"background-position": 0 +"% 50%"});
            mainP.removeClass('cs_dark');
            bulletD.removeClass('cs_dark');
            imgD.removeClass('cs_dark');
            imgNumb.removeClass('cs_dark');
            block.css("background-color", "#D4DCDE");

            if (screenLandscapeTop()) {
                img_des3.css({ "transform": "translate(-" + 50 * (scrollPercentDes / 100) + "%, 0%)" });
            } else {
                img_des3.css({ "transform": "translate(0%, 0%)" });
            }
        }

        else if (wScroll >= desStart + desLength - windowH*titleChange && wScroll < stickyStart + stickyLength - windowH*titleChange) {
            let scrollValueStick = Math.abs(wScroll - (stickyStart - windowH*titleChange));
            let scrollPercentStick = (scrollValueStick / (stickyLength)) * 100;
            napScroll1.css({"background-position": 100 +"% 50%"});
            napScroll2.css({"background-position": scrollPercentStick +"% 50%"});
            gradient.css({"background-image":"linear-gradient(90deg, transparent " + 0 + "%, #000 " + 0 + "%)"});
            archH1.css("opacity",0);
            if (wScroll >= stickyStart + stickyLength*0.85 - windowH*titleChange) {
            bulletD.addClass('cs_dark');
            mainP.addClass('cs_dark');
            imgD.addClass('cs_dark');
            block.css("background-color", "#000");
            } else {
            mainP.removeClass('cs_dark');
            bulletD.removeClass('cs_dark');
            imgD.removeClass('cs_dark');
            block.css("background-color", "#D4DCDE");
            }
        }
        else if (wScroll >= stickyStart + stickyLength - windowH*titleChange && wScroll < arch_endStart + arch_endLength - windowH*titleChange) {
            let scrollValueArch = wScroll - (archStart - windowH*titleChange);
            let scrollPercentArch = (scrollValueArch / (windowH/2)) * 100;
            archH1.css("opacity",1);
            gradient.css({"background-image":"linear-gradient(90deg, transparent " + scrollPercentArch*2 + "%, #000 " + scrollPercentArch*4 + "%)"});
            napScroll2.css({"background-position": 100 +"% 50%"});
            //type
            mainP.addClass('cs_dark');
            bulletD.addClass('cs_dark');
            imgD.addClass('cs_dark');
            imgNumb.removeClass('cs_dark');
            block.css("background-color", "#000");
        }
        else if (wScroll >= arch_endStart + arch_endLength - windowH*titleChange && wScroll < people_endStart + people_endLength - windowH*titleChange) {
            gradient.css({ "background-image": "linear-gradient(90deg, transparent " + 100 + "%, #000 " + 100 + "%)" });
            let scrollValuePeople = Math.abs(wScroll - (peopleStart - windowH*titleChange));
            let scrollPercentPeople = (scrollValuePeople / (peopleLength + people_endLength)) * 100;
            //type
            mainP.addClass('cs_dark');
            bulletD.addClass('cs_dark');
            imgD.addClass('cs_dark');
            imgNumb.removeClass('cs_dark');
            block.css("background-color", "#000");
            if (screenLandscapeTop()) {
                img_people1.css({ "transform": "translate(-" + 50 * (scrollPercentPeople / 100) + "%, 0%)" });
            } else {
                img_people1.css({ "transform": "translate(0%, 0%)" });
            }
        }
        else if (wScroll >= people_endStart + people_endLength - windowH*titleChange && wScroll < todoStart + todoLength - windowH*titleChange) {
            let scrollValueTodo = Math.abs(wScroll - (todoStart - windowH*titleChange));
            let scrollPercentTodo = (scrollValueTodo /  (todoLength)) * 100;
            napScroll3.css({"background-position": "50% " + scrollPercentTodo +"%"});
            block.css("background-color", "#000");
            if (screenLandscapeTop()) {
                img_todo1.css({ "transform": "translate(-" + 50 * (scrollPercentTodo / 100) + "%, 0%)" });
                img_todo2.css({"transform":"translate(-"+50*(scrollPercentTodo/100)+"%, 0%)"});
            } else {
                img_todo1.css({ "transform": "translate(0%, 0%)" });
                img_todo2.css({"transform":"translate(0%, 0%)"});
            }
        }
        else if (wScroll >= todoStart + todoLength - windowH*titleChange && wScroll < orgStart + orgLength - windowH*titleChange) {
            let scrollValueOrg = Math.abs(wScroll - (orgStart - windowH*titleChange));
            let scrollPercentOrg = (scrollValueOrg /  (orgLength)) * 100;
            block.css("background-color", "#000");
            mainP.addClass('cs_dark');
            bulletD.addClass('cs_dark');
            imgD.addClass('cs_dark');
            imgNumb.removeClass('cs_dark');
            if (screenLandscapeTop()) {
                img_org1.css({ "transform": "translate(-" + 50 * (scrollPercentOrg / 100) + "%, 0%)" });
            } else {
                img_org1.css({ "transform": "translate(0%, 0%)" });
            }
        }
        else if (wScroll >= orgStart + orgLength - windowH*titleChange && wScroll < nextStart + nextLength - windowH*titleChange) {
            mainP.removeClass('cs_dark');
            bulletD.removeClass('cs_dark');
            imgD.removeClass('cs_dark');
            imgNumb.removeClass('cs_dark');
            block.css("background-color", "#D4DCDE");
        }
        else {
            mainP.removeClass('.cs_dark');
            bulletD.removeClass('.cs_dark');
            imgD.removeClass('cs_dark');
            imgNumb.removeClass('cs_dark');
            block.css("background-color", "#D4DCDE");
        }
        if (wScroll >= nextStart - windowH*titleChange) {
            let scrollValueNext = Math.abs(wScroll - (nextStart - windowH*titleChange));
            let scrollPercentNext = (scrollValueNext /  (nextLength*0.5)) * 100;
            nextLink.css({"transform":"translate( 0,-" + scrollPercentNext**2/ + "%)"});
            // nextGradient.css({
            //     "display":"block",
            //     "background-image":"linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)"
            // });
        } else {
            nextLink.css({ "transform": "translate( 0, 0%)" });
            // nextGradient.css({
            //     "display":"none",
            //     "background-image":"linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)"
            // });
        }

        let timeout = null;

        function cancelNext() {
            timeout = null;
            clearTimeout(timeout);
            nextText_des.html("Continue scrolling to view the next case study");
        }

        if (wScroll >= nextStart + nextLength*0.8 - windowH) {
            timeout = setTimeout(function() {
                nextText_des.html("going to next case study");
                let goTo = nextLink.attr("href");
                window.location = goTo;
            }, 2500);
        } else {
            cancelNext();
        }
    });
}
(function($) {
        winScroll();
    $(window).resize(function() {
        winScroll();
    });
}(jQuery));