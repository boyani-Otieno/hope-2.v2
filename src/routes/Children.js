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


function Children() {
  return (
    <div>
        <h1>Children Ministry</h1>
        <p>     
           This is the Sunday School Ministry of Tumaini Church in Grogon.
           Our Sunday School classes are organized into two groups: one for children aged 0 to 8 
           and another for those aged 9 and above. Ideally, the classes would be further
           divided into three groups, with ages 7 and 8 grouped together. However, due to 
           space constraints, we currently combine these age groups.
           Our Sunday School activities include:
        <div className="child-min">
          <ul>
            <li>Bible Teaching: Providing a solid foundation in biblical knowledge and principles.</li>
            <li>Life Skills with Teenagers and Coloring for Younger Ones: Engaging teenagers in discussions on practical 
                life skills while offering creative and age-appropriate coloring activities for the younger children.</li>
            <li>Uji (Porridge) Feeding: Ensuring that the children receive a nutritious meal, fostering their physical well-being.</li>
            <li>Sports: Promoting physical activity and teamwork through various sports activities.</li>
            <li>Visiting Parks: Creating opportunities for outdoor exploration and recreational activities.</li>
            <li>Children Visitations/Evangelism: Fostering a sense of community and spreading 
                the message of faith through visitations and evangelistic efforts.</li>
          </ul>
        </div>
           Despite the challenges in space, we are committed to providing a nurturing and engaging environment for our Sunday School Ministry. Our varied activities aim to holistically contribute to the spiritual, intellectual, and physical development of the children in our care.
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

export default Children