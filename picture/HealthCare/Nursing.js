
Highcharts.chart('Nursing', {
  chart: {
	  backgroundColor: "#2a2f48",
    type: 'column'
  },
  title: {
    text: 'Declining Percentage of Registered and Enrolled Nurses in Hospital Authority'
  },
	subtitle: {
		text: 'Source：The Nursing Council of Hong Kong'
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
      text: 'Percentage of registered and enrolled nurses serving in HA'
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
		name: 'Nurses serving in other organisations',
		color: 'rgba(248,161,63,1)',
		data: [19119,20145,21208,22797,24030,25288,26670,27802,29251,30612],
		pointPadding: 0.3,
		pointPlacement: 0,
	}, {
		name: 'Nurses serving in HA ',
		color: 'rgba(186,60,61,.9)',
		data: [19522,19866,20102,20901,21816,22759,23791,24587,24980,26111],
		pointPadding: 0.3,
		pointPlacement: 0,
	},{
		type: 'spline',
		name: 'Percentage',
		data: [50.52,49.65,48.66,47.83,47.59,47.37,47.15,46.93,46.06,46.03],
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
