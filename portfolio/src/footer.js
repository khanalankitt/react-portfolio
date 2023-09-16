import React from 'react'
export const marqueeStyles={
    fontSize:"50px",
    fontWeight:1000,
    color:"#c2c1eb",
    position:"absolute",
    opacity:0.4,
    // bottom:0
    
}
function Footer() {
  return (
    //eslint-disable-next-line
    <marquee id="marquee" scrollamount="12" behavior="scroll" style={marqueeStyles}>
        Created by using ReactJS
    </marquee>
  )
}

export default Footer;

