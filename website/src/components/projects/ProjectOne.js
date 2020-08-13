import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectOne() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="COVID-19 Point-of-care Testing"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      /> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Cian Ward" image="/images/headshot1.png"/>
					<TeamMemberImage member="Hertek Gill" image="/images/headshot2.png"/>
					<TeamMemberImage member="Isabella Aragon" image="/images/headshot3.png"/>
					<TeamMemberImage member="Prisha Shetty" image="/images/headshot4.png"/>
					<TeamMemberImage member="Shan Shen" image="/images/headshot5.png"/>
					<TeamMemberImage member="Robert Demerjian" image="/images/headshot4.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Mads Kaern"
		  					work="Work"
		  					email="email@gmail.com"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Cian Ward" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa"
		  					gradyear="2020"/>

		  				<TeamMember member="Hertek Gill" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa"
		  					gradyear="2020"/>

		  				<TeamMember member="Isabella Aragon" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa"
		  					gradyear="2020"/>

		  				<TeamMember member="Prisha Shetty" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa"
		  					gradyear="2020"/>

		  				<TeamMember member="Shan Shen" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa"
		  					gradyear="2020"/>

		  				<TeamMember member="Robert Demerjian" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa"
		  					gradyear="2020"/>

		  		</div>

		  </div>
     
    	</div>

	)
}

export default ProjectOne