import React from "react"
import { Card, CardBody, CardImg } from "shards-react"

function ProjImage(props) {
  return(
  	<div className="proj-images">
  		<Card>
	    	<CardImg top src={props.projImage}/>
	    	<CardBody>
				<div className="description">
					<h2>Overview</h2>
		        	<p>{props.description}</p>
		        	<br/>
		        	<br/>
		        	<h3>Project Motivation</h3>
		        	<p>{props.motivation}</p>
		        	
        		</div>
			</CardBody>
		</Card>
    </div>
  )
}

export default ProjImage