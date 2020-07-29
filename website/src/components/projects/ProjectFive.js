import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMember from "./proj-components/TeamMember"


function ProjectFive() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Project Five"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMember member="Rebecca" image="/images/headshot1.png"/>
					<TeamMember member="Riley" image="/images/headshot2.png"/>
		  		</div>
		  </div>
     
    	</div>

	)
}

export default ProjectFive