import React from 'react';

import './App.css';

import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import ProjAboutTeam from "./proj-components/ProjAboutTeam"
import NavBar from "./components/NavBar"

function Project() {
	return(

		<div className="Project">
      
	      <NavBar />

	      <ProjTitle projTitle="Project Title"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription description="Project overview goes here"/> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <ProjAboutTeam 
	        image1="/images/headshot1.png"
	        image2="/images/headshot2.png"
	        image3="/images/headshot3.png"
	        image4="/images/headshot4.png"
	        image5="/images/headshot5.png"
	      />
      
    	</div>

	)
}

export default Project