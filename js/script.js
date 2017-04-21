$(function () {
    $("#sidenav-toggle").click(function(){
        $("#sidenav").css("width", "40%");
        $("#sidenav-toggle").fadeOut("fast");
    });
    $("#sidenav-collapse").click(function(){
        $("#sidenav").css("width", "0%");
        $("#sidenav-toggle").fadeIn("fast");
    });
});
