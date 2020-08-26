import React from "react"
import { Card, CardBody, CardImg } from "shards-react"

import ProjTitle from "./projects/proj-components/ProjTitle"
import Slideshow from "./Slideshow"
import ProjDescription from "./projects/proj-components/ProjDescription"
import Supervisor from "./projects/proj-components/Supervisor"
import TeamMembers from "./projects/proj-components/TeamMembers"

function Project() {
	return(
		<div>
			
			<ProjTitle projTitle="uOttawa BioGenie Projects Summer 2020"/>		

			<Slideshow />

			<ProjDescription description="More than 60 science, engineering, and business students
			were recruited to contribute to 10 different student-led projects; this includes a central support team 
			and 9 teams focused on a unique research project. Students received the opportunity to translate their academic
			knowledge into practical biotechnology solutions for real-world problems. Students will work for the duration of this co-op work term, 
			May through August, and new students will hopefully join the program in future work terms. New students may start their own 
			research projects, or could continue the research started during the current work term by the students involved 
			during this term."/> 

			<div className="central-team">
				<h2>BioGenie Central Team</h2>
				<p>The BioGenie Central team is working together to provide support to any of the 9 teams
				completing their respective research projects by contributing their various skills in the fields
				of software engineering and commerce. Apart from providing assistance, these four students are the
				ones responsible for developing the website you are currently looking at! Finally, they play an important
				role in working with professor Mads Kaern to extend the lifetime of the uOttawa BioGenie program
				beyond the Summer 2020 co-op work term.</p> 
			</div>

			<p className="team-members">Research Assistants</p>

			<div className="about-the-team">
				<div className="member">
					<TeamMembers image="images/project-central/DobsonTakoff.jpg"
							member="Emma Dobson Takoff" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Sir Robert Borden High School"
		  					city="Ottawa"
		  					gradyear="2019"
		  					uni="the University of Ottawa"/>
		  		</div>
		  		<div className="member">
					<TeamMembers image="/images/project-central/Larouche.jpg"
							member="F&eacute;lix Larouche" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Cégep de l'Outaouais"
		  					city="Gatineau"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
		  		</div>
		  		<div className="member">
					<TeamMembers image="/images/project-central/Tambong.jpg"
							member="Melanie Tambong" 
		  					year="Second" 
		  					program="Commerce (Management)"
		  					hs="Heritage College"
		  					city="Gatineau"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
		  		</div>
		  		<div className="member">
					<TeamMembers image="/images/project-central/Yee.jpg"
							member="Vivianne Yee" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Mississauga Secondary School"
		  					city="Mississauga"
		  					gradyear="2019"
		  					uni="the University of Ottawa"/>
		  		</div>

		  	</div>

		  	<p className="team-members">Supervisor</p>

		  		<div className="proj-images">
			  		<Card>
				    	<CardImg top src="/images/Kaern.jpg"/>
				    	<CardBody>
							<div className="description">
								<h2>Mads Kaern, BSc, MSc, PhD</h2>
					        	<p>Department of Cellular and Molecular Medecine, University of Ottawa</p>
					        	<p>mkaern@uottawa.ca</p>
			        		</div>
						</CardBody>
					</Card>
			    </div>
			<br />

		</div>

	)
}

export default Project