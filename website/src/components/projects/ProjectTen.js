import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectTen() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Mechanical Design for the Extraction of Microplastics in the Primary Clarifier of Wastewater Treatment Plants"/>
	      <ProjImage projImage="/images/project-ten/bioenvo1.jpg"
	      		description="Our BioEnvo sub-team has researched the paths travelled by microplastics in wastewater treatment plants and have determined the optimal stage to implement a mechanical system designed to extract the most amount of microplastics possible. The collected microplastics are then to be sent to a later stage to be properly treated and eliminated using biodegradation techniques. A safe and proper handling of microplastics in this fashion will promote clean environments and thriving biodiversity."
				motivation="Microplastic pollution poses an imminent and persistent threat to aquatic species and habitats all over the world. Microplastics from scrubbers in cleaners, cosmetic products, and domestic effluent household products ultimately flow into wastewater treatment facilities where they undergo a series of treatment processes and are discharged into freshwater ecosystems. Although some wastewater treatment plants across the globe are able to successfully remove a large portion of microplastics, they are not designed in a way to properly extract and eliminate the microplastic pollutants. Furthermore, the remaining theoretical percentage of microplastics that are released into aquatic environments daily are very significant. The ingestion of the toxic contaminants that microplastics release also affects our food web as they are continuously ingested by organisms at nearly every trophic level. This poor wastewater management in plastic waste has called our BioEnvo team to action to design a system to be implemented within wastewater treatment plants to extract microplastics before they are either retained within sewage sludge and used as agriculture fertilizer, or flow with wastewater effluent and discharged into freshwater ecosystems."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Barr.png" 
	      					member="Matthew Barr" 
		  					year="Fifth" 
		  					program="Biomedical Mechanical Engineering"
		  					hs="&Eacute;cole Secondaire Thériault"
		  					city="Timmins"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Cardinal.png" 
	      					member="Maxime Cardinal" 
		  					year="Third" 
		  					program="Mechanical Engineering and Computing Technology"
		  					hs="&Eacute;cole Secondaire &Eacute;tienne-Br&ucirc;l&eacute;"
		  					city="Toronto"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Groulx.jpg" 
	      					member="Hilary Groulx" 
		  					year="Fifth" 
		  					program="Biomedical Mechanical Engineering"
		  					hs="&Eacute;cole Secondaire Cochrane"
		  					city="Cochrane"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>

	      </div>


	      <ProjTitle projTitle="Remediation of Microplastics and The After Life"/>
	      <ProjImage projImage="/images/project-ten/bioenvo3.png"
	      	description="We have created a protocol to collect, process and convert
microplastics into sellable products. We transformed a harmful environmental pollutant
into multiple alternative useful products!"
	      	motivation="Microplastics in the Ottawa River is a growing problem for both
wildlife and human health. We need to find a way to mitigate and remediate
microplastics in our environment."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/cardinal.jpg"
	      					member="Mireille Cardinal" 
		  					year="Fifth" 
		  					program="Biology with Animal Physiology"
		  					hs="&Eacute;cole Secondaire &Eacute;tienne-Br&ucirc;l&eacute;"
		  					city="Toronto"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/fiore.jpg" 
	      					member="Vanessa Fiore" 
		  					year="Fourth" 
		  					program="Environmental Science with a specialization in Conservation and Biodiversity"
		  					hs="Vaughan Secondary School"
		  					city="Vaughan"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/saunders.jpg" 
	      					member="Jennifer Saunders" 
		  					year="Third" 
		  					program="Biology"
		  					hs="Ajax High School"
		  					city="Ajax"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
	      	</div>

	      </div>


	      <ProjTitle projTitle="Degradation of PET plastic using PETase gene from Ideonella sakaiensis"/>
	      <ProjImage projImage="/images/project-ten/biomol.png"
	      		description="In order to reduce the amount of PET microplastics, E.coli is genetically engineered to integrate  PETase genes which will degrade the PET into its building blocks. Then, depending on the nature of these blocks they can be recycled by reassembling them into new plastic, or they can be transformed into biogas."
		      	motivation="The increasing demand and use of plastic has led to the accumulation of PET microplastics in the Ottawa River. It is imperative to find a solution to reduce the usage of denovo PET plastic, as well as recycle the existing PET microplastic."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Al-Siss.png" 
	      					member="Rim Al-Siss" 
		  					year="Fifth" 
		  					program="Biotechnology"
		  					hs="Coll&egrave;ge Charlemagne"
		  					city="Montreal"
		  					gradyear="2015"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Holy.png" 
	      					member="Kirsten Holy" 
		  					year="Fourth" 
		  					program="Biology (Plant Physiology Option)"
		  					hs="Crestwood Secondary School"
		  					city="Peterborough"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Lee.png" 
	      					member="Myungjoo (Nancy) Lee" 
		  					year="Fourth" 
		  					program="Biomedical Sciences"
		  					hs="Dr. E. P. Scarlett High School"
		  					city="Calgary"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/pradel.png" 
	      					member="Ricardo Pradel" 
		  					year="Third" 
		  					program="Biochemistry with a specialization in immunology and microbiology"
		  					hs="Sacred Heart High School"
		  					city="Ottawa"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
	      	</div>

	      </div>


	      <ProjTitle projTitle="Detection and Characterization of Microplastics"/>
	      <ProjImage projImage="/images/project-ten/bioenvo4.jpg"
	      		description="Our project focuses on the study of small fragments of plastic, less than 5 mm, called microplastics and their accumulation in the marine environment. Microplastic pollution is a growing problem that is under-researched and has potentially serious health implications on the marine ecosystem as well as humans. Our project specifically, is to review and critique studies that have been conducted on microplastic sampling and detection by writing our own review papers. These papers will be the end product of an extensive literature review on the topic."
		      	motivation="We are doing this because the area of study involving microplastics is under-researched and nonuniform. Thus, we wish to help standardize and critique methods that have been used in scientific literature, and convey our research to future teams and students."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Cranmer-Bobbie.jpg" 
	      					member="Elijah Cranmer-Bobbie" 
		  					year="Fourth" 
		  					program="Biotechnology"
		  					hs="Lockerby Composite School"
		  					city="Sudbury"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Khad.jpg" 
	      					member="Shadia Khad" 
		  					year="Third" 
		  					program="Chemical Engineering"
		  					hs="Colonel By Secondary School"
		  					city="Ottawa"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>

	      </div>


	        <ProjTitle projTitle="Emerging Contaminants Policy Memo"/>
	      <ProjImage projImage="/images/project-ten/bioenvo5.jpg"
	      		description="Through talking to municipalities all across Ontario, representatives of marginalized communities, as well as the MECP, an increase of emerging contaminants found in our wastewater was a large concern. In order to address this issue, our team decided to use information collected from interviews to write and implement this policy memo. We aim to make it the most effective and accomodating for all, however, understand that due to limitations there is still much to be done."
		      	motivation="We are doing this because there is an abundant amount of emerging contaminants affecting public health, cultural practices and environmental concerns - and someone needs to voice concerns + possible solutions!!"
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Ali.jpg" 
	      					member="Salman Ali" 
		  					year="First" 
		  					program="Medical Sciences"
		  					hs="North Park Secondary School"
		  					city="Brampton"
		  					gradyear="2019"
		  					uni="Western University"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/Holowachuk.jpg" 
	      					member="Kierra Holowachuk" 
		  					year="First" 
		  					program="Mechatronics Engineering"
		  					hs="Bishop Allen Academy"
		  					city="Toronto"
		  					gradyear="2019"
		  					uni="Western University"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/ramnarine.jpg" 
	      					member="Jordan Ramnarine" 
		  					year="First" 
		  					program="Medical Biophysics"
		  					hs="St. Marcellinus Secondary School"
		  					city="Mississauga"
		  					gradyear="2019"
		  					uni="Western University"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-ten/tino.png" 
	      					member="Danielle Tino" 
		  					year="Third" 
		  					program="Biology"
		  					hs="Kings Christian Collegiate"
		  					city="Oakville"
		  					gradyear="2018"
		  					uni="Western University"/>
	      	</div>

	      </div>

	      <div className="supervisor-container">
		  		
				<p className="team-members">Supervisors</p>

				<Supervisor name="Mads Kaern, BSc, MSc, PhD"
					work="Department of Cellular and Molecular Medecine, University of Ottawa"
					email="mkaern@uottawa.ca"/>

				<Supervisor name="Christopher Lan, Ph.D. M.Sc."
					work="Department of Chemical and Biological Engineering, University of Ottawa"
					email="Christopher.Lan@uottawa.ca"/>

			</div>
     
    	</div>

	)
}

export default ProjectTen