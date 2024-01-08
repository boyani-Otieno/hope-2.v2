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


function Men() {
  return (
    <div>
        <h1>Men Ministry</h1>
        <p>     
        Transforming Men for God’s purposes. It is said of King David 
        in the book of Acts that he “served the purpose of God in his own 
        generation” (Acts 13:36). David was chosen as a young man.
        Raising godly Men in order for them to raise the family profile by strengthening the family 
        structure through training in biblical principles, mentoring, 
        counseling and fellowship, to create effective godly families grounded in the word of God.
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

export default Men