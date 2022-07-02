import React from "react";
import "../styles/achivements.css";
export default function Achivements() {
  return (
    <div className="achive-maindiv">
      <h2>Achivements</h2>
      <div className="achivements-wrapper">
        <div className="achivement-div">
          <img src={require("../images/hackerrankcertificate.png")} />
          <h3>HackerRank Problem Solving (Basic) Certificate</h3>
          <p>
            It covers basic topics of Data Structures (such as Arrays, Strings)
            and Algorithms (such as Sorting and Searching).
          </p>
        </div>
        <div className="achivement-div">
          <img src={require("../images/internship.jpg")} />
          <h3>Automobiles & Electric vehicle internship Certificate</h3>
          <p>
            During the internship I learned about IC engine Automobiles &
            electric vehicles and its components.
          </p>
        </div>
        {/* <div className="achivement-div">
          <img src={require("../images/hackerrankcertificate.png")} /> 
          <h3>Problem Solving (Basic) Certificate</h3> 
          <p>It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).</p>
        </div> */}
      </div>
    </div>
  );
}
