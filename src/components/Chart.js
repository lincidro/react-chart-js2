import React, { Component } from 'react'
import {Pie, Doughnut} from 'react-chartjs-2'

class Chart extends Component {

  render(){
    return (
			<div className="row">

				<div className="col-lg-6">
					<h2>Pie Chart</h2>
					<Pie data={this.props.dataChart}/>        
				</div>
				
				<div className="col-lg-6">
					<h2>Doughnut Chart</h2>
					{/* Acceder a la data envaida desde App.js */}
					<Doughnut data={this.props.dataChart}/>
				</div>

			</div>
    )
  }
}

export default Chart;