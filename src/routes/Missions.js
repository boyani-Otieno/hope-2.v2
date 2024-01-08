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


function Missions() {
  return (
    <div>
        <h1>Missions Ministry</h1>
        <p>     
        The missionary task is making disciples and planting 
        churches among all the unreached peoples and places of 
        the world. The church is at the center of the Great Commission. 
        Church planting is simply what missionaries do as they faithfully proclaim the gospel and make disciples.
        “All authority in heaven and on earth has been given to me, 
        Therefore, go and make disciples of all nations, baptising them 
        in the name of the Father, and of the Son and of the Holy Spirit, 
        and teaching them to obey everything I have commanded you. And 
        surely I am with you always to the very end of the age.”
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

export default Missions