import React from 'react';


import ProjTitle from "./proj-components/ProjTitle"
import ProjImage from "./proj-components/ProjImage"
import ProjDescription from "./proj-components/ProjDescription"
import ProjExtResources from "./proj-components/ProjExtResources"
import TeamMemberImage from "./proj-components/TeamMemberImage"
import TeamMembers from "./proj-components/TeamMembers"
import Supervisor from "./proj-components/Supervisor"


function ProjectFour() {
	return(

		<div className="Projects">

	      <ProjTitle projTitle="The Potential of the Natural Resources of Quebec's Lower North Shore"/>
	      <ProjImage projImage="/images/project-four/cloud_berries.jpg"
	      	description="We have identified resources on the Lower North Shore that contain biomaterials such as collagen and antioxidants that are used in markets such as neutraceuticals, pharmaceuticals, cosmetics and more. We focused on two main resources: aquatic waste and berries, which we split into two projects accordingly. 
There is a large quantity of aquatic waste on the Lower North Shore, as a result of the high concentration of fisheries and because of the active ingredients present in the waste. The active ingredients looked at are collagen, chitosan and fish oil. The research heavily revolves around the extraction processes and use of these materials. This part laid down the groundwork for a business plan revolving around the uses of aquatic waste.
Our other focus was the berries as they contain many different biomaterials used in various fields, we focused on the use in cosmetics. There is already a lot of research being done on farming berries in the Lower North Shore therefore our project focused more so on how to transform the berries to create more profit. Extraction processes for the biomaterials were identified as well as delivery systems to ensure that the biomaterials, in this case, antioxidants would improve the skins condition (without the proper precautions antioxidants could either be neutral or harm the skin). The groundwork to develop bar soaps incorporating the extracts from the berries on the Lower North Shore was established through this project as well since going directly to the market would bring in the most profit. 
There is an emphasis on sustainability both ecologically and economically for both resources. Our project highlights the areas to focus on for future businesses on the Lower North Shore thus."
	      	motivation="We are doing this because we want to help boost the economy of Quebec's Lower North Shore. The unemployment rate in the region is significantly higher than the rest of Canada therefore, we are looking at sustainable ways to create jobs for the people in the area."
	      />

	      <p className="team-members">Research Assistants</p>

	      <div className="about-the-team">

	      		<div className="member">
					<TeamMembers image="/images/project-four/Arulchelvam.jpeg"
							member="Nilesh Arulchelvam" 
		  					year="Third" 
		  					program="Biochemistry"
		  					hs="Sacred Heart High School"
		  					city="Ottawa"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
			  	</div>
			  	<div className="member">
					<TeamMembers image="/images/project-four/Murley.jpg"
							member="Claire Murley" 
		  					year="Third" 
		  					program="Environmental Sciences"
		  					hs="Omer-Deslauriers High School"
		  					city="Ottawa"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
			  	</div>
			  	<div className="member">
					<TeamMembers image="/images/project-four/Parks.jpg"
							member="Andrew Parks" 
		  					year="Third" 
		  					program="Chemical Engineering"
		  					hs="Ridgemont High School"
		  					city="Ottawa"
		  					gradyear="2018"
		  					uni="the University of Ottawa"/>
			  	</div>
			  	<div className="member">
					<TeamMembers image="/images/project-four/Silver.jpeg"
							member="Jasmine Silver" 
		  					year="Fourth" 
		  					program="Biotechnology"
		  					hs="Sir Robert Borden High School"
		  					city="Ottawa"
		  					gradyear="2017"
		  					uni="the University of Ottawa"/>
			  	</div>
	      	
	      </div>

	      <div className="supervisor-container">

  				<p className="team-members">Supervisors</p>

  				<Supervisor name="Andrew, Sowinski,  Ph.D., P.Eng"
  					work="Department of Chemical and Biological Engineering, University of Ottawa"
  					email="sowinski@uottawa.ca"/>

  				<Supervisor name="Kristopher Fequet, CEP"
  					work="Northern Research Center, Coasters Association Inc"
  					email="kristopher.fequet@coastersassociation.com"/>
     
  			</div>

    	</div>

	)
}

export default ProjectFour