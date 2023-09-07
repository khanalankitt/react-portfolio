import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="links">
          <Link className="link" to='/'>
            <p>Home</p>
          </Link>
          <Link className="link" to='/works'>
            <p>Work</p>
          </Link>          
          <Link className="link" to='/aboutme'>
            <p>About</p>
          </Link>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/khanalankitt" target="_blank" rel="noreferrer" title='Facebook'>
            <p style={{fontSize:25,fontWeight:700,}}>f</p>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akhanal749@gmail.com" target="_blank" rel="noreferrer" title='Gmail'>
            <p><FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#363746",fontSize:20,}} /></p>
          </a>
          <a href="https://github.com/khanalankitt" target="_blank" rel="noreferrer" title='GitHub'>
            <p><img width="28" height="28" className="github-logo" src="https://img.icons8.com/material-rounded/24/363746/github.png" alt="github"/>&nbsp;</p>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;