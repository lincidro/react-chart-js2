// // Clase utilitaria
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Doughnut, Chart} from 'react-chartjs-2';

// export const getRandomColor = () => {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   console.log(color);
//   return color;
// }

// export const getRandomInt = (min, max)  => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// // some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
// var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
// Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
//   draw: function() {
//     originalDoughnutDraw.apply(this, arguments);
    
//     var chart = this.chart;
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var sum = 0;
//     for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
//       sum += chart.config.data.datasets[0].data[i];
//     }

//     var text = 2,
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//   }
// });

// export const generateDataChart = (labels, numbers, colors)  => {
//   var dataChart = {
//     labels: labels,
//     datasets: [
//       {
//         data: numbers,
//         backgroundColor: colors
//       }
//     ],
//     text: '23%'
//   }
//   return dataChart;
// }