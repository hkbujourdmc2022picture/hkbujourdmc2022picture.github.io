
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define(function(){return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){a.createElement("link",{href:"https://fonts.googleapis.com/css?family\x3dUnica+One",rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]);a.theme={colors:"#2b908f #90ee7e #f45b5b #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",
labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}},credits:{style:{color:"#666"}},
labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},
navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",dataLabelsColor:"#B0B0B3",
textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",maskColor:"rgba(255,255,255,0.3)"};a.setOptions(a.theme)});
//# sourceMappingURL=dark-unica.js.map
Highcharts.chart('HAAllocation', {
  chart: {

backgroundColor: "#2a2f48",
    type: 'column',
	size:'10%',
	innerSize: '50%',
  },
  title: {
    text: 'Budget Allocation of Hospital Authority (HA) in Ten Years'
  },
	subtitle: {
		text: 'Source：Hong Kong Budget(2010-2019)'
	},
  xAxis: {
    categories: [
      '2010-2011',
			'2011-2012',
			'2012-2013',
			'2013-2014',
			'2014-2015',
			'2015-2016',
			'2016-2017',
			'2017-2018',
			'2018-2019',
			'2019-2020'
    ]
  },
  yAxis: [{
    min: 0,
    title: {
      text: 'Amount(Billion)'
    }
  }, {
		min: 0,
    title: {
      text: 'Percentage of HA allocation in overall budget'
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
      grouping: false,
      shadow: false,
      borderWidth: 0
    }
  },
  series: [{
		name: 'Government yearly spend (plan)',
		color: 'rgba(165,170,217,1)',
		data: [3172, 3711, 3937, 4400, 4112, 4408, 4869, 4914,5696,6078],
		tooltip: {  // 为当前数据列指定特定的 tooltip 选项
			valuePrefix: '$',
			valueSuffix: ' Billion'
		},
		pointPadding: 0.3, // 通过 pointPadding 和 pointPlacement 控制柱子位置
		pointPlacement: -0.2
	}, {
		name: 'Government yearly spend (actual)',
		color: 'rgba(126,86,134,.9)',
		data: [3014, 3640, 3773, 4335, 3962, 4356, 4621,4709],
		tooltip: {  // 为当前数据列指定特定的 tooltip 选项
			valuePrefix: '$',
			valueSuffix: ' Billion'
		},
		pointPadding: 0.4,
		pointPlacement: -0.2
	}, {
		name: 'HA allocation (plan)',
		color: 'rgba(248,161,63,1)',
		data: [341, 368, 411, 451, 480, 499, 516, 553,624,699],
		tooltip: {  // 为当前数据列指定特定的 tooltip 选项
			valuePrefix: '$',
			valueSuffix: ' Billion'
		},
		pointPadding: 0.3,
		pointPlacement: 0.2,
		// 指定数据列所在的 yAxis
	}, {
		name: 'HA allocation (actual)',
		color: 'rgba(186,60,61,.9)',
		data: [344, 386, 529, 463, 498, 615, 534,564],
		tooltip: {
			valuePrefix: '$',
			valueSuffix: ' Billion'
		},
		pointPadding: 0.4,
		pointPlacement: 0.2,
	},{
		type: 'spline',
		name: 'Percentage',
		data: [10.76,9.92,10.45,10.24,11.67,11.31,10.60,11.25,10.95,11.50],
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


