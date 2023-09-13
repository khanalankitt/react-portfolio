import React from 'react'
export const Project = (props)=>{
    return (
        <>
            <div className={props.classname}>
                <div className="image-container">
                    <img loading='lazy' src={props.imageLink} alt="Photograph of the website" />
                </div>
                <div className="text">
                    <h2>{props.name}</h2>
                    <a href={props.link} target="_blank" rel="noreferrer" >
                        <button style={buttonStyle}>
                            Live Demo
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
const buttonStyle={
    height:"50px",
    width:'170px',
    borderRadius:"20px",
    border:"none",
    outline:"none",
    fontSize:"16px",
    fontWeight:570,
    color:"$text-color"
}
function Works() {
    let imageLinks={
        chef:"chef.png",
        portfolio:"portfolio.png",
        smokefree:"smokefree.png"
    }
    let links={
        chef:"https://khanalankitt.github.io/Chef/",
        portfolio:"https://khanalankit69.com.np/",
        smokefree:"https://khanalankitt.github.io/Smokefree/"
    }
  return (
        <>
            <div className="hero-works">
                <Project classname="chef main" imageLink={imageLinks.chef} name="Chef" link={links.chef}/>
                <Project classname="portfolio main" name="Portfolio" imageLink={imageLinks.portfolio} link={links.portfolio}/>
                <Project classname="smokefree main" name="Smokefree" imageLink={imageLinks.smokefree} link={links.smokefree}/>
            </div>
        </>
    );
}

export default Works;