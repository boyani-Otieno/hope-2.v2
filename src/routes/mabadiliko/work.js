import React from "react";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Sharon from "./images/shaz.jpeg";
import Bilha from "./images/Bilha.jpeg";
import M1 from './images/IMG6.jpg'
import M2 from './images/IMG7.jpg'
import M3 from './images/IMG18.jpg'
import M4 from './images/IMG9.jpg'
import M5 from './images/IMG10.jpg'
import M6 from './images/IMG12.jpg'
import Ester from './images/m6.jpg'

const images = [M1, M2, M3, M4, M5, M6, M1, M2, M3, M4, M5, M6];
function Work  (){
  const workInfoData = [
    {
      image: Sharon,
      title: "Sharon Atieno",
      text: "Meet Sharon a designer and owns her own brand, Shaz Brands",
    },
    {
      image: Bilha,
      title: "Bilha Wairimu",
      text: "Meet Bilha, a beautiful soul who majored in Tourism Management.",
    },
    {
      image: Ester,
      title: "Beth Mwangi",
      text: "Meet Beth, A musician and her passion in serving God is admirable.",
    },
    {
      image: Ester,
      title: "Lilian",
      text: "Meet Beth, A musician and her passion in serving God is admirable.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Volunteer with us</p>
        <h1 className="primary-heading">Our Current Volunteers</h1>
        <p className="primary-text">
          Meet Our beautiful volunteers. Ladies who have succeeded in their
          lives and careers now mentoring our young girls.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <p>{data.title}</p>
            <p>{data.text}</p>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
           <Masonry gutter='20px'>
            {images.map((image, i) => (
              <img key={i} src={image} style={{ width: '100%', display: 'block' }} alt='' />
            ))}
           </Masonry>
        </ResponsiveMasonry>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
