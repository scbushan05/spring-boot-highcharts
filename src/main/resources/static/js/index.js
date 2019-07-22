$.ajax({
	url: "linechartdata",
	success: function(result){
		var category = JSON.parse(result).categories;
		var series = JSON.parse(result).series;
		drawLineChart(category, series);
	}
});

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