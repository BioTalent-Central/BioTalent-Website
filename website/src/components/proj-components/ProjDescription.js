import React from "react"

function ProjDescription(props){
	return(
		<div className="description">
			<h2>Overview</h2>
        	<p>{props.description}</p>
        </div>
	)
}

export default ProjDescription