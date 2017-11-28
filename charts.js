//starting the chart.js file
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'point'
        }
    }
})
