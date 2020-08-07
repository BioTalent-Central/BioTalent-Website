import React from "react"

function Supervisor(props) {
	return(
		<div>

			<p className="member">{props.name}</p>
			<p>{props.title}</p>
			<p>{props.work}</p>
			<p>{props.work2}</p>
			<p>{props.email}</p>
			<br/>
			
		</div>
	)

}

export default Supervisor