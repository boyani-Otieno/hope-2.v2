import React from 'react'
import './kibaoni.css'
import img77 from "../../../../assets/ambemba.jpeg"
import img777 from "./pst.AndrewKibaoni.jpeg"
import ProgramsR from './ProgramsR'

function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>Pastor Michael Ambembo initiated the establishment of Tumaini Church in Kibaoni in the year 2007, 
         beginning with gatherings at his residence, where an initial group of 20-25 people 
         gathered. As the congregation grew, the church relocated to Kibaoni Primary School, 
         witnessing a steady increase in attendance every Sunday.
         Recognizing the need for a more permanent space to accommodate the 
         expanding ministry, the leadership of Tumaini Ministries, after careful 
         consideration, secured a piece of land. Subsequently, in the year 2013, 
         they embarked on the construction of a permanent church building. This 
         significant step marked a pivotal moment in the church's journey, providing 
         a dedicated and lasting place of worship for the community in Kibaoni. 
         The commitment to securing a permanent structure reflects the dedication 
         of the church to its members and the broader mission of Tumaini.</p>
     </div>
     <div>
        <h4>Our Church</h4>
        <p>Our church has a few programs that it runs.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div><ProgramsR /></div>
     </div>
        <h2>Meet Our Church Leaders</h2>
        <div className='team' id="teamR">
        <div className='me'>
         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img className="A-img" src={img77} alt="about us" />
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
                  <h4>Pst Nanjoli Ambembo (Founder)</h4>
                  <p>We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.My business is more
                  than just a job. Each time I take on a new project, 
                  I make sure it aligns with my core set of values so
                  I know I can deliver great results. My curiosity makes
                  me love learning, and added with my perfectionism,
                  I am able to come up with quality work.</p>
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <h4>Pst Alfred</h4>
                <p>We all have our strengths. I’ve perfected
                  mine so you can focus on yours. Get in touch
                  to find out how I can help.My business is more
                  than just a job. Each time I take on a new project, 
                  I make sure it aligns with my core set of values so
                  I know I can deliver great results. My curiosity makes
                  me love learning, and added with my perfectionism,
                  I am able to come up with quality work.</p>
            </div>
         </div>

         <div data-aos="fade-right" className="about-column">
            <div className='about-img'>
               <img className="A-img" src={img777} alt="about us" />
            </div>
         </div>
      </div>
        </div>
    </div>
  )
}

export default AboutR
