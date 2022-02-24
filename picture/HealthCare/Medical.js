
Highcharts.chart('Medical', {
  chart: {
	  backgroundColor: "#2a2f48",
    type: 'column'
  },
  title: {
    text: 'Increasing Percentage of Registered Medical Practitioners in Hospital Authority'
  },
	subtitle: {
		text: 'Source：Annual Report of The Medical Council of Hong Kong'
	},
  xAxis: {
    categories: [
      '2009',
			'2010',
			'2011',
			'2012',
			'2013',
			'2014',
			'2015',
			'2016',
			'2017',
			'2018'
    ]
  },
  yAxis: [{
    min: 0,
    title: {
      text: 'Amount'
    }
  }, {
		min: 0,
    title: {
      text: 'Percentage of registered medial practitioners serving in HA'
    },
    opposite: true
  }],
  legend: {
    shadow: false
  },
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
			stacking: 'normal',
			dataLabels: {
				enabled: false,
				color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
				style: {
					// 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
					textOutline: '1px 1px black'
				}
			}
		}
  },
  series: [{
		name: 'Medical practitioners serving in other organisations',
		color: 'rgba(165,170,217,1)',
		data: [7263,7342,7481,7559,7657,7722,7842,7973,8126],
		pointPadding: 0.3,
		pointPlacement: 0,
	}, {
		name: 'Medical practitioners serving in HA ',
		color: 'rgba(126,86,134,.9)',
		data: [5161,5278,5337,5447,5546,5695,5884,6040,6164],
		pointPadding: 0.3,
		pointPlacement: 0,
	},{
		type: 'spline',
		name: 'Percentage of medical practitioners seving in HA',
		data: [41.54,41.82,41.64,41.88,42.01,42.45,42.87,43.10,43.14],
		tooltip: {  // 为当前数据列指定特定的 tooltip 选项
			valueSuffix: '%'
		},
		marker: {
			lineWidth: 2,
			lineColor: Highcharts.getOptions().colors[3],
			fillColor: 'white'
		},
		yAxis: 1
	}]
});
