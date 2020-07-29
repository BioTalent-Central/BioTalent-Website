import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMember from "./proj-components/TeamMember"


function ProjectOne() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Project One"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMember member="Member 1" image="/images/headshot1.png"/>
					<TeamMember member="Member 2" image="/images/headshot2.png"/>
					<TeamMember member="Member 3" image="/images/headshot3.png"/>
					<TeamMember member="Member 4" image="/images/headshot4.png"/>
					<TeamMember member="Member 5" image="/images/headshot5.png"/>
		  		</div>
		  </div>
     
    	</div>

	)
}

export default ProjectOne