import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectEight() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Biocomputing"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      /> 


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Roy Hwang" image="/images/headshot1.png"/>
					<TeamMemberImage member="Faven Ghilazghi" image="/images/headshot2.png"/>
					<TeamMemberImage member="Jasmine Sodhi" image="/images/headshot3.png"/>
					<TeamMemberImage member="Siana Kong" image="/images/headshot4.png"/>
					<TeamMemberImage member="S&eacute;bastien Girard" image="/images/headshot5.png"/>
					<TeamMemberImage member="Atinderpaul Kanwar" image="/images/headshot5.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Mads Kaern, BSc, MSc, PhD"
		  					work="Department of Cellular and Molecular Medecine, University of Ottawa"
		  					email="mkaern@uottawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<h3>RNA-based Computing: CAD Software</h3>

		  				<ProjDescription 
	      					description="To develop a virtual CAD platform to design and simulate models of RNA-based gene regulatory networks."
	      					motivation="RNA-based biocomputing is a unique and growing field with bridge between circuit design and regulatory networks continuously growing. While understanding the future possibilities of this field we recognize the importance of having a CAD software that was built from the ground up by University of Ottawa students, for uOttawa students. This allows for more possibilities in future development, and complete access and reliability."
	      				/> 

		  				<TeamMember member="Faven Ghilazghi" 
		  					year="Fourth" 
		  					program="Mechanical Engineering and Computing Technology"
		  					hs="West Humber COllegiate Institute"
		  					city="Etobicoke"
		  					gradyear="****"/>

		  				<TeamMember member="Siana Kong" 
		  					year="First" 
		  					program="Computer Science"
		  					hs="Corpus Christi Catholic Secondary School"
		  					city="Burlington"
		  					gradyear="2019"/>

		  				<TeamMember member="S&eacute;bastien Girard" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Polyvalente de l'&Eacute;rabli&egrave;re"
		  					city="Gatineau"
		  					gradyear="2019"/>

		  				<TeamMember member="Antinderpaul Kanwar" 
		  					year="Fourth" 
		  					program="Software Engineering and Engineering Management"
		  					hs="Turner Fenton Secondary School"
		  					city="Brampton"
		  					gradyear="2016"/>



		  				<h3>DNA Hardware</h3>

		  				<TeamMember member="Roy Hwang" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Jasmine Sodhi" 
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

export default ProjectEight