import React from 'react'
import {Doughnut} from 'react-chartjs-2'


const LangChart = (props) => {
	return(
		<div>
			<h3>Languages</h3>
			<Doughnut data={props.data} />
		</div>
	)
}

export default LangChart