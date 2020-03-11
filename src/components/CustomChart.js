import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const CustomChart = ({ customDataChart }) => {
  return (
    <div className="row">

      <div className="col-lg-12">
				
				<div className="col-lg-12">
          <Doughnut 
            data={customDataChart}
          />
				</div>

      </div>

    </div>
  )
};

export default CustomChart
