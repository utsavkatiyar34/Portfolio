import React from 'react';
import './App.css';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import {BrowserRouter} from "react-router-dom";
import{Routes}from "react-router-dom";
import{Route}from"react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route exact path="/skills" element={<Skills/>}>
      </Route>
      <Route exact path="/projects" element={<Project/>}>
      </Route>
      <Route exact path="/work-experience" element={<WorkExperience/>}>
      </Route>
      <Route exact path="/contact" element={<ContactMe/>}>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
