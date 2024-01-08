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
import M9 from './images/M9.jpg'
import M10 from './images/M10.jpg'
//import M11 from './images/M11.jpg'
import M12 from './images/M12.jpg'
import M13 from './images/M13.jpg'
import M14 from './images/M14.jpg'

const images = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M12, M13, M14];

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