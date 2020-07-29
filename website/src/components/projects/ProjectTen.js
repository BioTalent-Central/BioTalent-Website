import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMember from "./proj-components/TeamMember"


function ProjectTen() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Project Ten"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMember member="Mia" image="/images/headshot1.png"/>
					<TeamMember member="Madison" image="/images/headshot2.png"/>
					<TeamMember member="Michael" image="/images/headshot3.png"/>
					<TeamMember member="Mark" image="/images/headshot4.png"/>
					<TeamMember member="Maria" image="/images/headshot5.png"/>
		  		</div>
		  </div>
     
    	</div>

	)
}

export default ProjectTen