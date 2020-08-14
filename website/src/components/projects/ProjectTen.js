import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMember from "./proj-components/TeamMember"
import Supervisor from "./proj-components/Supervisor"


function ProjectTen() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Remediation of Microplastics"/>
	      <ProjImage projImage="/images/bio.jpg"/>

	      <ProjDescription 
	      	description="Project description goes here"
	      	motivation="Project motivation goes here"
	      />


	      <ProjExtResources resources="If applicable, add links to team's websites, partners, etc."/>

	      <div className="about-the-team">
	      	<h2>The Team</h2>
	      		<div className="images">
	      			<TeamMemberImage member="Vanessa Fiore" image="/images/headshot1.png"/>
					<TeamMemberImage member="Hilary Groulx" image="/images/headshot2.png"/>
					<TeamMemberImage member="Rim Al-Siss" image="/images/headshot3.png"/>
					<TeamMemberImage member="Mireille Cardinal" image="/images/headshot4.png"/>
					<TeamMemberImage member="Nancy Lee" image="/images/headshot5.png"/>
					<TeamMemberImage member="Matthew Barr" image="/images/headshot3.png"/>
					<TeamMemberImage member="Jennifer Saunders" image="/images/headshot4.png"/>
					<TeamMemberImage member="Maxime Cardinal" image="/images/headshot5.png"/>
					<TeamMemberImage member="Ricardo Pradel" image="/images/headshot5.png"/>
		  		</div>

		  		<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Mads Kaern, BSc, MSc, PhD"
		  					work="Department of Cellular and Molecular Medecine, University of Ottawa"
		  					email="mkaern@uottawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<h3>Mechanical Design for the Extraction of Microplastics in the Primary Clarifier of Wastewater Treatment Plants</h3>

		  				<ProjDescription 
	      					description="Our BioEnvo sub-team has researched the paths travelled by microplastics in wastewater treatment plants and have determined the optimal stage to implement a mechanical system designed to extract the most amount of microplastics possible. The collected microplastics are then to be sent to a later stage to be properly treated and eliminated using biodegradation techniques. A safe and proper handling of microplastics in this fashion will promote clean environments and thriving biodiversity."
	      					motivation="Microplastic pollution poses an imminent and persistent threat to aquatic species and habitats all over the world. Microplastics from scrubbers in cleaners, cosmetic products, and domestic effluent household products ultimately flow into wastewater treatment facilities where they undergo a series of treatment processes and are discharged into freshwater ecosystems. Although some wastewater treatment plants across the globe are able to successfully remove a large portion of microplastics, they are not designed in a way to properly extract and eliminate the microplastic pollutants. Furthermore, the remaining theoretical percentage of microplastics that are released into aquatic environments daily are very significant. The ingestion of the toxic contaminants that microplastics release also affects our food web as they are continuously ingested by organisms at nearly every trophic level. This poor wastewater management in plastic waste has called our BioEnvo team to action to design a system to be implemented within wastewater treatment plants to extract microplastics before they are either retained within sewage sludge and used as agriculture fertilizer, or flow with wastewater effluent and discharged into freshwater ecosystems."
	      				/>

		  				<TeamMember member="Hilary Groulx" 
		  					year="Fifth" 
		  					program="Biomedical Mechanical Engineering"
		  					hs="&Eacute;cole Secondaire Cochrane"
		  					city="Cochrane"
		  					gradyear="2016"/>

		  				<TeamMember member="Matthew Barr" 
		  					year="Fifth" 
		  					program="Biomedical Mechanical Engineering"
		  					hs="&Eacute;cole Secondaire Thériault"
		  					city="Timmins"
		  					gradyear="2016"/>

		  				<TeamMember member="Maxime Cardinal" 
		  					year="Third" 
		  					program="Mechanical Engineering and Computing Technology"
		  					hs="&Eacute;cole Secondaire &Eacute;tienne-Br&ucirc;l&eacute;"
		  					city="Toronto"
		  					gradyear="2018"/>


		  				<h3>Microplastic Remediation</h3>

		  				<h3>Microplastic Biodegration</h3>


		  				<TeamMember member="Vanessa Fiore" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Rim Al-Siss" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Mireille Cardinal" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Nancy Lee" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Jennifer Saunders" 
		  					year="First" 
		  					program="Biology"
		  					hs="High School"
		  					city="Ottawa, ON"
		  					gradyear="2020"/>

		  				<TeamMember member="Ricardo Pradel" 
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

export default ProjectTen