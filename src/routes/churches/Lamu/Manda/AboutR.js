import React from 'react'
import './manda.css'
import img77 from "../../../../assets/Enos.jpeg"
import ProgramsR from './ProgramsR'

function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>
         In 2007, Tumaini Manda was inaugurated under the leadership 
         of Evangelist Enos Moyale, Pastor Elis Abour, and Ken Omanya, 
         who served as its founding pastors. Their primary mission was to 
         impart the teachings of the gospel to the local community, 
         initiating a journey of spiritual outreach and engagement. 
         From its inception, Tumaini Manda has been dedicated to spreading 
         the message of hope and faith, contributing to the spiritual growth 
         and well-being of the community it serves.
       </p>
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
                  <h4>Pst Enos Moyale (Senior Pastor)</h4>
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
      </div>
        </div>
    </div>
  )
}

export default AboutR
