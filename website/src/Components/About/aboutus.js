import React from 'react';
import "./aboutus.css";
import BioTalentimage from './images/Picture_BioTalent.png'
import govImage from './images/Canwordmark_colour.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import HeaderAboutUs from './headerAboutUs'
import ContentAboutUs from './contentAboutUs'

function aboutus(){
    return(
        <section className="aboutus-section">
            <HeaderAboutUs />
            <ContentAboutUs />
        </section>
    )
}

export default aboutus;
