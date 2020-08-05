import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectSix() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Project Six"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      /> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Diana" image="/images/headshot1.png"/>
					<TeamMemberImage member="Daniella" image="/images/headshot2.png"/>
					<TeamMemberImage member="David" image="/images/headshot3.png"/>
					<TeamMemberImage member="Dan" image="/images/headshot4.png"/>
					<TeamMemberImage member="Denise" image="/images/headshot5.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Name"
		  					title="Title"
		  					work="Work"
		  					email="email@gmail.com"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Member 1" 
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

export default ProjectSix