import React from "react"

import TeamMember from "./TeamMember"

function ProjAboutTeam(){
	return(
		<div>
			<h2>The Team</h2>
				<div className="images">
					<TeamMember member="Member 1" image="/images/headshot1.png"/>
					<TeamMember member="Member 2" image="/images/headshot2.png"/>
					<TeamMember member="Member 3" image="/images/headshot3.png"/>
					<TeamMember member="Member 4" image="/images/headshot4.png"/>
					<TeamMember member="Member 5" image="/images/headshot5.png"/>
				</div>
        </div>
	)
}

export default ProjAboutTeam