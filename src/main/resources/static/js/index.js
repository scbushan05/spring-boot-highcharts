$.ajax({
	/* for pie chart */
	url: "piechartdata",
	/* for line chart */
//	url: "linechartdata",
	/* for multiple line chart */
//	url: "multiplelinechartdata",
	success: function(result){
		/* line chart single starts here */
//		var category = JSON.parse(result).categories;
//		var series = JSON.parse(result).series;
//		drawLineChart(category, series);
		/* line chart single ends here */
		
		/* line chart multiple series starts here */
//		var formatteddata = [];
//		for(var key in result){
//			var singleObject = {
//					name: '',
//					data: []
//				}
//			singleObject.name = key.toUpperCase();
//			for(var i = 0; i < result[key].length; i++){
//				singleObject.data.push(parseInt(result[key][i].subscribers));
//			}
//			formatteddata.push(singleObject);
//		}
//		
//		drawMultipleLineChart(formatteddata);
		/* line chart multiple series ends here */
		
		/* pie chart starts here */
		var series = [];
		var data = [];
		
		for(var i = 0; i < result.length; i++){
			var object = {};
			object.name = result[i].name.toUpperCase();
			object.y = result[i].yaxis;
			data.push(object);
		}
		var seriesObject = {
			name: 'Employees',
			colorByPoint: true,
			data: data
		};
		series.push(seriesObject);
		drawPieChart(series);
		
		/* pie chart ends here */
	}
});

/* for line chart */
function drawLineChart(category, series){
	Highcharts.chart('container', {
	    chart: {
	        type: 'line',
	        width: 500
	    },
	    
	    title: {
	        text: 'Width is set to 300px'
	    },
	
	    xAxis: {
	        categories: category
	    },
	    
	    tooltip: {
	        formatter: function() {
	          return '<strong>'+this.x+': </strong>'+ this.y;
	        }
	    },
	
	    series: [{
	        data: series
	    }]
	});
}

/* for multiple line chart */
function drawMultipleLineChart(formatteddata){
	Highcharts.chart('container', {

	    title: {
	        text: 'Solar Employment Growth by Sector, 2010-2019'
	    },

	    subtitle: {
	        text: 'Source: thesolarfoundation.com'
	    },

	    yAxis: {
	        title: {
	            text: 'Number of Employees'
	        }
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle'
	    },

	    plotOptions: {
	        series: {
	            label: {
	                connectorAllowed: false
	            },
	            pointStart: 2011
	        }
	    },

	    series: formatteddata,

	    responsive: {
	        rules: [{
	            condition: {
	                maxWidth: 500
	            },
	            chartOptions: {
	                legend: {
	                    layout: 'horizontal',
	                    align: 'center',
	                    verticalAlign: 'bottom'
	                }
	            }
	        }]
	    }

	});
}

/* for pie chart */
function drawPieChart(series){
	Highcharts.chart('container', {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie'
	    },
	    title: {
	        text: 'Browser market shares in January, 2018'
	    },
	    tooltip: {
	    	formatter: function() {
	    		return '<strong>'+this.key+': </strong>'+ this.y;
		    }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            dataLabels: {
	                enabled: true,
	                format: '<b>{point.name}</b>: {point.y}'
	            }
	        }
	    },
	    series: series
	});
}