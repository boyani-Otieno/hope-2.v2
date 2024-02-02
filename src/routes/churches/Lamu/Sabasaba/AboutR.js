import React from 'react'
import './sabasaba.css'
import img77 from "../../../../assets/Maurice.jpeg"
import ProgramsR from './ProgramsR'

function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>Tumaini Sabasaba was started by 
         Pst Mtete who is currently retired. Pst Morris is the current lead 
         pastor. quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."</p>
     </div>
     <div>
        <h4>Our Church</h4>
        <p>Our church consists of 60 congregants 40 being sunday school and 20
         adults. Our church sits on a 10 acres land owned by the church.
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
                  <h4>Pst Maurice Juma (Senior Pastor)</h4>
                  <p>Pastor Maurice serves as the leader of the 
                     Lamu Churches region, playing a pivotal role 
                     in the establishment of Tumaini Roka, Tumaini 
                     Kibokoni, and Tumaini Manda. His dedication to 
                     expanding the reach of the church has been instrumental 
                     in the foundation of these congregations. Personally, 
                     Pastor Maurice is committed to family life, being happily 
                     married to one wife and blessed with four children. His 
                     leadership extends beyond the church, fostering a sense of 
                     community and spiritual growth in the Lamu region.
                    </p>
            </div>
         </div>
      </div>
        </div>
    </div>
  )
}

export default AboutR
