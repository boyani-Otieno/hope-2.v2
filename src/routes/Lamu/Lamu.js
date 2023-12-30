import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const lamuImages = [
    "https://picsum.photos/3000/2000",
    "https://picsum.photos/2000/1500",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/1500/1000",
    "https://picsum.photos/1000/1500",
    "https://picsum.photos/1500/2000",
    "https://photos.google.com/photo/AF1QipMCpa_oXMqUWC-iYrqErINphGEIiGXBSLPtT76h/1500/2000"
]

export default function Lamu() {
  return (
    <>
    <div className='lamu' style={{padding: '10px'}}>
     <h1>Lamu House</h1>
       <p>
        Lamu House was built in 2006 with the aim of supporting Churches in the Coastal regions.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
       </p>

        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
             <Masonry gutter='20px'>
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
