import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMember from "./proj-components/TeamMember"


function ProjectEight() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Project Eight"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMember member="Lucy" image="/images/headshot1.png"/>
					<TeamMember member="Leah" image="/images/headshot2.png"/>
					<TeamMember member="Luke" image="/images/headshot3.png"/>
					<TeamMember member="Liam" image="/images/headshot4.png"/>
					<TeamMember member="Lilly" image="/images/headshot5.png"/>
		  		</div>
		  </div>
     
    	</div>

	)
}

export default ProjectEight