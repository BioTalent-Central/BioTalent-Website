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

	      <ProjTitle projTitle="uOttawa BioMakerspace"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      /> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Marie-Pier Laberge" image="/images/headshot1.png"/>
					<TeamMemberImage member="Sireen Hallal" image="/images/headshot2.png"/>
					<TeamMemberImage member="Stephanie Partheniou" image="/images/headshot3.png"/>
					<TeamMemberImage member="Jeremy Yau" image="/images/headshot4.png"/>
					<TeamMemberImage member="Zachary Leduc" image="/images/headshot5.png"/>
					<TeamMemberImage member="Idil Ismail" image="/images/headshot1.png"/>
					<TeamMemberImage member="Therese Marie Pauline Sarr" image="/images/headshot2.png"/>
					<TeamMemberImage member="Zain Malik" image="/images/headshot3.png"/>
					<TeamMemberImage member="Anthony Lai" image="/images/headshot4.png"/>
					<TeamMemberImage member="Vivienne Cruz" image="/images/headshot5.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Mads Kaern"
		  					work="Work"
		  					email="email@gmail.com"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Marie-Pier Laberge" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Sireen Hallal" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Stephanie Partheniou" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Jeremy Yau" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Zachary Leduc" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Idil Ismael" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Therese Marie Pauline Sarr" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Zain Malik" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Anthony Lai" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Vivienne Cruz" 
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