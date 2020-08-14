import React from "react"


import ProjTitle from "./projects/proj-components/ProjTitle"
import ProjDescription from "./projects/proj-components/ProjDescription"
import TeamMemberImage from "./projects/proj-components/TeamMemberImage"
import Slideshow from "./Slideshow"
import TeamMember from "./projects/proj-components/TeamMember"
import Supervisor from "./projects/proj-components/Supervisor"

function Project() {
	return(
		<div>
			<ProjTitle projTitle="uOttawa BioTalent Projects Summer 2020"/>
			

			<Slideshow />

			<ProjDescription description="A total of 50 students studying at the University of Ottawa in a variety of different 
			fields were recruited to contribute to 11 different student-led projects; this includes a central support team 
			and 10 teams focused on a unique research project. Students will work for the duration of this co-op work term, 
			May through August, and new students will join the program in future work terms. New students may start their own 
			research projects, or could continue the research started during the current work term by the students involved 
			during this term."/> 

			<br/>
			<h2>BioTalent Central Team</h2>
			<p>The BioTalent Central team is working together to provide support to any of the 10 teams
			completing their respective research projects by contributing their various skills in the fields
			of software engineering and commerce. Apart from providing assistance, these four students are the
			ones responsible for developing the website you are currently looking at! Finally, they play an important
			part in working with professor Mads Kaern to extend the lifetime of the uOttawa BioTalent program
			beyond the Summer 2020 co-op work term.</p> 

			<div className="about-the-team">
			
	      			<div className="images">
		      			<TeamMemberImage member="Emma Dobson Takoff" image="/images/project-central/DobsonTakoff.jpg"/>
						<TeamMemberImage member="F&eacute;lix Larouche" image="/images/headshot3.png"/>
						<TeamMemberImage member="Melanie Tambong" image="/images/headshot2.png"/>
						<TeamMemberImage member="Vivianne Yee" image="/images/headshot1.png"/>
		  			</div>
		  			<div className="team-info">
		  				<br/>

		  				<p className="team-members">Supervisor</p>

		  				<Supervisor name="Mads Kaern, BSc, MSc, PhD"
		  					work="Department of Cellular and Molecular Medecine, University of Ottawa"
		  					email="mkaern@uottawa.ca"/>

		  				<p className="team-members">Research Assistants</p>

		  				<TeamMember member="Emma Dobson Takoff" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Sir Robert Borden High School"
		  					city="Ottawa"
		  					gradyear="2019"/>

		  				<TeamMember member="F&eacute;lix Larouche" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Cégep de l'Outaouais"
		  					city="Gatineau"
		  					gradyear="2018"/>

		  				<TeamMember member="Melanie Tambong" 
		  					year="Second" 
		  					program="Commerce (Management)"
		  					hs="Heritage College"
		  					city="Gatineau"
		  					gradyear="2018"/>

		  				<TeamMember member="Vivianne Yee" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Mississauga Secondary School"
		  					city="Mississauga"
		  					gradyear="2019"/>

		  			</div>
		  	</div>

		</div>
	)
}

export default Project