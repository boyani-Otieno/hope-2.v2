import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import c1 from './all-images/children/c1.jpeg'
import c2 from './all-images/children/c2.jpeg'
import c3 from './all-images/children/c3.jpeg'
import c4 from './all-images/children/c4.jpeg'
import c5 from './all-images/children/c5.jpeg'
import c6 from './all-images/children/c6.jpeg'
import c7 from './all-images/children/c7.jpeg'
import c8 from './all-images/children/c8.jpeg'
import c9 from './all-images/children/c9.jpeg'
import c10 from './all-images/children/c10.jpeg'
import c11 from './all-images/children/c11.jpeg'
import c12 from './all-images/children/c12.jpeg'
import './all.css'

const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12]; // Use actual image variables


function Schools() {
  return (
    <div>
        <h1>Our Schools</h1>
        <p>     
        The purpose of the School of Ministry is to educate, 
        equip and empower disciples of Jesus to go out and reach 
        the world for Jesus wherever God may call them. Our goal is 
        to provide a relational, intentional, and biblical process 
        to help grow you as a person, a leader, and a disciple of Christ.
        </p>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='20px'>
            {images.map((image, i) => (
              <img key={i} src={image} style={{ width: '100%', display: 'block' }} alt='' />
            ))}
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default Schools