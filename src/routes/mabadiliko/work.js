import React from "react";
import Sharon from "./images/shaz.jpeg";
import Bilha from "../../assets/images/kilifi10.jpg";
import Ester from "../../assets/images/kilifi11.jpg";
import M1 from './images/IMG6.jpg'
import M2 from './images/IMG7.jpg'
import M3 from './images/IMG18.jpg'
import M4 from './images/IMG9.jpg'
import M5 from './images/IMG10.jpg'
import M6 from './images/IMG12.jpg'


const Work = () => {
  const workInfoData = [
    {
      image: Sharon,
      title: "Graphic Designer",
      text: "Meet Sharon a designer and owns her own brand, Shaz Brands",
    },
    {
      image: Bilha,
      title: "Tourist Manager & Guide",
      text: "Meet Bilha, a beautiful soul who majored in Tourism Management.",
    },
    {
      image: Ester,
      title: "Gospel singer, Songwriter",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

    {
       image: M1,
       //title: "Graphic Designer",
       //text: "Meet Sharon a designer and owns her own brand, Shaz Brands",
    },
    {
       image: M2,
       //title: "Tourist Manager & Guide",
       //text: "Meet Bilha, a beautiful soul who majored in Tourism Management.",
    },
    {
       image: M3,
       //title: "Gospel singer, Songwriter",
       //text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

    {
      image: M4,
      //title: "Graphic Designer",
      //text: "Meet Sharon a designer and owns her own brand, Shaz Brands",
   },
   {
      image: M5,
      //title: "Tourist Manager & Guide",
      //text: "Meet Bilha, a beautiful soul who majored in Tourism Management.",
   },
   {
      image: M6,
      //title: "Gospel singer, Songwriter",
      //text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
