$(function () {
    $("section#about-me").slideDown("fast");
    $("a#skill-nav").click(function () {
        $("section#about-me, section#contact-me").slideUp("fast");
        $("section#skill").slideDown("swing");

    });
    $("a#contact-nav").click(function () {
        $("section#about-me, section#skill").slideUp("fast");
        $("section#contact-me").slideDown("swing");
    });
    $("a#about-nav").click(function () {
        $("section#skill, section#contact-me").slideUp("fast");
        $("section#about-me").slideDown("swing");

    });
    $("#sidenav-trigger").click(function(){
        $(".sidenav").css("width", "30%");
    });
    $("#sidsidenav-close").click(function() {
        $(".sidenav").css("width", "0");
    })
});
