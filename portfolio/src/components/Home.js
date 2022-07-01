import React from "react";
import "../styles/home.css";
import Skills from "./Skills";
import { isWebpSupported } from "react-image-webp/dist/utils";
import Projects from "./Projects";
import ReactDOM from "react-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";
import Education from "./Education";
export default function Home() {
  return (
    <div className="home-body">
      <div className="home-intro">
        <div className="home-intro-text">
          <h2>
            Hi! I'm, Utsav <span class="wave">👋</span>
          </h2>
          <p>
            A passionate Full Stack Web Developer having an experience of
            building Web applications with JavaScript, React.Js, Node.Js and
            some other useful libraries and frameworks.
          </p>
          <div className="home-social">
            <div>
              <SocialMediaIconsReact
                borderColor="black"
                icon="github"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="black"
                url="https://some-website.com/my-social-media-url"
                size="3.25vw"
                roundness="50%"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="blue"
                icon="linkedin"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="blue"
                url="gmail"
                size="3.25vw"
                roundness="50%"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="red"
                icon="mail"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="red"
                url="https://some-website.com/my-social-media-url"
                size="3.25vw"
                roundness="50%"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="blue"
                icon="twitter"
                iconColor="rgba(255,255,255,1)"
                backgroundColor="blue"
                url="https://some-website.com/my-social-media-url"
                size="3.25vw"
                roundness="50%"
              />
            </div>
          </div>
          <div className="home-buttons">
            <button className="home-btn12">CONTACT ME</button>
            <button className="home-btn12">SEE MY RESUME</button>
          </div>
        </div>
        <div className="home-intro-image">
          <div>
            <img src={require("../images/Myimage.png")} />
          </div>
        </div>
      </div>
      <div className="padder"></div>
      <Skills />
      <Projects/>
      <Education/>
    </div>
  );
}
