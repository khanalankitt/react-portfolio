import "./App.css";
import { Link } from "react-router-dom";
function AboutMe(){
    return(
        
        <>
            <div className="hero-aboutme">
                <div className="top">
                    <div className="aboutme">
                        <h1>About Me</h1>
                        <p>
                        I'm thrilled to introduce myself as an aspiring computer science student with a passion for
                         web development. I believe in the power of technology to transform the world, 
                         and I'm dedicated to honing my skills to make that impact. <br /><br />
                         With each line of code I write, I'm not just building websites; 
                         I'm crafting digital experiences that leave a lasting impression.
                          I'm excited to share my journey, projects, and the creativity that drives
                           me on this About Me page.
                         
                        </p>
                    </div>
                    <div className="image">
                        <div className="img-container">
                            <img src="me.jpg" alt="Photograph of Ankit Khanal" />
                        </div>
                    </div>
                    <div className="contact">
                        <h1>Available for <br /> work</h1>
                        <p>Contact me, lets talk!</p>
                        <Link to="/contact">
                            <button>CONNECT</button>
                        </Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="map">
                        <div className="map-container">
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.9862276193622!2d87.69711808951423!3d26.659841980945302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e591a964b5a017%3A0x47f76b460ddd0947!2z4KSm4KSu4KSVIOCkmuCli-CkguCklQ!5e0!3m2!1sen!2snp!4v1694060904235!5m2!1sen!2snp" 
                        style={{border:0,}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="hobbies">
                        <div className="hobbies-container">
                            <h1>Hobbies</h1>
                            <ul>
                                <li>Coding</li>
                                <li>Music</li>
                                <li>Travelling</li>
                                <li>Learning</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <li>
                            <p>HTML</p>
                            <div className="bar-container">
                                <span className="bar html"></span>
                            </div>
                        </li>
                        <li>
                            <p>CSS/SASS</p>
                            <div className="bar-container">
                                <span className="bar css"></span>
                            </div>
                        </li>
                        <li>
                            <p>JAVASCRIPT</p>
                            <div className="bar-container">
                                <span className="bar js"></span>
                            </div>
                        </li>
                        <li>
                            <p>ReactJS</p>
                            <div className="bar-container">
                                <span className="bar react"></span>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutMe;