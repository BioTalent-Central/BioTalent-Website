import React from "react"

function TeamMemberImage(props) {
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

export default TeamMemberImage