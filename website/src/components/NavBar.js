import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
	return(
		<div className="header">
			
			<div className="logo">
				<NavLink to="/">
					<img className="big-logo" src="/images/Dark.png" alt="uOttawa BioTalent Large Logo" />
				</NavLink>
			</div>

			<div className="nav">
				<ul>
					<li><a href="#"><NavLink to="/en-fr">EN/FR</NavLink></a></li>
					<li><a href="#"><NavLink to="/biotalent">BioTalent</NavLink></a></li>
					<li><a href="#"><NavLink to="/opportunities">Opportunities</NavLink></a></li>
					<li><a href="#"><NavLink to="/about">About Us</NavLink></a></li>
					<li className="mydropdown"><a href="javascript:void(0)" className="mydropbtn"><NavLink to="/project">Projects</NavLink></a>
						<div className="mydropdown-content">
							<NavLink to="/project1">Project 1</NavLink>
							<NavLink to="/project2">Project 2</NavLink>
							<NavLink to="/project3">Project 3</NavLink>
							<NavLink to="/project4">Project 4</NavLink>
							<NavLink to="/project5">Project 5</NavLink>
							<NavLink to="/project6">Project 6</NavLink>
							<NavLink to="/project7">Project 7</NavLink>
							<NavLink to="/project8">Project 8</NavLink>
							<NavLink to="/project9">Project 9</NavLink>
							<NavLink to="/project10">Project 10</NavLink>
						</div>
					</li>
					<li><a href="#"><NavLink to="/">Home</NavLink></a></li>
				</ul>
			</div>


		</div>
	)
}

export default NavBar