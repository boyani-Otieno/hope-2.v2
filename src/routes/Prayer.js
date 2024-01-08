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


function Prayer() {
  return (
    <div>
        <h1>How can we Pray with you?</h1>
        <p>     
          Prayer gives us a means of showing compassion toward 
          other believers and the world around us as we take them 
          and their needs to a God who cares and can help them far 
          more than we could ever hope to do ourselves.
          Working together with the Music Department, the objective 
          of a music ministry is to accompany, facilitate, and enhance 
          the singing of the people of God. In this sense, everyone in 
          the church is part of the choir. Music is made first of all 
          to the Lord and only secondarily to each other. Music should 
          communicate and express a sense of awe and wonder in the presence 
          of God; it should lead our thoughts toward God rather than toward ourselves.
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

export default Prayer