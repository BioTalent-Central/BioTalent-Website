import React from "react"

function Supervisor(props) {
	return(
		<div className="supervisor">

			{props.name}<br/>
			<div className="supervisor-info">
			{props.work}<br/>
			{props.email}
			</div>

		</div>
	)

}

export default Supervisor