import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import "../styles/Projects.css"
export default function Projects() {
  return (
    <div className='projects-maindiv'>
      <h2>My Project Works</h2>
      <div className='projects-maindiv-mainsection'>
        <div></div>
        <div>
          <img src={require("../images/Nykaa.jpg")}/>
        </div>
      </div>
    </div>
  )
}
