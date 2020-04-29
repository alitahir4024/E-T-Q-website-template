$(window).on("scroll",()=> {

    if ($(window).scrollTop()) {

        $('section>nav').css({
            backgroundColor: "rgba(245,245,245,0.6)",
            border:"1px solid rgba(0,0,0,.09)",
            height: "13vh",
            width:"98%",
            transition: "all 0.5s",
            top:"2%",
            left:"0.9%",
        });

        $('.moon').css({
            color:"whitesmoke",
            transition: "all 0.5s",
        });

        $('section>nav>span>p').css({
            color:"#323232",
            transition: "all 0.5s",
        });

        $('section>nav>ul>li').css({
            color:"rgba(0,0,0,0.5)",
            transition: "all 0.5s",
        });

        $('section>nav>div').css({
            backgroundColor:"#323232",
            transition: "all 0.5s",
        });

        $('section>nav>div>span').css({
            backgroundColor:"white",
            transition: "all 0.5s",
        });
    }

    else {
        $('section>nav').css({
            backgroundColor: "transparent",
            height: "15vh",
            width:"100%",
            transition: "all 0.5s",
            top:"0",
            left:"0",
            border:"none",
        });

        $('section>nav>span>p').css({
            color:"white",
            transition: "all 0.5s",
        });

        $('section>nav>ul>li').css({
            color:"white",
            transition: "all 0.5s",
        });

        $('section>nav>div').css({
            backgroundColor:"white",
            transition: "all 0.5s",
        });

        $('section>nav>div>span').css({
            backgroundColor:"#323232",
            transition: "all 0.5s",
        });

        $('.moon').css({
            color:"#323232",
            transition: "all 0.5s",
        });
    }

});

$('section>nav>div').click(() => {
    $('section>nav>div>span').toggleClass('move');
    $('section').toggleClass('for-section');
    $('section>nav>ul>li').toggleClass('for-li-logo');
    $('section>nav>span>p').toggleClass('for-li-logo');
    $('.bar').toggleClass('for-bar');
    $('.cross').toggleClass('for-cross');
    $('.landing-page-text>h6').toggleClass('for-cross');
    $('.landing-page-text>button').toggleClass('for-btn');
    $('.landing-page-text>h1').toggleClass('for-h1');
    $('.text').toggleClass('for-text');
    $('.outlets').toggleClass('for-outlet');
    $('.text>h1').toggleClass('for-text-h1-p');
    $('.text>p').toggleClass('for-text-h1-p');
    $('.text>button').toggleClass('for-text-btn');
    $('.partners').toggleClass('for-partner');
    $('.partners>ol>li>i').toggleClass('for-li');
    $('.partners>ul>li>i').toggleClass('for-li');
    $('.slider-section').toggleClass('for-slider-section');
    $('.slider-controls').toggleClass('for-slider-controls');
    $('.sub-slider>h2').toggleClass('for-h1');
    $('.sub-slider>p').toggleClass('for-sub-slider-h2-p');
    $('footer').toggleClass('for-partner');
    $('footer>span>p').toggleClass('for-footer-span');
    $('footer>ul>li').toggleClass('for-footer-ul-li');
    $('footer>ul>li>i').toggleClass('for-footer-ul-li-i');
});

$('section>nav>div>span').click(() => {
    this.toggleClass('move');
    $('section').toggleClass('for-section');
    $('section>nav>ul>li').toggleClass('for-li-logo');
    $('section>nav>span>p').toggleClass('for-li-logo');
    $('.bar').toggleClass('for-bar');
    $('.cross').toggleClass('for-cross');
    $('.landing-page-text>h6').toggleClass('for-cross');
    $('.landing-page-text>button').toggleClass('for-btn');
    $('.landing-page-text>h1').toggleClass('for-h1');
    $('.text').toggleClass('for-text');
    $('.outlets').toggleClass('for-outlet');
    $('.text>h1').toggleClass('for-text-h1-p');
    $('.text>p').toggleClass('for-text-h1-p');
    $('.text>button').toggleClass('for-text-btn');
    $('.partners').toggleClass('for-partner');
    $('.partners>ol>li>i').toggleClass('for-li');
    $('.partners>ul>li>i').toggleClass('for-li');
    $('.slider-section').toggleClass('for-slider-section');
    $('.slider-controls').toggleClass('for-slider-controls');
    $('.sub-slider>h2').toggleClass('for-h1');
    $('.sub-slider>p').toggleClass('for-sub-slider-h2-p');
    $('footer').toggleClass('for-partner');
    $('footer>span>p').toggleClass('for-footer-span');
    $('footer>ul>li').toggleClass('for-footer-ul-li');
    $('footer>ul>li>i').toggleClass('for-footer-ul-li-i');
});

$('.bar').click(() => {

    $('section>nav>ul').css({
        opacity: "1",
        visibility: "visible",
        transition: "all 0.5s",
    });

    $('.bar').css({
        opacity: "0",
        visibility: "hidden",
        transition: "all 0.5s",
    });

    $('.logo').css({
        opacity: "0",
        visibility: "hidden",
        transition: "all 0.5s",
    });

    $('section>nav>div').css({
        opacity: "0",
        visibility: "hidden",
        transition: "all 0.5s",
    })
});

$('.cross').click(() => {

    $('section>nav>ul').css({
        opacity: "0",
        visibility: "hidden",
        transition: "all 0.5s",
    });

    $('.bar').css({
        opacity: "1",
        visibility: "visible",
        transition: "all 0.5s",
    });

    $('.logo').css({
        opacity: "1",
        visibility: "visible",
        transition: "all 0.5s",
    });

    $('section>nav>div').css({
        opacity: "1",
        visibility: "visible",
        transition: "all 0.5s",
    });

});

var x = 1

function sub() {

    if (x == 1) {

        $('.slider-section').css({
            left: "0%",
            transition: "all 0.5s",
        });

        $('.slider-1').removeClass('fade-class');

        $('.slider-2').addClass('fade-class');

        $('.slider-3').addClass('fade-class');

        x = 0
    }

    else if (x == 0) {

        $('.slider-section').css({
            left: "-75%",
            transition: "all 0.5s",
        });

        $('.slider-1').addClass('fade-class');

        $('.slider-2').removeClass('fade-class');

        $('.slider-3').addClass('fade-class');

        x = 1
    }
}

function sub_1() {

    if (x == 1) {

        $('.slider-section').css({
            left: "-75%",
            transition: "all 0.5s",
        });

        $('.slider-3').addClass('fade-class');

        $('.slider-1').addClass('fade-class');

        $('.slider-2').removeClass('fade-class');

        x = 0
    }

    else if (x == 0) {

        $('.slider-section').css({
            left: "-150%",
            transition: "all 0.5s",
        });

        $('.slider-1').addClass('fade-class');

        $('.slider-2').addClass('fade-class');

        $('.slider-3').removeClass('fade-class');

        x = 1
    }
}