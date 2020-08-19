import React from 'react';
import { Card, CardBody, CardImg } from "shards-react"


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectEight() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="RNA-based Computing: CAD Software"/>
	      <ProjImage projImage="/images/project-eight/biocomp1.png"
	      		description="To develop a virtual CAD platform to design and simulate models of RNA-based gene regulatory networks."
				motivation="RNA-based biocomputing is a unique and growing field with bridge between circuit design and regulatory networks continuously growing. While understanding the future possibilities of this field we recognize the importance of having a CAD software that was built from the ground up by University of Ottawa students, for uOttawa students. This allows for more possibilities in future development, and complete access and reliability."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Ghilazghi.jpeg" 
	      					member="Faven Ghilazghi" 
		  					year="Fourth" 
		  					program="Mechanical Engineering and Computing Technology"
		  					hs="West Humber COllegiate Institute"
		  					city="Etobicoke"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Girard.jpg" 
	      					member="S&eacute;bastien Girard" 
		  					year="First" 
		  					program="Software Engineering"
		  					hs="Polyvalente de l'&Eacute;rabli&egrave;re"
		  					city="Gatineau"
		  					gradyear="2019"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Kanwar.jpg" 
	      					member="Antinderpaul Kanwar" 
		  					year="Fourth" 
		  					program="Software Engineering and Engineering Management"
		  					hs="Turner Fenton Secondary School"
		  					city="Brampton"
		  					gradyear="2016"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Kong.jpg" 
	      					member="Siana Kong" 
		  					year="First" 
		  					program="Computer Science"
		  					hs="Corpus Christi Catholic Secondary School"
		  					city="Burlington"
		  					gradyear="2019"
		  					uni="the University of Ottawa"/>
	      	</div>

	      </div>


	      <ProjTitle projTitle="Investigating Emerging RNA-based Tools to Build a Smart Biological Device"/>
	      <ProjImage projImage="/images/project-eight/biocomp3.png"
	      		description="Our project involves writing a comprehensive literature review to explore emerging RNA-based tools and determine their potential in making smart biological devices. This is done by compiling and analyzing extensive research on the applications and limitations of the main categories of RNA-based systems. Additionally, an animation describing biological concepts encompassing biocomputing will be produced. This animation is aimed to help future students in STEM understand the biology aspect, and assist our software team who will be developing a program that simulates currently existing and novel RNA-based gene networks."
		      	motivation="In the field of synthetic biology, biocomputing is an up-and-coming area of research due to the advantages it offers over silicon-based computers, among many other applications in biotechnology and medicine. Unlike the more researched DNA-based and protein-based biocomputers, RNA-based biocomputing is a topic that has not yet been fully delved into. In doing this project, we aim to have a better understanding of how RNA-based tools have been used to control gene expression. The goal is to then exploit that knowledge to create synthetic circuits at the RNA level that could potentially function in biocomputing devices. It is apparent that RNA-based biocomputing could have novel applications in research and therapeutics, including research in stem cell differentiation, cancer immunotherapy, and smart vaccinations. Biocomputing as a general topic is immensely important to the future of not only synthetic biology, but technology and medicine. By working on this project, we hope to help in the effort, even in the smallest sense, of moving one step closer to an autonomous RNA-based biocomputer."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">
	      
	      	<div className="member">
	      		<Card className="member-card">
					<div className="img-container">
						<CardImg top className="headshots" src="images/project-eight/Hwang.png" />
							<div className="middle">
								<div className="img-text">
									Completing a Master of Science in Cellular and Molecular Medicine specialization in Bioinformatics at the University of Ottawa
									<br/>
									Graduated from Abbey Park High School, in Oakville, in 2015
								</div>
							</div>
					</div>
				<CardBody>
					<h2>Roy Hwang</h2>
				</CardBody>
				</Card>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Masama.png" 
	      					member="Coleka Masama" 
		  					year="Fifth" 
		  					program="Neuroscience and Mental Health"
		  					hs="Colonel By Secondary School"
		  					city="Ottawa"
		  					gradyear="2016"
		  					uni="Carleton University"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Radwan.png" 
	      					member="Mohamad Radwan" 
		  					year="First" 
		  					program="Biochemistry and Chemical Engineering"
		  					hs="Sir Wilfrid Laurier Secondary School"
		  					city="Ottawa"
		  					gradyear="2019"
		  					uni="the University of Ottawa"/>
	      	</div>
	      	<div className="member">
	      		<TeamMembers image="images/project-eight/Sodhi.png" 
	      					member="Jasmine Sodhi" 
		  					year="Fourth" 
		  					program="Biology"
		  					hs="Cobequid Educational Centre"
		  					city="Truro"
		  					gradyear="2017"
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

export default ProjectEight