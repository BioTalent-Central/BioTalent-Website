import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectTwo() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Inflammation and CBD"/>
	      <ProjImage projImage="/images/project-two/CBD.jpg"
	      	description="Cannabidiol (CBD) is a major non-psychoactive component of cannabis and has received increased interest in recent years with the legalization of cannabis in Canada and many states. It has been shown to have a wide range of potential health benefits including potential anticancer treatments, migraine relief, and strong anti-inflammatory abilities mediated through an immunomodulatory response. The COVID-MED team will conduct an online, in-depth search of peer-reviewed scientific literature, such as academic journals, in order to gather information about the effects of CBD on inflammation and determine its potential for modulating immune response. The COVID-MED project aims to create a literature review of the ways in which CBD can be used to modulate immune responses.  The review will explore three main topics: (a) CBD and its potential to treat multiple sclerosis, (b) the effect of CBD on joint inflammation caused by rheumatoid arthritis and the options for transdermal delivery, and (c) the potential of CBD to treat symptoms of “cytokine storm”, an overreaction of the immune system, in patients of COVID-19."
	      	motivation="We started this project in hopes of finding ways in which CBD could be used to help treat lung inflammation in COVID-19 patients. We have since expanded the project to cover other inflammatory conditions."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">

		      	<div className="member">
					<TeamMembers image="/images/project-two/Law.jpg"
						member="Gisele Law" 
			  			year="Fourth" 
			  			program="Biotechnology"
			  			hs="St. Robert Catholic High School"
			  			city="Thornhill"
			  			gradyear="2017"
			  			uni="the University of Ottawa"/>	
			  	</div>
		  		<div className="member">
					<TeamMembers image="/images/project-two/Bachetti.jpg"
							member="Luke Bachetti" 
		  					year="Third" 
		  					program="Biomedical Science"
		  					hs="Corpus Christi Catholic Secondary School"
		  					city="Burlington"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
		  		</div>
		  		<div className="member">
					<TeamMembers image="/images/project-two/Derikx.JPG"
							member="Sarah Derikx" 
		  					year="Second" 
		  					program="Biochemistry"
		  					hs="Académie Catholique Mère-Teresa"
		  					city="Hamilton"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
		  		</div>
		  	</div>

		  	<div className="supervisor-container">

				<p className="team-members">Supervisor</p>

			  		<Supervisor name="Xudong Cao, PhD"
			  			work="Department of Chemical Engineering, University of Ottawa"
			  			email="xcao@uOttawa.ca"/>

			</div>
		  		
     
    	</div>

	)
}

export default ProjectTwo