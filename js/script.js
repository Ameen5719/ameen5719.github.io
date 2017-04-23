$(document).ready(function () {
    console.log("ready!");
    // init Isotope
    var $container = $(".gallery-items").isotope();
    // filter items on button click
    $('.gallery-filter').on('click', 'a', function (e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
        $(".gallery-filter li").removeClass("active");
        $(this).closest("li").addClass("active");
    });

});
