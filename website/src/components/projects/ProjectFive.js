import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectFive() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Exploring the Future of Biodigital Convergence"/>
	      <ProjImage projImage="/images/project-five/biodigital-front-page-2.jpg"
	      	description="We are at an early age of the Biodigital Convergence – the merging of man-made digital and biological technologies and systems - that has the potential to change the way we work, live, and play. Our goal is to inform Policy Horizons Canada through foresight products like weak signals and insights about the potential policy implications of Biodigital innovations over the next 10 to 15 years in sectors like health, agriculture, manufacturing and security. Foresight is a methodology that can help to detect future challenges and opportunities and support policymakers in the development of robust policies."
	      	motivation="The rapid development and deployment of Biodigital technologies over the next 15 years could rapidly lead to impactful implications for the economy, society, governance and the environment."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">

	      	<div className="member">
				<TeamMembers image="/images/project-five/Canoe.jpg"
							member="Hussein Canoe" 
		  					year="Fourth" 
		  					program="Biochemistry"
		  					hs="Dar Jana International School"
		  					city="Jeddah (Saudi Arabia)"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>	
			</div>
			<div className="member">
				<TeamMembers image="/images/project-five/Larmand.jpg"
							member="Evan Larmand" 
		  					year="Fifth" 
		  					program="Biotechnology"
		  					hs="Cairine Wilson Secondary School"
		  					city="Orleans"
		  					gradyear="2015"
		  					uni="the University of Ottawa"/>	
			</div>
			<div className="member">
				<TeamMembers image="/images/project-five/Vaitheeswaran.png"
							member="Rishan Vaitheeswaran" 
		  					year="Fourth" 
		  					program="Financial Mathematics and Economics"
		  					hs="Richview Collegiate Institute"
		  					city="Toronto"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>	
			</div>

	      </div>

	      <div className="supervisor-container">

  				<p className="team-members">Supervisors</p>

  				<Supervisor name="Pierre-Olivier DesMarchais"
  					work="Policy Horizons Canada, Government of Canada"
  					email="Pierre-Olivier.desMarchais@horizons.gc.ca"/>

  				<Supervisor name="Avalyne Diotte"
  					work="Policy Horizons Canada, Government of Canada"
  					email="avalyne.diotte@horizons.gc.ca"/>
     
  		</div>

    	</div>

	)
}

export default ProjectFive