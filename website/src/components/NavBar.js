import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
	return(
		<div className="header">
			
			<div className="logo">
				<NavLink to="/home">
					<img className="big-logo" src="/images/Dark.png" alt="uOttawa BioTalent Large Logo" />
				</NavLink>
			</div>

			<div className="nav">
				<ul>
					<li><a href="#"><NavLink to="/en-fr">EN/FR</NavLink></a></li>
					<li><a href="#"><NavLink to="/biotalent">BioTalent</NavLink></a></li>
					<li><a href="#"><NavLink to="/opportunities">Opportunities</NavLink></a></li>
					<li><a href="#"><NavLink to="/about">About Us</NavLink></a></li>
					<li className="mydropdown">
						<a href="javascript:void(0)" className="mydropbtn">
						<NavLink to="/project">Projects</NavLink>
						</a>
						<div className="mydropdown-content">
							<NavLink to="/project1">COVID-19 Point-of-care Testing</NavLink>
							<NavLink to="/project2">Inflammation and CBD</NavLink>
							<NavLink to="/project3">Microbrewery and Craft Distilleries</NavLink>
							<NavLink to="/project4">The Potential of the Natural Resources of Quebec's Lower North Shore</NavLink>
							<NavLink to="/project5">Policy Horizons</NavLink>
							<NavLink to="/project6">uOttawa BioMakerspace</NavLink>
							<NavLink to="/project7">3D Bioprinters</NavLink>
							<NavLink to="/project8">Biocomputing</NavLink>
							<NavLink to="/project9">Detection and Characterization of Microplastics</NavLink>
							<NavLink to="/project10">Remediation of Microplastics</NavLink>
						</div>
					</li>
					<li><a href="#"><NavLink to="/home">Home</NavLink></a></li>
				</ul>
			</div>


		</div>
	)
}

export default NavBar