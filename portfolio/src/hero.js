import React,{ useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';  
import { Link } from 'react-router-dom';
library.add(fas);
export const VideoComponent = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const videoElement = videoRef.current;
  
      const disableContextMenu = (e) => {
        e.preventDefault(); // Prevent the default right-click behavior
      };
  
      videoElement.addEventListener('contextmenu', disableContextMenu);
  
      return () => {
        // Clean up the event listener when the component unmounts
        videoElement.removeEventListener('contextmenu', disableContextMenu);
      };
    }, []);
  
    return (
      <div>
        <video ref={videoRef}  id="myVideo" width="300" muted height="250" autoPlay loop>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

function Hero() {
  return (
    <>
        <div className="hero">
            <div className="top">
                <div className="intro hero-item">
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
                <div className="works hero-item">
                    <div className="img">
                        <FontAwesomeIcon className='icon-work' icon="fa-solid fa-list-check" style={{color: "#323a49",}} />                    
                    </div>

                    <div className="text">
                        <h1>My Works</h1>   
                        <Link className="link" to='/works'>
                            <p>EXPLORE &#8594;</p>
                        </Link>
                    </div>
                </div>
                <div className="about hero-item">
                    <div className="img">
                        <FontAwesomeIcon className="pencil " icon="fa-solid fa-pencil"  style={{color: "#323a49",}} />
                    </div>  
                    <div className="text">
                        <h1>About Me</h1>
                        <Link className="link aboutme" to='/aboutme'>
                            <p>EXPLORE &#8594;</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="contact hero-item">
                    <h1>Available for <br /> work</h1>
                    <p>Contact me, lets talk!</p>
                    <Link className="link" to='/contact'>
                        <button className='button-connect'>CONNECT</button>
                    </Link>
                </div>
                <div className="video hero-item">
                    <VideoComponent src="video.mp4"/>
                </div>
                <div className="skills hero-item">
                    <div className="text">
                        <h1>Design Skills</h1>
                        <div className="skills-container">
                            <p>
                                HTML / CSS / SCSS / JAVASCRIPT / REACTJS / RESPONSIVE DESIGN
                            </p>
                        </div>
                    </div>
                    <div className="img">
                        <FontAwesomeIcon className="designIcon  fa-spin" icon="fa-solid fa-link" style={{color: "#323a49",}} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero;