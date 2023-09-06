import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';  
library.add(fas);
export function VideoComponent() {
    
    return (
      <div>
        <video id="myVideo" width="300" muted height="250" autoPlay loop>
        <source src="video.mp4" type="video/mp4"/>
        </video>
      </div>
    );    
}
function Hero() {
  return (
    <>
        <div className="hero">
            <div className="top">
                <div className="intro">
                    <h1>
                        Hi, this is Ankit
                    </h1>
                    <p>
                        A frontend developer from Nepal, 
                        with a focus on creative and stylish design.
                        I'm interested in coding, responsive design as well as 
                        music.
                        
                    </p>
                </div>
                <div className="works">
                    <div className="img">
                        <span id="boot-icon" class="bi bi-image" ></span>
                    </div>
                    <div className="text">
                        <h1>My Works</h1>
                        <p>EXPLORE &#8594;</p>
                    </div>
                </div>
                <div className="about">
                    <div className="img">
                        <FontAwesomeIcon className="pencil" icon="fa-solid fa-pencil" style={{color: "#785ae4",}} />
                    </div>  
                    <div className="text">
                        <h1>About Me</h1>
                        <p>EXPLORE &#8594;</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="contact">
                    <h1>Available for <br /> work</h1>
                    <p>Contact me, lets talk!</p>
                    <button>CONNECT</button>
                </div>
                <div className="video">
                    <VideoComponent/>
                </div>
                <div className="skills">
                    <div className="text">
                        <h1>Design Skills</h1>
                        <div className="skills-container">
                            <p>
                                HTML / CSS / SCSS / JAVASCRIPT / REACTJS / RESPONSIVE DESIGN
                            </p>
                        </div>
                    </div>
                    <div className="img">
                        <FontAwesomeIcon className="designIcon  fa-spin" icon="fa-solid fa-link" style={{color: "#785ae4",}} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero;