import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import M1 from './images/IMG6.jpg'
import M2 from './images/IMG7.jpg'
import M3 from './images/IMG18.jpg'
import M4 from './images/IMG9.jpg'
import M5 from './images/IMG10.jpg'
import M6 from './images/IMG12.jpg'
import M7 from './images/M7.jpg'
import M8 from './images/M8.jpg'
import M13 from './images/M13.jpg'
import M14 from './images/M14.jpg'
import m1 from './images/m1.jpg'
import m2 from './images/M8.jpg'
import m5 from './images/m5.jpg'
import m6 from './images/m6.jpg'
import m7 from './images/m7.jpg'

const images = [M1, M2, M3, M4, M5, M6, M7, M8, M13, M14, m1, m2, m5, m6, m7];

function Images(){
    return(
        <div>
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

export default Images