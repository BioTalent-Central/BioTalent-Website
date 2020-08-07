import React from "react"

function TeamMember(props) {
	return(
		<div>

			<p className="member">{props.member}</p>
			<p>{props.year} year student studying {props.program} at the University of Ottawa</p>
			<p>Graduated from {props.hs}, in {props.city}, in {props.gradyear}</p>
			<br/>
			
		</div>
	)
}

export default TeamMember