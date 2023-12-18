import React from "react";
import BannerBackground from "./images/green2.jpg";
import BannerImage from "./images/IMG1.jpg";
import { FiArrowRight } from "react-icons/fi";

const homeMaba = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Mabadiliko Ya Wanadada
          </h1>
          <p className="primary-text">
            This is a girl's program targeting our young girls from our churches and the community at large, ranging from 
            the age of 11-17 years. The aim is to empower them with variuos skills
            during their teenagehood so as to keep them away from early pregnancies and
            other vices that are rampant in our communities.
          </p>
          <button className="secondary-button">
           <a href="/support"> Support Us <FiArrowRight />{" "}</a>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default homeMaba;
