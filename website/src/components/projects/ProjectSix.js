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

	      <ProjTitle projTitle="uOttawa BioMakerSpace"/>
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

		  				<Supervisor name="Mads Kaern, BSc, MSc, PhD"
		  					work=""
		  					email="mkaern@uottawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<h3>Virtual BioMakerSpace</h3>

		  				<ProjDescription 
	      					description="The Virtual BioMakerSpace is an online platform which will be used to support and simulate the vision of the future physical space of the BioMakerSpace. It will give access to virtual simulators, online workshops, and will showcase the biotechnology projects at the University of Ottawa."
	      					motivation="We are creating the Virtual BioMakerSpace to help develop biotechnology leaders of tomorrow by providing a learning platform to expose more students to the field of biotechnology through a virtual space."
	      				/> 

		  				<TeamMember member="Zain Malik" 
		  					year="Third" 
		  					program="Computer Engineering"
		  					hs="Streetsville Secondary School"
		  					city="Mississauga"
		  					gradyear="2018"/>

		  				<TeamMember member="Anthony Lai" 
		  					year="Fourth" 
		  					program="Software Engineering"
		  					hs="Richmond Hill High School"
		  					city="Richmond Hill"
		  					gradyear="2017"/>

		  				<TeamMember member="Vivienne Cruz" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="St. Ignatius of Loyola Catholic Secondary School"
		  					city="Oakville"
		  					gradyear="2019"/>

		  				<h3>Building a uOttawa BioMakerSpace</h3>

		  				<ProjDescription 
	      					description="The goal of the project is to eventually build a physical space at the university dedicated to biotechnology. The first phase of the project is to build on existing strengths in the field, and then in the second phase we plan to build new specialized rooms, such as a general shared laboratory, a cell culture room, a microscopy room, an innovation room and meeting and seminar rooms to offer workshops. In all those rooms, students will get the opportunity to learn and to be involved in interesting projects."
	      					motivation="We want to give a space to the students where they can have access to equipment to conduct extracurricular projects. This space will allow students to get more hands-on experience and it is something we want to offer because a lot of programs in biotechnology do not give enough practical learning activities."
	      				/> 

		  				<TeamMember member="Marie-Pier Laberge" 
		  					year="Fourth" 
		  					program="Biomedical Mechanical Engineering"
		  					hs="Cégep de l'Outaouais"
		  					city="Gatineau"
		  					gradyear="2016"/>

		  				<TeamMember member="Jeremy Yau" 
		  					year="Third" 
		  					program="Commerce (Healthcare Analystics)"
		  					hs="AY Jackson Secondary School"
		  					city="Toronto"
		  					gradyear="2017"/>

		  				<TeamMember member="Zachary Leduc" 
		  					year="Third" 
		  					program="Biochemistry"
		  					hs="École Secondaire Du Versant"
		  					city="Gatineau"
		  					gradyear="2018"/>

		  				<h3>BioStartUp: A Student-Led Biotechnology Resource Facility </h3>

		  				<ProjDescription 
	      					description="Currently, the University of Ottawa purchases reagents and laboratory equipment from commercial suppliers. However, some of these equipment and reagents can be manufactured internally at significantly lower costs. Therefore, the BioStartUp will be a student-led biotechnology resource facility, where laboratory equipment and reagents will be manufactured in-house. Not only will this help in reducing internal costs for faculties, but it also has a potential of generating revenue that can be used to support the envisioned uOttawa BioMakerSpace, as well as various biotechnology-related activities and competitions at the University of Ottawa. Furthermore, the equipment and reagents will be manufactured by science and engineering students, which can help them gain hands-on skills that would be valuable for their future careers. In addition, students will have the opportunity to participate in various workshops and training activities within the BioStartUp. They will also be able to improve their entrepreneurial skills by selling the manufactured products, while working together to run and administrate the facility."
	      					motivation="We are developing this resource facility because we want to help in advancing biotechnology education at the University of Ottawa. We want students in various science and engineering programs to have the opportunity of gaining valuable hands-on experiences by manufacturing laboratory equipment and reagents. We also desire to integrate entrepreneurship into science and engineering by allowing students to run this “company” and to potentially sell the manufactured equipment and reagents internally to research and teaching labs. Furthermore, we would like to generate revenue through internal sales in order to help sustain the operation of the envisioned uOttawa BioMakerSpace and to help in the funding needed for uOttawa undergraduate students participating in various national and international biotechnology-related competitions."
	      				/> 

		  				<TeamMember member="Sireen Hallal" 
		  					year="Third" 
		  					program="Chemical Engineering"
		  					hs="Riverside Secondary School"
		  					city="Windsor"
		  					gradyear="2018"/>

		  				<TeamMember member="Stephanie Partheniou" 
		  					year="Third" 
		  					program="Biochemistry with a specialization in Microbiology and Immunology (Frech Immersion Stream)"
		  					hs="A.N Myer Secondary School"
		  					city="Niagara Falls"
		  					gradyear="2018"/>

		  				<TeamMember member="Idil Ismael" 
		  					year="Third" 
		  					program="Commerce (International Management)"
		  					hs="&Eacute;cole Secondaire Publique Louis-Riel"
		  					city="Ottawa"
		  					gradyear="2018"/>

		  				<TeamMember member="Therese Marie Pauline Sarr" 
		  					year="Third" 
		  					program="Chemical Engineering"
		  					hs="Senegalese American Bilingual School"
		  					city="Dakar, Senegal"
		  					gradyear="2018"/>

		  		</div>

		  </div>
     
    	</div>

	)
}

export default ProjectSix