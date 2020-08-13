import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectFive() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Policy Horizons"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      />


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Evan Larmand" image="/images/headshot1.png"/>
					<TeamMemberImage member="Rishan Vaitheeswarren" image="/images/headshot2.png"/>
					<TeamMemberImage member="Hussein Canoe" image="/images/headshot2.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Pierre-Olivier DesMarchais"
		  					work="Work"
		  					email="email@gmail.com"/>

		  				<Supervisor name="Avalyne Diotte"
		  					work="Work"
		  					email="email@gmail.com"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Evan Larmand" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Rishan Vaitheeswarren" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Hussein Canoe" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  		</div>

		  </div>
     
    	</div>

	)
}

export default ProjectFive