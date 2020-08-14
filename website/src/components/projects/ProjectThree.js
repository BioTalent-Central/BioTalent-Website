import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectThree() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="uOttawa Microbrewery & Distillery"/>
	      <ProjImage projImage="/images/project-three/Brewery.jpg"/>

	      <ProjDescription 
	      	description="The Faculty of Engineering is interested in developing an on-campus brewery & distillery facility that would be an experimental learning resource so students can apply knowledge learnt in class, increase their job-readiness and meet the recruiting needs of this rapidly growing sector of the bio-economy. During the duration of this project, we built on the existing design of a microbrewery and craft distillery previously done by two chemical engineering teams in the context of their plant design class. Particularly, we focused on the optimization of the fermentation & mashing processes, quality assurance & process control, and minimizing the facility's environmental impact by implementing waste treatment methods such as carbon capture and biomass (spent grain and yeast) reuse."
	      	motivation="The University of Ottawa provides many resources and facilities such as the MakerSpace to offer engineering students hands-on learning experiences. However, such resources are lacking for the Department of Chemical and Biological Engineering, so the aim of this project is to provide an experimental learning facility for these students."
	      />


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
					<TeamMemberImage member="Firas Elchamaa" image="/images/project-three/Elchamaa.jpg"/>
					<TeamMemberImage member="Giselle Granchelli" image="/images/project-three/Granchelli.jpg"/>
					<TeamMemberImage member="Brenna Morgan" image="/images/project-three/Morgan.jpg"/>
					<TeamMemberImage member="Ramzi Aoun" image="/images/project-three/Aoun.jpg"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Andrew Sowinski, PhD"
		  					work="Department of Chemical and Biological Engineering, University of Ottawa"
		  					email="andrew.sowinski@uottawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Firas Elchamaa" 
		  					year="Fourth" 
		  					program="Chemical Engineering"
		  					hs="A.Y. Jackson Secondary School"
		  					city="Kanata"
		  					gradyear="2016"/>

		  				<TeamMember member="Giselle Granchelli" 
		  					year="Second" 
		  					program="Chemical Engineering and Experience Computing Technology"
		  					hs="Collège Catholique Franco-Ouest"
		  					city="Nepean"
		  					gradyear="2018"/>

		  				<TeamMember member="Brenna Morgan" 
		  					year="Third" 
		  					program="Biochemistry and Chemical Engineering and Biotechnology"
		  					hs="Brantford Collegiate Institute"
		  					city="Brantford"
		  					gradyear="2017"/>

		  				<TeamMember member="Ramzi Aoun" 
		  					year="Fourth" 
		  					program="Chemical Engineering"
		  					hs="St. Peter Catholic High School"
		  					city="Orleans"
		  					gradyear="2016"/>

		  		</div>
		  		
		  </div>
     
    	</div>

	)
}

export default ProjectThree