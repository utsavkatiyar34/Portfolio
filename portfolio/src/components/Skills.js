import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills-main">
      <h2>What I Do</h2>
      <p>
        Passionate Full Stack Web Developer who want to explore and learn every
        tech stack. I'm currently working on HTML, CSS, JavaScript, ReactJs and
        Redux for fron-tend development and NodeJs, ExpressJs for back-end
        development and MongoDb as Database Management System.
      </p>
      <div className="skills-divs">
        <img className="skills-gif" src={require("../images/skills.gif")} />
        <div>
          {/* <p>
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.
          </p> */}
          <div className="skillsDiv-parent">
            <div>
              <img className="skills-pic" src={require("../images/html.png")} />
              <p>HTML</p>
            </div>
            <div>
              <img className="skills-pic" src={require("../images/css.png")} />
              <p>CSS</p>
            </div>
            <div>
              <img
                className="skills-pic"
                src={require("../images/JavaScript.png")}
              />
              <p>JavaScript</p>
            </div>
            <div>
              <img
                className="skills-pic"
                src={require("../images/MongoDb.png")}
              />
              <p>MongoDb</p>
            </div>
            <div>
              <img
                className="skills-pic"
                src={require("../images/NodeJs.png")}
              />
              <p>NodeJs</p>
            </div>
            <div>
              <img
                className="skills-pic"
                src={require("../images/ReactJs.png")}
              />
              <p>ReactJs</p>
            </div>
            <div>
              <img
                className="skills-pic"
                src={require("../images/Redux.png")}
              />
              <p>Redux</p>
            </div>
            <div>
              <img
                className="skills-pic"
                src={require("../images/ExpressJs.jpg")}
              />
              <p>ExpressJs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
