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
            var ctx = $("#html5");
        var html5 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["HTML 5"],
                datasets: [{
                    label: '# of Votes',
                    data: [90,10],
                    backgroundColor: [
                'rgba(255, 206, 86, 0.5)'
            ],
                    borderColor: [
                'rgba(255, 206, 86, 1)'
            ],
                    borderWidth: 1
        }]
            },

        });
        var ctx = $("#css3");
        var css3 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["CSS 3"],
                datasets: [{
                    label: '# of Votes',
                    data: [75,25],
                    backgroundColor: [
                'rgba(54, 162, 235, 0.5)'
            ],
                    borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
                    borderWidth: 1
        }]
            },

        });
        var ctx = $("#bootstrap3");
        var bootstrap3 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["BOOTSTRAP"],
                datasets: [{
                    label: '# of Votes',
                    data: [90,10],
                    backgroundColor: [
                'rgba(75, 192, 192, 0.5)'
            ],
                    borderColor: [
                'rgba(75, 192, 192, 1)'
            ],
                    borderWidth: 1
        }]
            },

        });
        var ctx = $("#javascript");
        var javascript = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["JAVASCRIPT"],
                datasets: [{
                    label: '# of Votes',
                    data: [90, 10],
                    backgroundColor: [
                'rgba(255, 159, 64, 0.5)'
            ],
                    borderColor: [
                'rgba(255, 159, 64, 1)'],
                    borderWidth: 1
        }]
            },

        });
        var ctx = $("#jquery");
        var jquery = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["JQUERY"],
                datasets: [{
                    label: '# of Votes',
                    data: [75, 25],
                    backgroundColor: [
                'rgba(153, 102, 255, 0.5)'
            ],
                    borderColor: [
                'rgba(153, 102, 255, 1)' ],
                    borderWidth: 1
        }]
            },

        });
        var ctx = $("#angularjs");
        var angular = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["ANGULARJS"],
                datasets: [{
                    label: '# of Votes',
                    data: [10,90],
                    backgroundColor: [
                'rgba(255, 99, 132, 0.5)'
            ],
                    borderColor: [
                'rgba(255,99,132,1)'
            ],
                    borderWidth: 1
        }]
            },

        });

});
