// Clase utilitaria
import {Chart} from 'react-chartjs-2';

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const getRandomInt = (min, max)  => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    const chart = this.chart;
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;

    var fontSize = (height / 220).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";

    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      console.log(chart.config.data.datasets[0].data[i]);
      sum += chart.config.data.datasets[0].data[i];
    }

    var min = Math.min.apply( Math, chart.config.data.datasets[0].data );

    const text = `${min} MB`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});
*/

// Se configura un plugin para poder agregar el texto al centro del Doughnut Chart
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;
    var legends = chart.legend; //Si la leyenda se ubica a la derecha, se debe restar

    var fontSize = (height / 180).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    //Ubicar texto en medio del chart
    var text = chart.config.data.text;
    var textX = Math.round((width - ctx.measureText(text).width) / 2) - Math.round(legends.width/2);
    var textY = height * 1 / 2; // Se multiplica si la leyenda se ubica en 'top' o 'bottom'
    
    ctx.fillText(text, textX, textY);
  }
});

export const generateDataChart = (labels, numbers, colors)  => {
  let dataChart = {
    labels: labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: colors
      }
    ],
    text: 'Texto X'
  }

  var params = {
    animation: {
        duration: 2000,
    },
    display: true,
    text: numbers,
    borderWidth: 2,
    lineWidth: 2,
    padding: 20,
    textAlign: 'center',
    stretch: 45,
    font: {
      resizable: true,
      minSize: 12,
      maxSize: 18
    },
    valuePrecision: 1,
    percentPrecision: 2,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 55,
        bottom: 55,
      },
    },
    legend: { 
      display: true ,
      position: 'right'
    }
  }

  var data = {dataChart, params}
  return data;
}