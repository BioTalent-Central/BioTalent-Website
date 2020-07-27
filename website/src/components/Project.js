import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import ProjAboutTeam from "./proj-components/ProjAboutTeam"


function Project() {
	return(

		<div className="Project">

	      <ProjTitle projTitle="Project Title"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <ProjAboutTeam />
      
    	</div>

	)
}

export default Project