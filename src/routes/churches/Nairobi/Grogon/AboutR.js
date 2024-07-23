import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './grogon.css'
import img77 from "../../../../assets/pst maga.jpeg"
import img777 from "../../../../assets/beth.jpeg"
import ProgramsR from './ProgramsR'
import M1 from './images/32.jpg'
import M2 from './images/39.jpg'
import M3 from './images/29.jpg'
import M4 from './images/16.jpg'
import M5 from './images/27.jpg'
import M6 from './images/26.jpg'
import M7 from './images/25.jpg'
import M8 from './images/24.jpg'
import M9 from './images/23.jpg'
import M10 from './images/22.jpg'
import M11 from './images/21.jpg'
import M12 from './images/1.jpg'
import M13 from './images/38.jpg'


const images = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13];
function AboutR() {
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3>About Us</h3>
      <p>Tumaini Grogon was founded by Pst Jackton
        and Bishop Fred Ogutu. The church originated from 
        Tumaini Kibera with Pst Jackton from Tumaini Kibera and 
        Bishop form Tumaini Gitwamba"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
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
        <p>Our church has a few programs that it runs.
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div>
           <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
           <Masonry gutter='20px'>
            {images.map((image, i) => (
              <img key={i} src={image} style={{ width: '100%', display: 'block' }} alt='' />
            ))}
           </Masonry>
        </ResponsiveMasonry>
        </div>
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
                  <h4>Pst Magalasia</h4>
                  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."
                 </p>
            </div>
         </div>

         <div data-aos="fade-left" className="about-column">
            <div className='about-content'>
               <h4>Assistant Pst Beth</h4>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum."                  
                </p>
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
