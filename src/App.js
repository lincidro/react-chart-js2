import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chart from './components/Chart'
//Import from Utils
import {getRandomColor} from './utils/Utils'
import {getRandomInt} from './utils/Utils'

//Variables de entrada para data
let labelArray = ['Entrada 1', 'Entrada 2', 'Entrada 3'];
let numberArray = [getRandomInt(1, 10), getRandomInt(10, 20), getRandomInt(1,5)];
let backgroundColorArray = [getRandomColor(), getRandomColor(), getRandomColor()];

const data = {
	labels: labelArray,
	datasets: [
    {
      data: numberArray,
      backgroundColor: backgroundColorArray
    }
  ]
};

class App extends Component {
  render () {
    return (
      <div className = "container">
        <h1>React Chart Js 2</h1>
        <hr/>
        {/* Enviar data a Chart.js */}
        <Chart dataChart={data}/>
      </div>
    );
  }
}

export default App;
