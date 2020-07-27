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
					<li><a href="#language">EN/FR</a></li>
					<li><a href="#biotalent">BioTalent</a></li>
					<li><a href="#opportunities">Opportunities</a></li>
					<li><a href="#about">About Us</a></li>
					<li className="mydropdown"><a href="javascript:void(0)" class="mydropbtn">Projects</a>
						<div class="mydropdown-content">
							<NavLink to="/project">Project 1</NavLink>
							<a href="#">Project 2</a>
							<a href="#">Project 3</a>
							<a href="#">Project 4</a>
							<a href="#">Project 5</a>
							<a href="#">Project 6</a>
							<a href="#">Project 7</a>
							<a href="#">Project 8</a>
							<a href="#">Project 9</a>
							<a href="#">Project 10</a>
						</div>
					</li>
					<li><NavLink to="/">Home</NavLink></li>
				</ul>
			</div>


		</div>
	)
}

export default NavBar