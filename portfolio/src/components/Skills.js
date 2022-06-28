import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills-main">
      <h2>What I Have</h2>

      <div className="skills-divs">
        <img className="skills-gif" src={require("../images/skills.gif")} />
        <div>
          <p>
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.
          </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
