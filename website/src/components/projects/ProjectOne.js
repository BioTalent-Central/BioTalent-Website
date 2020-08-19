import React from 'react';
import { Card, CardBody, CardImg } from "shards-react"


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectOne() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="Analysis of COVID-19 Diagnostic Methods"/>
	      <ProjImage projImage="/images/project-one/CovidEng1.png"
	      	description="Our project involves two distinct phases. First an analysis of currently used diagnostic methods, such as PCR and serological testing, was conducted. This was done to develop a better understanding of what was currently on the market and where these technologies fell short in terms of the creation of a point of care diagnostic kit. The second phase of this project involved conducting research on novel detection techniques, such as SHERLOCK and TOEHOLD, to determine the advantages of these technologies, as well as, what their drawbacks were. This allowed us to understand the issues that need to be addressed before a point of care diagnostic kit can be created. Additionally, an accessible nontechnical report about all viral detection methods was also created to inform those who are interested but lack the technical knowledge. Throughout this project, information was gathered from review articles, protocol documents and manufacturer websites."
	      	motivation="The current pandemic has shown that viral infections are a great danger to our society and that we need a viral detection method that is quick, portable and accurate to ensure that our testing facilities aren't overwhelmed and so that we can control infectious outbreaks in a timely manner. The development of this detection method is dependent on understanding the drawbacks of currently used protocols as well as some of the issues that novel methods possess allowing for a rapid and portable point of care diagnostic kit can be developed."
	      />

		  <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">

	      	<div className="member">
	      		<TeamMembers image="images/project-one/Demerjian.png" 
	      					member="Robert Demerjian" 
		  					year="Second" 
		  					program="Biochemistry"
		  					hs="St Joseph Antonine Sisters School"
		  					city="Ksara (Lebanon)"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
	      		<TeamMembers image="images/project-one/Gill.png"
	      					member="Hertek Gill" 
		  					year="First" 
		  					program="Biomedical Sciences"
		  					hs="Colonel By Secondary School"
		  					city="Ottawa"
		  					gradyear="2019"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
		  		<Card className="member-card">
					<div className="img-container">
						<CardImg top className="headshots" src="images/project-one/Kapoor.png" />
							<div className="middle">
								<div className="img-text">
									High school student currently studying at Lisgar Collegiate Institute in Ottawa, set to graduate in 2021
								</div>
							</div>
					</div>
				<CardBody>
					<h2>Aayush Kapoor</h2>
				</CardBody>
				</Card>
			</div>
		</div>

		<div className="about-the-team">
			<div className="member">
	      		<TeamMembers image="images/project-one/Ray.png" 
	      					member="Rohan Ray" 
		  					year="Second" 
		  					program="Human Kinetics"
		  					hs="Bell High School"
		  					city="Ottawa"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
	      		<TeamMembers image="images/project-one/Shen.png"
	      					member="Shan Shen" 
		  					year="Third" 
		  					program="Biopharmaceutical Science"
		  					hs="L'Amoreaux Collegiate Institute"
		  					city="Toronto"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
			</div>
			<div className="member">
	      		<TeamMembers image="images/project-one/Ward.jpg"
	      					member="Cian Ward" 
		  					year="Third" 
		  					program="Biochemistry"
		  					hs="St. Pius X High School"
		  					city="Ottawa"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
			</div>

	      </div>


	      <ProjTitle projTitle="Designing a novel COVID-19 Point of Care Diagnostic Kit"/>
	      <ProjImage projImage="/images/project-one/CovidEng.jpg"
	      	description="Overall, our 3-D prototype diagnostic kit will include five different sections: three different dispensers, a heating chamber and a detection strip display. We designed this PoC diagnostic kit by using novel techniques, such as SHERLOCK and a lateral flow strip to provide a simple visual positive or negative result. From a design point of view, the 3-D model will be created by using the Fusion360 AutoCad software. The goal of this diagnostic kit is to create a rapid, portable and sensitive PoC testing kit design that can be used in diverse situations and provide a quick result allowing for infectious outbreaks to be contained."
		    motivation="The current diagnostic techniques for COVID-19 require transport of the sample to a laboratory causing the time to obtain a result to be approximately 24-48 hours. Therefore, a novel point-of-care (PoC) diagnostic kit was designed to minimize the time to obtain a result to a couple of hours; all while having a portable and compact design that ensures accurate results. This novel diagnostic kit is important as it allows results to be obtained in a more efficient manner, leading to faster diagnosis, helping to slow down the spread of the virus."
	      />

		  <p className="team-members">Research Assistants</p>

		  <div className="about-the-team">

			  <div className="member">
					<TeamMembers image="images/project-one/Aragon.png" 
								member="Isabella Aragon" 
			  					year="Fourth" 
			  					program="Biomedical Mechanical Engineering"
			  					hs="&Eacute;cole Secondaire de l'&Icirc;le"
			  					city="Gatineau"
			  					gradyear="2014"
			  					uni="the University of Ottawa"/>
			  </div>
			  <div className="member">
					<TeamMembers image="images/project-one/Shetty.png" 
								member="Prisha Shetty" 
			  					year="Third" 
			  					program="Biomedical Mechanical Engineering"
			  					hs="Thomas L. Kennedy Secondary School"
			  					city="Mississauga"
			  					gradyear="2018"
			  					uni="the University of Ottawa"/>
			  </div>


		  </div>

		  <div className="supervisor-container">

			<p className="team-members">Supervisor</p>

			<Supervisor name="Mads Kaern, BSc, MSc, PhD"
				work="Department of Cellular and Molecular Medecine, University of Ottawa"
				email="mkaern@uottawa.ca"/>

			</div>
     
    	</div>

	)
}

export default ProjectOne