import React from "react"
import {Slide} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"


const slideImages = [
  '/images/project-one/CovidEng.jpg',
  '/images/project-two/CBD.jpg',
  '/images/project-three/Brewery.jpg',
  '/images/project-four/cloud_berries.jpg',
  '/images/project-five/biodigital-front-page-2.jpg',
  '/images/project-six/BMS.png',
  '/images/project-seven/jasmeet-with-syringe-pump.jpg',
  '/images/project-ten/bioenvo1.jpg',
  '/images/project-ten/biomol.png'
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}

const Slideshow = () => {
    return (
      <div className="slideshow">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}


export default Slideshow