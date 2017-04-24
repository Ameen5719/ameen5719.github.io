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
    $("section#about").slideDown("fast");
    $("a#skill-nav").click(function () {
        $("section#about, section#contact").slideUp("fast");
        $("section#skill").slideDown("swing");

    });
    $("a#contact-nav").click(function () {
        $("section#about, section#skill").slideUp("fast");
        $("section#contact").slideDown("swing");
    });
    $("a#about-nav").click(function () {
        $("section#skill, section#contact").slideUp("fast");
        $("section#about").slideDown("swing");
    });
});
var ctx = "polarchart";
var polarchart = new Chart(ctx, {
    type: 'polarArea',
    data: {


        labels: [
                    "HTML 5", "CSS 3", "BOOTSTRAP", "JAVASCRIPT", "JQUERY", "ANGULARJS"
                    ],
        datasets: [{
            data: [90,
                                       75,
                                       90,
                                       90,
                                       75,
                                       10],
            backgroundColor: ['rgba(255, 206, 86, 0.5)',
                                                    'rgba(54, 162, 235, 0.5)',
                                                    'rgba(75, 192, 192, 0.5)',
                                                    'rgba(255, 159, 64, 0.5)',
                                                    'rgba(153, 102, 255, 0.5)',
                                                     'rgba(255, 99, 132, 0.5)'
                                                ],
            hoverBackgroundColor: ['rgba(255, 206, 86, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(255, 159, 64, 1)',
                                            'rgba(153, 102, 255, 1)',
                                             'rgba(255, 99, 132, 1)'
                                        ]
        }]

    }
});
/**/
