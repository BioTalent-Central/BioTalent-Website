import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMember from "./proj-components/TeamMember"


function ProjectFour() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Project Four"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMember member="Steph" image="/images/headshot1.png"/>
					<TeamMember member="Suzy" image="/images/headshot2.png"/>
					<TeamMember member="Sam" image="/images/headshot3.png"/>
					<TeamMember member="Sasha" image="/images/headshot4.png"/>
		  		</div>
		  </div>
     
    	</div>

	)
}

export default ProjectFour