import React, { useEffect } from 'react';

function Graph() {
  useEffect(() => {
    // Ensure the Google Charts script is loaded
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/charts/loader.js';
    script.onload = function () {
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(drawChart);
    }
    document.head.appendChild(script);

    // Draw chart function
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Time', 'Respiratory Rate'],
        ['6:00',  15],
        ['7:00',  14],
        ['8:00',  16],
        ['9:00',  13],
      ]);

      var options = {
        title: 'Respiratory Rate',
        curveType: 'function',
        hAxis: {title: 'Time'},
        vAxis: {title: 'Respiratory Rate (/min)'},
        legend: {position: 'bottom'}
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      chart.draw(data, options);
    }

    return () => {
      // Cleanup script tag on component unmount
      document.head.removeChild(script);
    }
  }, []);

  return (
    <div id="curve_chart" style={{ width: '900px', height: '500px' }}></div>
  );
}

export default Graph;
