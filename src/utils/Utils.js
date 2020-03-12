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

function getOrientation() {
  let windowScreen = window.screen;
  let orientation = '';
  if (windowScreen.height > windowScreen.width) {
     orientation = 'portrait';
  } else {
     orientation = 'landscape';
  }
  return orientation;
}

function doOnOrientationChange()
{
  var windowScreen = window.screen;
  var orientation = '';

  window.addEventListener("orientationchange", function() {
    console.log("the orientation of the device is now " + windowScreen.orientation.angle);
    if (windowScreen.height > windowScreen.width) {
       console.log('portrait');
       orientation = 'portrait';
    } else {
       console.log('landscape');
       orientation = 'landscape';
    }
  });

  return orientation;
}

function setChartMiddleText (txtToShow) {
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
      
      var fontSize = (height / 340).toFixed(2);
      ctx.font = fontSize + "em Verdana";
      ctx.textBaseline = "middle";

      //Ubicar texto en medio del chart
      var text = chart.config.data.text;
      var textX = Math.round((width - ctx.measureText(text).width) / 2) - Math.round(legends.width/2);
      var textY = height * 1 / 2; // Se multiplica si la leyenda se ubica en 'top' o 'bottom'
      
      ctx.fillText(txtToShow, textX, textY);
    }
  });
}

export const generateDataChart = (labels, numbers, colors)  => {
  console.log(getOrientation());
  console.log(doOnOrientationChange());

  setChartMiddleText('Chart M');
  let paddingTop = 0;
  let paddingBottom = 0;

  if(getOrientation() === 'landscape' || doOnOrientationChange() === 'landscape') {
    paddingTop = 55;
    paddingBottom = 55;
  }

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

  var options = {
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
        top: paddingTop,
        bottom: paddingBottom
      },
    },
    legend: { 
      display: true ,
      position: 'right'
    },
    plugins: {
      outlabels:{
        // text: '%l PER => %p \n VAL => %v'
        text: '%v'
      }
    }
  }

  var data = {dataChart, options}
  return data;
}