import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectNine() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Detection and Characterization of Microplastics"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Our project focuses on the study of small fragments of plastic, less than 5 mm, called microplastics and their accumulation in the marine environment. Microplastic pollution is a growing problem that is under-researched and has potentially serious health implications on the marine ecosystem as well as humans. Our project specifically, is to review and critique studies that have been conducted on microplastic sampling and detection by writing our own review papers. These papers will be the end product of an extensive literature review on the topic."
	      	motivation="We are doing this because the area of study involving microplastics is under-researched and nonuniform. Thus, we wish to help standardize and critique methods that have been used in scientific literature, and convey our research to future teams and students."
	      />


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Elijah Cranmer-Bobbie" image="/images/project-nine/Cranmer-Bobbie.jpg"/>
					<TeamMemberImage member="Shadia Khad" image="/images/project-nine/Khad.jpg"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Christopher Lan, Ph.D. M.Sc."
		  					work="Department of Chemical and Biological Engineering, University of Ottawa"
		  					email="Christopher.Lan@uottawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Elijah Cranmer-Bobbie" 
		  					year="Fourth" 
		  					program="Biotechnology"
		  					hs="Lockerby Composite School"
		  					city="Sudbury"
		  					gradyear="2017"/>

		  				<TeamMember member="Shadia Khad" 
		  					year="Third" 
		  					program="Chemical Engineering"
		  					hs="Colonel By Secondary School"
		  					city="Ottawa"
		  					gradyear="2016"/>

		  		</div>
		  		
		  </div>
     
    	</div>

	)
}

export default ProjectNine