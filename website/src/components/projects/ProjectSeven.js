import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectSeven() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="3D Bioprinters"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      /> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Saad Kamal" image="/images/headshot1.png"/>
					<TeamMemberImage member="Elisa Dorn" image="/images/headshot2.png"/>
					<TeamMemberImage member="Joongho Kim" image="/images/headshot3.png"/>
					<TeamMemberImage member="Jasmeet Mander" image="/images/headshot5.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Jean-Philippe St-Pierre"
		  					title="Title"
		  					work="Work"
		  					email="email@gmail.com"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Saad Kamal" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Elisa Dorn" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Joongho Kim" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Jasmeet Mander" 
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

export default ProjectSeven