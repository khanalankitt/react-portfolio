import React from 'react';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import './App.css';
import Nav from './nav';
import Hero from './hero';
import AboutMe from './aboutme';
import Works from './works';
import Contact from './contact';
function App() {
  return (
    <>
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
