import React from 'react'
export const Project = (props)=>{
    return (
        <>
            <div className={props.classname}>
                <div className="image-container">
                    <div className="image">
                    </div>
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
    let links={
        chef:"https://khanalankitt.github.io/Chef/",
        portfolio:"https://khanalankit69.com.np/",
        smokefree:"https://khanalankitt.github.io/Smokefree/"
    }
  return (
        <>
            <div className="hero-works">
                <Project classname="chef main" name="Chef" link={links.chef}/>
                <Project classname="portfolio main" name="Portfolio" link={links.portfolio}/>
                <Project classname="smokefree main" name="Smokefree" link={links.smokefree}/>
            </div>
        </>
    );
}

export default Works;