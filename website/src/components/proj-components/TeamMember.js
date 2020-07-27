import React from "react"

function TeamMember(props) {
	return(
		<div className="img-container">
			<img className="headshots"
				src={props.image} 
			/>
			<div className="middle">
				<div className="img-text">{props.member}</div>
			</div>
		</div>
	)
}

export default TeamMember