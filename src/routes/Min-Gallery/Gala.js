import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import c1 from '../all-images/youth/1.jpeg'
import c2 from '../all-images/youth/2.jpeg'
import c3 from '../all-images/youth/3.jpeg'
import c4 from '../all-images/youth/4.jpeg'
import c5 from '../all-images/youth/5.jpeg'
import c6 from '../all-images/youth/6.jpeg'
import c7 from '../all-images/youth/7.jpeg'
import c8 from '../all-images/youth/8.jpeg'
import c9 from '../all-images/youth/9.jpeg'
import c10 from '../all-images/youth/10.jpeg'
import c11 from '../all-images/youth/11.jpeg'
import c12 from '../all-images/youth/12.jpeg'
import c13 from '../all-images/youth/1.jpeg'
import c14 from '../all-images/youth/2.jpeg'
import c15 from '../all-images/youth/3.jpeg'
import c16 from '../all-images/youth/4.jpeg'
import c17 from '../all-images/youth/5.jpeg'
import c18 from '../all-images/youth/6.jpeg'
import c19 from '../all-images/youth/7.jpeg'
import c20 from '../all-images/youth/8.jpeg'
import c21 from '../all-images/youth/9.jpeg'
import c22 from '../all-images/youth/10.jpeg'
import c23 from '../all-images/youth/11.jpeg'
import c24 from '../all-images/youth/12.jpeg'
import c25 from '../all-images/youth/1.jpeg'
import c26 from '../all-images/youth/2.jpeg'
import c27 from '../all-images/youth/3.jpeg'
import c28 from '../all-images/youth/4.jpeg'
import c29 from '../all-images/youth/5.jpeg'
import c30 from '../all-images/youth/6.jpeg'
import c31 from '../all-images/youth/7.jpeg'
import c32 from '../all-images/youth/8.jpeg'
import c33 from '../all-images/youth/9.jpeg'
import c34 from '../all-images/youth/10.jpeg'
import c35 from '../all-images/youth/11.jpeg'
import c36 from '../all-images/youth/12.jpeg'
import c37 from '../all-images/youth/6.jpeg'
import c38 from '../all-images/youth/7.jpeg'
import c39 from '../all-images/youth/8.jpeg'
import c40 from '../all-images/youth/9.jpeg'
import c41 from '../all-images/youth/10.jpeg'
import c42 from '../all-images/youth/11.jpeg'
import c43 from '../all-images/youth/12.jpeg'
import c44 from '../all-images/youth/7.jpeg'
import c45 from '../all-images/youth/8.jpeg'
import c46 from '../all-images/youth/9.jpeg'
import c47 from '../all-images/youth/10.jpeg'
import c48 from '../all-images/youth/11.jpeg'
import c49 from '../all-images/youth/12.jpeg'

const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14,
c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47,
c48, c49]; // Use actual image variables

function Gala() {
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
  );
}

export default Gala;