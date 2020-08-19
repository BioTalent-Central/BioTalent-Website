import React from 'react'
import "./BioTalentPage.css"
import BioTalentPicture from './Picture_BioTalent.png'

function BioTalentPage() {
    return (
        <div className="BioTalentPage">
            <head>BioTalent</head>
            <body>
            <a href="https://www.biotalent.ca/">
                    <img src={BioTalentPicture} alt="logo" />
                    </a>
                <h1 className="BioTalentHeaders">Who is BioTalent Canada?</h1>
                <p  className="BioTalentContent">
                    BioTalent Canada is an HR organization, located in Ottawa, committed to aiding Canada's Bioeconomy through the improvement of skills, connections of suitable candidates to industry, and creating various opportunities. Recently, BioTalent was awarded a Great Place to Work certification recognizing their outstanding employee experience and workplace environment. The latter is the same standard that they recommmend their stakeholders to uphold.</p>
                 <h1 className="BioTalentHeaders"> What is Bioeconomy? </h1>
                 <p  className="BioTalentContent">
                    As revealed by the name, bioeconomy is a fusion between biology and the economy. Specifially, it relates to the economic activity derived from the use of biological resources in multiple disciplines such as health, agriculture, chemicals, etc.</p>
                <h1 className="BioTalentHeaders">Their Impact on the uOttawa BioTalent Program </h1>
                <p className="BioTalentContent">
                    BioTalent created a safe space for students to create creative and innovative projects as well as research that can benefit Canada's bioeconomy. Financially, BioTalent's contributions include a reimbursement to the University of Ottawa at the end of the work term for 75% of the first $6000 of salary disperse as well as 4% vacation pay and unemployment pay. </p>    
            </body>
        </div>
    )
}
export default BioTalentPage