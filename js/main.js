(function ($) {
    "use strict";
    $('.project .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    })



    $('#contact').on("click", function () {

        $('html,body').animate({scrollTop: $(".contact").offset().top}, 500);
    });
    $('#life').on("click", function () {

        $('html,body').animate({scrollTop: $(".student-life").offset().top}, 500);
    });
    $('#p-info').on("click", function () {

        $('html,body').animate({scrollTop: $(".personal-info").offset().top}, 500);
    });
    $('#achieve').on("click", function () {

        $('html,body').animate({scrollTop: $(".achievment").offset().top}, 500);
    });
    $('#hobby').on("click", function () {

        $('html,body').animate({scrollTop: $(".hobby").offset().top}, 500);
    });
    $('#skill').on("click", function () {

        $('html,body').animate({scrollTop: $(".skill").offset().top}, 500);
    });
    $('#myBtn').on("click", function () {

        $('html,body').animate({scrollTop: $(".home").offset().top}, 500);
    });
    $('#project').on("click", function () {

        $('html,body').animate({scrollTop: $(".project").offset().top}, 500);
    });
    $('#tabs').tabs({ active: 0 });

})(jQuery);

//Javascript
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    document.body.style.background='black';
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.body.style.background="fixed url('http://cdn.backgroundhost.com/backgrounds/subtlepatterns/bright_squares.png')";
}
