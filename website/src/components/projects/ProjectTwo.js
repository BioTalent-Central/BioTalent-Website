import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectTwo() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Inflammation and CBD"/>
	      <ProjImage projImage="/images/CBD.jpg"/>

	      <ProjDescription 
	      	description="While most patients of the current COVID-19 pandemic show mild to no symptoms, other patients deteriorate into a life-and-death situation, at least partially attributed to patients’ own immune systems overreacting to the invasion of the virus, a phenomenon known as “cytokine storm”. The COVID-MED team will conduct an online, in-depth search of peer-reviewed scientific literature, such as academic journals, in order to gather information about the effects of CBD on cytokine storm, determine its potential for treating autoimmune diseases and cancer.

			The COVID-MED project aims to create three reports: (a) a literature review of CBD and its potential to treat autoimmune diseases, (b) a report on the challenges of creating a CBD patch that targets joint inflammation and (c) a report about the potential of cannabidiol (CBD) as a solution to treat symptoms of cytokine storm."
	      	motivation="We started this project in hopes of finding ways in which CBD could be used to help treat lung inflammation in COVID-19 patients. We have since expanded the project to cover other inflammatory conditions."
	      /> 

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Gisele Law" image="/images/Law.jpg"/>
					<TeamMemberImage member="Luke Bachetti" image="/images/Bachetti.jpg"/>
					<TeamMemberImage member="Sarah Derikx" image="/images/Derikx.JPG"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Xudong Cao, PhD."
		  					work="Department of Chemical Engineering, University of Ottawa"
		  					email="xcao@uOttawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Gisele Law" 
		  					year="Fourth" 
		  					program="Biotechnology"
		  					hs="St. Robert Catholic High School"
		  					city="Thornhill"
		  					gradyear="2017"/>

		  				<TeamMember member="Luke Bachetti" 
		  					year="Third" 
		  					program="Biomedical Science"
		  					hs="Corpus Christi Catholic Secondary School"
		  					city="Burlington"
		  					gradyear="2017"/>

		  				<TeamMember member="Sarah Derikx" 
		  					year="Second" 
		  					program="Biochemistry"
		  					hs="Académie Catholique Mère-Teresa"
		  					city="Hamilton"
		  					gradyear="2018"/>

		  		</div>
		  		
		  </div>
     
    	</div>

	)
}

export default ProjectTwo