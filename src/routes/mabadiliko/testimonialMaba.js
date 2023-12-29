import React from "react";
import avatarIImg from "../../assets/Eloise.jpeg";
import avatarIIImg from "../../assets/James.jpg";
import avatarIIIImg from "../../assets/Maurice.jpeg";
import avatarIVImg from "../../assets/Liz.jpeg";
import avatarVImg from "../../assets/Joshua Moa.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
export default function Testimonials() {
  return (
    <>
    <div className="testimonials">
        <div className="main">
          <div className="head-p">
            <span style={{ paddingRight: "5px" }}>What are </span>
            <span style={{ color: "#9acd32" }}>they Saying</span>
          </div>
          <div className="head">TESTIMONIALS</div>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique.
                </p>
                <h6 className="review-by">- Tracy Ombogo</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, 
                </p>
                <h6 className="review-by">- Jeridah Gati</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIIIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <h6 className="review-by">- Johaness Vee</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" ">
              <div
                style={{
                  paddingRight: 20,

                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIVImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <h6 className="review-by">- Sheila Bram </h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarVImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  dicta,
                </p>
                <h6 className="review-by">- John Doe</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
