Highcharts.getOptions().plotOptions.pie.colors = (function () {
	var colors = [],
		base = Highcharts.getOptions().colors[0],
		i;
	for (i = 0; i < 10; i += 1) {
		// Start out with a darkened base color (negative brighten), and end
		// up with a much brighter color
		colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
	}
	return colors;
}());
// 初始化图表
var chart = Highcharts.chart('Personnel', {
	chart: {
		backgroundColor: "#2a2f48"
  },
	title: {
		text: 'Distribution of Full-time Equivalent Staff 2017-2018'
	},
	subtitle: {
		text: 'Source: Hospital Authority Annual Report 2017-2018'
	},
	tooltip: {
		pointFormat: '<b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			}
		}
	},
	series: [{
		type: 'pie',
		data: [
			{
				name: 'Medical Total',
				y: 6336,
				sliced: true,
				selected: true
			},
			['Allied Health Total',   7815],
			['Nursing Total',       26111],
			['Care-related Support Staff Total',    14939],
			['Non-direct Patient Care Total',     21725]
		]
	}]
});
