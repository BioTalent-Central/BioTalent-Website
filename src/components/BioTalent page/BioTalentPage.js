import React from 'react'
import "./BioTalentPage.css"
import { Card, CardBody, CardImg } from "shards-react"

function BioTalentPage() {
    return (
        <div className="biotalent-page">

        <div className="proj-images">
            
            <Card>
                    <CardBody className="biotalent-card">
                        <div>



                            <div>
                                <a href="https://www.biotalent.ca/">
                                    <CardImg top src="/images/BioTalentCanada.png"/>
                                 </a>
                            </div>

                            <h2>Who is BioTalent Canada?</h2>
                            <p>BioTalent Canada is an HR organization, located in Ottawa, committed to aiding Canada's Bioeconomy through the improvement of skills, connections of suitable candidates to industry, and creation of various opportunities. Recently, BioTalent was awarded a Great Place to Work certification recognizing their outstanding employee experience and workplace environment. The latter is the same standard that they recommmend their stakeholders to uphold.</p>
                            
                            <h2>What is Bioeconomy?</h2>
                            <p>As revealed by the name, bioeconomy is a fusion between biology and the economy. Specifially, it relates to the economic activity derived from the use of biological resources in multiple disciplines such as health, agriculture, chemicals, etc.</p>
                            
                            <h2>BioTalent's Impact on the uOttawa BioGenie Program</h2>
                            <p>BioTalent created a safe space for students to create creative and innovative projects as well as research that can benefit Canada's bioeconomy. Financially, BioTalent's contributions include a reimbursement to the University of Ottawa at the end of the work term for 75% of the first $6000 of salary disperse, as well as 4% vacation pay and unemployment pay.</p>
                        </div>
                    </CardBody>
            </Card>

        </div>
        </div>
    )
}
export default BioTalentPage