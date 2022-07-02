import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/projects" element={<Project />}></Route>
        <Route exact path="/education" element={<Education />}></Route>
        <Route exact path="/contact" element={<ContactMe />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
