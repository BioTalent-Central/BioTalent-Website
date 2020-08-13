import React from "react"
import {Slide} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"


const slideImages = [
  '/images/bio.jpg',
  '/images/CBD.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg',
  '/images/bio3.jpg'
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
      <div>
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Project 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Inflammation and CBD</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Project 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Project 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>Project 5</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              <span>Project 6</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              <span>Project 7</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              <span>Project 8</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              <span>Project 9</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              <span>Project 10</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}


export default Slideshow