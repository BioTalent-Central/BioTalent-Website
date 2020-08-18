import React from "react"

import { Card, CardBody, CardImg } from "shards-react"


function TeamMembers(props) {
	return(
		<Card className="member-card">
			<div className="img-container">
				<CardImg top className="headshots" src={props.image} />
				<div className="middle">
					<div className="img-text">
						{props.year} year student studying {props.program} at {props.uni}
						<br/>
						<br/>
						Graduated from {props.hs}, in {props.city}, in {props.gradyear}
					</div>
				</div>
			</div>
			<CardBody>
				<h2>{props.member}</h2>
			</CardBody>
		</Card>
	)
}

export default TeamMembers