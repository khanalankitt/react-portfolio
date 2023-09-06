import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="links">
          <p>Home</p>
          <p>Work</p>
          <p>About</p>
        </div>
        <div className="socials">
          <p style={{fontSize:25,fontWeight:700,}}>f</p>
          <p><FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#7863e4",fontSize:20,}} /></p>
          <p><img width="28" height="28" className="github-logo" src="https://img.icons8.com/material-rounded/24/7863e4/github.png" alt="github"/></p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;