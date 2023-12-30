import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const lamuImages = [
    "https://picsum.photos/3000/2000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/2000/1500",
    "https://picsum.photos/1000/1500",
    "https://picsum.photos/1500/2000",
]

export default function Lamu() {
  return (
    <>
    <div className='lamu'>
     {/* <h1>Lamu House</h1>
     <p>
        Lamu House was built in 2006 with the aim of supporting Churches in the Coastal regions.
     </p> */}

        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
             <Masonry>
               {lamuImages.map((image, i) => (
                <img 
                key= {i}
                src= {image}
                style={{width: "100%", display: 'block'}}
                alt=''
                />
               ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
    </>
  )
}
