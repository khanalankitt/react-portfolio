import React from 'react';
import {Route,Routes,HashRouter} from "react-router-dom";
import './App.css';
import Nav from './nav';
import Hero from './hero';
import AboutMe from './aboutme';
import Works from './works';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <>
    <HashRouter basename='react-portfolio'>
        <Nav/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
