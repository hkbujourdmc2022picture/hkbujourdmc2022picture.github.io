window.onload = function() {

    var chart = new CanvasJS.Chart("chart01", {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Suicide Rate by Gender in Hong Kong"
        },
        axisX: {
            valueFormatString: "YYYY",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Number of Visits",
            crosshair: {
                enabled: true
            }
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
                type: "line",
                showInLegend: true,
                name: "Female",
                markerType: "square",
                xValueFormatString: "YYYY",
                color: "#F08080",
                dataPoints: [
                    { x: new Date(2010, 0, 3), y: 9.8 },
                    { x: new Date(2011, 0, 4), y: 8.8 },
                    { x: new Date(2012, 0, 5), y: 9.2 },
                    { x: new Date(2013, 0, 6), y: 9.2 },
                    { x: new Date(2014, 0, 7), y: 8.9 },
                    { x: new Date(2015, 0, 8), y: 8.6 },
                    { x: new Date(2016, 0, 9), y: 8.2 },


                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "Male",
                lineDashType: "dash",
                dataPoints: [
                    { x: new Date(2010, 0, 3), y: 18.4 },
                    { x: new Date(2011, 0, 4), y: 16.2 },
                    { x: new Date(2012, 0, 5), y: 17 },
                    { x: new Date(2013, 0, 6), y: 17.5 },
                    { x: new Date(2014, 0, 7), y: 17 },
                    { x: new Date(2015, 0, 8), y: 17.5 },
                    { x: new Date(2016, 0, 9), y: 17.6 },


                ]
            }
        ]
    });
    chart.render();

    function toogleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    var chart = new CanvasJS.Chart("chart02", {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Social Worker between 2013-2019"
        },
        axisY: {
            title: "Number of Social Worker",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Billions of Barrels/day",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Degree Holder's Social Worker",
                legendText: "Degree Holder's Social Worker",
                showInLegend: true,
                dataPoints: [
                    { label: "2013", y: 7103 },
                    { label: "2014", y: 7261 },
                    { label: "2015", y: 7552 },
                    { label: "2016", y: 7807 },
                    { label: "2017", y: 8137 },
                    { label: "2018", y: 14223 },
                    { label: "2019", y: 15147 },
                ]
            },
            {
                type: "column",
                name: "Associate Degree and High Dipoma Holder's Social Worker",
                legendText: "Associate Degree and High Dipoma Holder's Social Worker",

                showInLegend: true,
                dataPoints: [
                    { label: "2013", y: 5817 },
                    { label: "2014", y: 6008 },
                    { label: "2015", y: 6355 },
                    { label: "2016", y: 6646 },
                    { label: "2017", y: 6852 },
                    { label: "2018", y: 7980 },
                    { label: "2019", y: 7989 },
                ]
            }
        ]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}