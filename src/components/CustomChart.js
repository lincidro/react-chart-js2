import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import 'chartjs-plugin-piechart-outlabels';

const CustomChart = ({ customDataChart }) => {
  return (
    <div className="row customChart">

      <div className="col-lg-12">
				
				<div className="col-lg-12">
          <Doughnut 
            data={customDataChart.dataChart} 
            options = {customDataChart.params}
          />
				</div>

      </div>

    </div>
  )
};

export default CustomChart
