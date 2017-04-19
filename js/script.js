var ctx = document.getElementById("HTML_5").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["HTML 5"],
        datasets: [{
            backgroundColor: [
        "#2ecc71",
        "#95a5a6",
              ],
            data: [80, 20]
    }]
    }
});


var ctx = document.getElementById("CSS_3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["CSS 3"],
        datasets: [{
            backgroundColor: [
        "#3498db",
        "#95a5a6",
      ],
            data: [75, 25]
    }]
    }
});


var ctx = document.getElementById("JS").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["JavaScript"],
        datasets: [{
            backgroundColor: [
        "#9b59b6",
        "#95a5a6",
            ],
            data: [90, 10]
    }]
    }
});

var ctx = document.getElementById("BTS").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["BOOTSTRAP 3"],
        datasets: [{
            backgroundColor: [
        "#34495e",
        "#95a5a6",
              ],
            data: [95, 5]
    }]
    }
});


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["HTML 5", "CSS 3", "JavaScript", "Bootstrap 3", ],
        datasets: [{
            backgroundColor: [
        "#9b59b6",
        "#3498db",
        "#34495e",
        "#34495e"
      ],
            data: [80, 75, 90, 95]
    }]
    }
});

$(function {
    $("#about-nav").click(function {
        $("#contact-me").slideup("fast");
        $("#skill").slideup("fast");
        $("#about-me").slidedown("swing");


    });
    $("#kill-nav").click(function {
        $("#contact-me").slideup("fast");
        $("#about-me").slideup("swing");
        $("#skill").slidedown("swing");


    });
    $("#contact-nav-nav").click(function {
        $("#about-me").slideup("swing");
        $("#skill").slideup("fast");
        $("#contact-me").slidedown("swing");


    });

});
