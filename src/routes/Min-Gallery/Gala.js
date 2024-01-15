import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import c1 from '../../routes/all-images/all-gala/1.jpg'
import c2 from '../../routes/all-images/all-gala/2.jpg'
import c3 from '../../routes/all-images/all-gala/3.gif'
import c4 from '../../routes/all-images/all-gala/4.jpg'
import c5 from '../../routes/all-images/all-gala/5.jpg'
import c6 from '../../routes/all-images/all-gala/6.jpg'
import c7 from '../../routes/all-images/all-gala/7.jpg'
import c8 from '../../routes/all-images/all-gala/8.jpg'
import c9 from '../../routes/all-images/all-gala/9.jpg'
import c10 from '../../routes/all-images/all-gala/10.jpg'
import c11 from '../../routes/all-images/all-gala/11.jpg'
import c12 from '../../routes/all-images/all-gala/12.jpg'
import c13 from '../../routes/all-images/all-gala/13.jpg'
import c14 from '../../routes/all-images/all-gala/14.jpg'
import c15 from '../../routes/all-images/all-gala/15.jpg'
import c16 from '../../routes/all-images/all-gala/16.jpg'
import c17 from '../../routes/all-images/all-gala/17.jpg'
import c18 from '../../routes/all-images/all-gala/18.jpg'
import c19 from '../../routes/all-images/all-gala/19.jpg'
import c20 from '../../routes/all-images/all-gala/20.jpg'
import c21 from '../../routes/all-images/all-gala/21.jpg'
import c22 from '../../routes/all-images/all-gala/22.jpg'
import c23 from '../../routes/all-images/all-gala/23.jpg'
import c24 from '../../routes/all-images/all-gala/24.jpg'
import c25 from '../../routes/all-images/all-gala/25.jpg'
import c26 from '../../routes/all-images/all-gala/26.jpg'
import c27 from '../../routes/all-images/all-gala/27.jpg'
import c28 from '../../routes/all-images/all-gala/28.jpg'
import c29 from '../../routes/all-images/all-gala/29.jpg'
import c30 from '../../routes/all-images/all-gala/30.jpg'
import c31 from '../../routes/all-images/all-gala/31.jpg'
import c32 from '../../routes/all-images/all-gala/32.jpg'
import c33 from '../../routes/all-images/all-gala/33.jpg'
import c34 from '../../routes/all-images/all-gala/34.jpg'
import c35 from '../../routes/all-images/all-gala/35.jpg'
import c36 from '../../routes/all-images/all-gala/36.jpg'
import c37 from '../../routes/all-images/all-gala/37.jpg'
import c38 from '../../routes/all-images/all-gala/38.jpg'
import c39 from '../../routes/all-images/all-gala/39.jpg'
import c40 from '../../routes/all-images/all-gala/40.jpg'
import c41 from '../../routes/all-images/all-gala/44.jpg'
import c42 from '../../routes/all-images/all-gala/45.jpg'
import c43 from '../../routes/all-images/all-gala/46.jpg'
import c44 from '../../routes/all-images/all-gala/47.jpg'
import c45 from '../../routes/all-images/all-gala/48.jpg'
import c46 from '../../routes/all-images/all-gala/49.jpg'
import c47 from '../../routes/all-images/all-gala/50.jpg'
import c48 from '../../routes/all-images/all-gala/51.jpg'
import c49 from '../../routes/all-images/all-gala/51.jpg'

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