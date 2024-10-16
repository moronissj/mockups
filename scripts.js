google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    drawBarChart();
    drawLineChart();
    drawPieChart();
}

function drawBarChart() {
    var data = google.visualization.arrayToDataTable([
        ["Producto", "Ventas", { role: "style" }],
        ["Producto A", 894, "#30596B"],
        ["Producto B", 649, "#44B7AC"],
        ["Producto C", 930, "#768ABA"],
        ["Producto D", 1200, "#e5e4e2"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
    }, 2]);

    var options = {
        title: "Productos más vendidos",
        width: '100%',
        height: 200,
        bar: { groupWidth: "90%" },
        legend: { position: "none" },
        backgroundColor: '#f8f9fa'
    };

    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}

function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mes', 'Ingresos'],
        ['Enero', 4000],
        ['Febrero', 4600],
        ['Marzo', 5200],
        ['Abril', 6100],
        ['Mayo', 5800],
        ['Junio', 6300],
        ['Julio', 6700],
        ['Agosto', 7000],
        ['Septiembre', 7500],
        ['Octubre', 8000],
        ['Noviembre', 8500],
        ['Diciembre', 9200]
    ]);

    var options = {
        title: 'Ingresos mensuales',
        width: '100%',
        height: 200,
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: '#f8f9fa'
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart'));
    chart.draw(data, options);
}


function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
  ]);

  var options = {
      title: '',
      width: '100%',
      height: "150px"
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

// Ensure charts redraw on window resize for better responsiveness.
window.addEventListener('resize', drawCharts);
