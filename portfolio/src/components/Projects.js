import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "../styles/Projects.css";
export default function Projects() {
  return (
    <div className="projects-maindiv">
      <h2>My Project Works</h2>
      <div className="projects-maindiv-mainsection">
        <div className="projects-information">
          <h2>Nykaa Website Clone</h2>
          <p>
            Nykaa is India's biggest e-commerce cosmetics website. We cloned the
            Nykaa website and it was a collaborative project with a team of
            three members was completed in five days.
          </p>
          <h3>Tech-stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h3>Area of responsibilities</h3>
          <ul>
            <li>I created the homepage.</li>
            <li>I created the skin page.</li>
            <li>I gave the final touches to the project.</li>
          </ul>
        </div>
        <div className="projects-image-wrapper">
          <a
            className="probtn-link"
            href="https://6226334f60db02083f69e8c9--practical-jepsen-45a6ea.netlify.app/"
            target="blank"
          >
            <button className="project-btn12">VIEW PROJECT</button>
          </a>
          <img src={require("../images/Nykaa.jpg")} />
        </div>
      </div>
      <div className="projects-maindiv-mainsection">
        <div className="projects-information">
          <h2>Practo Clone</h2>
          <p>
            Practo is one of India's leading healthcare consultation website. We
            cloned the Practo website and it was a collaborative project with a
            team of five members was completed in five days.{" "}
          </p>
          <h3>Tech-stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JSON-server</li>
          </ul>
          <h3>Area of responsibilities</h3>
          <ul>
            <li>I created the homepage.</li>
            <li>I created the login page.</li>
            <li>I created the sign-up page.</li>
            <li>I gave the final touches to the project.</li>
          </ul>
        </div>
        <div className="projects-image-wrapper">
          <a
            className="probtn-link"
            href="https://papaya-salamander-3f0af6.netlify.app/practo-clone/html/home.html"
            target="blank"
          >
            <button className="project-btn12">VIEW PROJECT</button>
          </a>
          <img src={require("../images/pra.jpg")} />
        </div>
      </div>
    </div>
  );
}
