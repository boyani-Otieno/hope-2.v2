import React from 'react'
import './poromoko.css'
import img77 from "./poromokoImages/18.jpeg"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
//import ProgramsR from './ProgramsR'
import one from './poromokoImages/1.jpeg'
import two from './poromokoImages/2.jpeg'
import five from './poromokoImages/5.jpeg'
import four from './poromokoImages/4.jpeg'
import six from './poromokoImages/6.jpeg'
import seven from './poromokoImages/7.jpeg'

function AboutR() {
   const images = [one, two, five, four, seven, six];
  return (
    <div>
     <div className='abt' id='aboutR'>
     <h3 className= "poromoko-about">About Us</h3>
      <p>Tumaini Poromoko Church originated as a home fellowship initiated by
         two founding members, Daniel Mwingirwa Nkubitu and his wife Monicah 
         Ann Kioi, the year 2017. The church began with humble beginnings, 
         meeting on Sundays at Daniel Mwingirwa's residence. Over time, the 
         fellowship expanded as more members, including John Kitheka and his 
         family, Margaret Ciamiti, and Laban Musa, joined. In a significant 
         gesture of support, Daniel Mwingirwa and Monicah Kioi generously donated 
         a plot measuring 50 x 100 to establish a permanent church home. In April 
         2022, the construction of the church structure commenced, resulting in the 
         establishment of a semi-permanent facility capable of accommodating up to 50 
         members. At this stage, the church's modest furnishings included benches and 
         two plastic chairs. The collective efforts of the church community played a 
         pivotal role in enhancing the worship space. Through contributions, the church 
         was able to procure essential items such as 20 additional plastic chairs, a 
         plastic table, an all-in-one speaker system, and a pulpit stand. These 
         acquisitions aimed to facilitate a more organized and comfortable environment 
         for the congregation during church services. The journey from a home fellowship 
         to the establishment of a physical church structure reflects the dedication and 
         collaborative spirit of Tumaini Poromoko Church.
</p>
     </div>
     <div>
        <h4>Our Church</h4>
        <p>
        Our church is located in the Poromoko village of Mkunumbi 
        Ward, Mpeketoni Sub-county, within the Lamu West constituency 
        of Lamu County. Positioned 8km from Mavuno market en route to 
        Lamu, it stands just 1km away from Poromoko Primary School. 
        Our congregation predominantly consists of residents from Poromoko, 
        Nyatha, Mtwapa Moja, Majembeni, and Mavuno areas. Primarily engaged 
        in farming, the church community reflects the agricultural nature of 
        the region. Currently, our church boasts a membership of approximately 
        45 individuals, comprising 18 children and 27 adults. Among the adult 
        members, there are 11 men and 16 women. This diverse and close-knit 
        community actively participates in various aspects of church life, 
        contributing to the spiritual and communal well-being of our congregation.
        </p>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='10px'>
            {images.map((image, i) => (
              <img key={i} src={image} style={{ width: '100%', display: 'block' }} alt='' />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {/* <div><ProgramsR /></div> */}
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
                  <h4>Pst Abed and his Wife (Senior Pastor)</h4>
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
