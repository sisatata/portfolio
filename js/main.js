(function ($) {
    "use strict";


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

        $('html,body').animate({scrollTop: $(".hobby").offset().top}, 500);
    });

})(jQuery);
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

