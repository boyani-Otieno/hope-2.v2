import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import c1 from './all-images/youth/1.jpeg'
import c2 from './all-images/youth/2.jpeg'
import c3 from './all-images/youth/3.jpeg'
import c4 from './all-images/youth/4.jpeg'
import c5 from './all-images/youth/5.jpeg'
import c6 from './all-images/youth/6.jpeg'
import c7 from './all-images/youth/7.jpeg'
import c8 from './all-images/youth/8.jpeg'
import c9 from './all-images/youth/9.jpeg'
import c10 from './all-images/youth/10.jpeg'
import c11 from './all-images/youth/11.jpeg'
import c12 from './all-images/youth/12.jpeg'
import c13 from './all-images/youth/13.jpeg'
import c14 from './all-images/youth/14.jpeg'
import c15 from './all-images/youth/15.jpg'
import c16 from './all-images/youth/16.jpg'
import c17 from './all-images/youth/17.jpg'
import c18 from './all-images/youth/18.jpg'
import c19 from './all-images/youth/19.jpg'
import c20 from './all-images/youth/20.jpg'
import c21 from './all-images/youth/21.jpg'
import c22 from './all-images/youth/22.jpg'
import c23 from './all-images/youth/23.jpg'
import c24 from './all-images/youth/24.jpg'
import c25 from './all-images/youth/25.jpg'
import c26 from './all-images/youth/26.jpg'
import c27 from './all-images/youth/27.jpg'
import c28 from './all-images/youth/28.jpg'
import c29 from './all-images/youth/29.jpg'
import c30 from './all-images/youth/20.jpg'
import c31 from './all-images/youth/31.jpg'
import c32 from './all-images/youth/32.jpg'
import c33 from './all-images/youth/33.jpg'
import c34 from './all-images/youth/34.jpg'
import c35 from './all-images/youth/35.jpg'
import c36 from './all-images/youth/36.jpg'
import c37 from './all-images/youth/37.jpg'
import c38 from './all-images/youth/38.jpg'
import c39 from './all-images/youth/39.jpg'
import c40 from './all-images/youth/40.jpg'
import c41 from './all-images/youth/41.jpg'
import c42 from './all-images/youth/42.jpg'
import c43 from './all-images/youth/43.jpg'
import c44 from './all-images/youth/44.jpg'
import c45 from './all-images/youth/45.jpg'
import c46 from './all-images/youth/46.jpg'
import c47 from './all-images/youth/47.jpg'
import c48 from './all-images/youth/48.jpg'
import c49 from './all-images/youth/49.jpg'
import './all.css'

const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14,
  c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
  c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47,
  c48, c49]; // Use actual image variables


function Youth() {
  return (
    <div>
        <h1>Youth Ministry</h1>
        <p>     
         A Community of youthful Believers Impacting
         the World with the Gospel of our Lord Jesus 
         Christ through the transforming power of the Holy Spirit.
         This is a dynamic ministry that also caters for the young people 
         between the ages of 13-18 years. Our vision is to see the teens 
         of our church transformed by Christ to impact the teens for Christ.
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

export default Youth