import React from 'react'
import {Line} from 'react-chartjs-2'


const ActivityChart = (props) => {
	return(
		<div>
			<h3>Activity</h3>
			<Line data={props.data} />
		</div>
	)
}

export default ActivityChart