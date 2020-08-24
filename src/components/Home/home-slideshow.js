import React, {Component} from 'react'
import Filler1 from './images/filler.jpeg'
import Filler2 from './images/filler2.jpeg'
import Filler3 from './images/filler3.jpeg'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'


const fadeImages = [
  Filler1,
  Filler2,
  Filler3
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SlideShow
