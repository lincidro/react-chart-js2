import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Import from Utils
import {getRandomColor} from './utils/Utils'
import {generateDataChart} from './utils/Utils'
import CustomChart from './components/CustomChart';

var labelArray = [];
var numberArray = [];
var backgroundColorArray = [];

class App extends Component {

  state = {
    dataToChart: [],
    isLoadedState: false
  }
  
  componentDidMount() {
    fetch('https://api.github.com/events')
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        dataToChart: data,
        isLoadedState: true
      })
    })
    .catch(console.log)
  }

  generateDataArray() {
    this.state.dataToChart.slice(0,4).map((contact) => (
      labelArray.push(contact.actor.login),
      numberArray.push(contact.actor.id),
      backgroundColorArray.push(getRandomColor())
    ));
    
    return generateDataChart(labelArray,numberArray,backgroundColorArray);
  }

  render () {
    
    const { dataToChart, isLoadedState } = this.state;

    if (!isLoadedState) {
      return null;
    }

    return (
      <div className = "container-fluid h-100">
        <h1>React Chart Js 2</h1>
        <hr/>
        {/* Enviar data a Chart.js */}
          { this.state && this.state.dataToChart &&
              <CustomChart customDataChart={this.generateDataArray()} isLoaded = {isLoadedState} />
          }
      </div>
    );
  }
}

export default App;
