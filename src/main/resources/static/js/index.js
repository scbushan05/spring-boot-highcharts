$.ajax({
	/* for multiple line chart */
	url: "multiplelinechart",
	/* for line chart */
//	url: "linechartdata",	
	success: function(result){
		/* for line chart */
//		var category = JSON.parse(result).categories;
//		var series = JSON.parse(result).series;
//		drawLineChart(category, series);
		
		/* for multiple line chart */
		var formatteddata = [];
		for(var key in result){
			var singleObject = {
					name: '',
					data: []
				}
			singleObject.name = key.toUpperCase();
			for(var i = 0; i < result[key].length; i++){
				singleObject.data.push(parseInt(result[key][i].subscribers));
			}
			formatteddata.push(singleObject);
		}
		
		drawMultipleLineChart(formatteddata);
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