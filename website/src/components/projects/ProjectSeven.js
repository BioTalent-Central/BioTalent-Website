import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectSeven() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="3D Bioprinters"/>
	      <ProjImage projImage="/images/project-seven/proj7.png"
	      	description="3D bioprinting has emerged as a powerful technique to reconstruct the complex anisotropic structures of our tissues, in a way that other scaffold fabrication techniques have not allowed thus far. A number of technologies have been developed for this purpose, each with benefits and limitations. The goals of this project are to generate comprehensive knowledge of these technologies, and to develop a detailed plan to build a novel, cost-effective and versatile 3D bioprinting system that can generate complex multicellular and anisotropic tissue structures for a range of applications."
	      	motivation="3D Bioprinters are typically high cost, and we want to make them more accessible for researchers through the development of a low-cost 3D bioprinter that is capable of multi material printing."
	      />

	    <div className="about-the-team">

	    	<div className="member">
				<TeamMembers image="/images/project-seven/Dorn.png"
							member="Elisa Dorn" 
		  					year="Fourth" 
		  					program="Biotechnology"
		  					hs="St. Mary Catholic Secondary School"
		  					city="Pickering"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
				<TeamMembers image="/images/project-seven/Kamal.PNG"
							member="Saad Kamal" 
		  					year="Third" 
		  					program="Biomedical Mechanical Engineering"
		  					hs="St. Lawrence Secondary School"
		  					city="Cornwall"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
				<TeamMembers image="/images/project-seven/Kim.PNG"
							member="Joongho Kim" 
		  					year="Fourth" 
		  					program="Computer Engineering"
		  					hs="St. Michael's College School"
		  					city="Toronto"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
				<TeamMembers image="/images/project-seven/Mander.PNG"
							member="Jasmeet Mander"
		  					year="Third" 
		  					program="Mechanical Engineering"
		  					hs="St. Lawrence Secondary School"
		  					city="Cornwall"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
			</div>

	    </div>

	    <div className="supervisor-container">

			<p className="team-members">Supervisors</p>

			<Supervisor name="Jean-Philippe St-Pierre, M.Eng, PhD"
				work="Department of Chemical and Biological Engineering, University of Ottawa"
				email="Jean-Philippe.St-Pierre@uottawa.ca"/>

			<Supervisor name="Betty Li, M.Eng, PhD"
		  					work="Human Health Therapeutics Research Center, National Research Council of Canada"
		  					email="Betty.Li@nrc-cnrc.gc.ca"/>

		 </div>
     
    	</div>

	)
}

export default ProjectSeven