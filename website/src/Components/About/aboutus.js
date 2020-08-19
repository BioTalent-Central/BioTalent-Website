import React from 'react';
import "./aboutus.css";
import BioTalentimage from './images/Picture_BioTalent.png'
import govImage from './images/Canwordmark_colour.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import HeaderAboutUs from './headerAboutUs'
import ContentAboutUs from './contentAboutUs'

function aboutus(){
    return(
        <section className="aboutus-section">
            <HeaderAboutUs />
            <ContentAboutUs />
            <Jumbotron fluid>
                <div className="aboutus-text-container">
                    <h1 className="aboutusHeaders">Our partners</h1>
                    <a className="biotalent-link" href="https://www.biotalent.ca/" target="_blank">
                        <img src={BioTalentimage} className="BTLogoIcon"/>
                    </a>
                    <a className="government-link" href="https://horizons.gc.ca/en/home/" target="_blank">
                        <img src={govImage} className="PolicyHorizonIcon" />
                    </a>    
                </div>
            </Jumbotron>
        </section>
    )
}

export default aboutus;
