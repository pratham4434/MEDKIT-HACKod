import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <Container>
      <h1 className="header-testimonial">
        Here's what people have to say about us 🧷
      </h1>

      <section className="testimonial-section">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          // spaceBetween={"50"}
          // loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="testimonial">
              <div class="testimonial-body">
                <p>
                  The Healthcare Success team has proven to be extremely
                  effective in increasing Urgent Care patient volume. Their
                  expertise in search engine optimization, social media, and
                  online advertising continue to generate a high volume of new
                  patient referrals to our centers. I would highly recommend
                  them.
                </p>
                <i class="fas fa-quote-right"></i>
              </div>
              <div class="testimonial-footer">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                />
                <h3>lorem Buoy</h3>
                <h4>Example.com</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="testimonial">
              <div class="testimonial-body">
                <p>
                  The Healthcare Success team has proven to be extremely
                  effective in increasing Urgent Care patient volume. Their
                  expertise in search engine optimization, social media, and
                  online advertising continue to generate a high volume of new
                  patient referrals to our centers. I would highly recommend
                  them.
                </p>
                <i class="fas fa-quote-right"></i>
              </div>
              <div class="testimonial-footer">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                />
                <h3>Lorem Buoy</h3>
                <h4>Example.com</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="testimonial">
              <div class="testimonial-body">
                <p>
                  The Healthcare Success team has proven to be extremely
                  effective in increasing Urgent Care patient volume. Their
                  expertise in search engine optimization, social media, and
                  online advertising continue to generate a high volume of new
                  patient referrals to our centers. I would highly recommend
                  them.
                </p>
                <i class="fas fa-quote-right"></i>
              </div>
              <div class="testimonial-footer">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                />
                <h3>lorem Buoy</h3>
                <h4>Example.com</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(#dcdcdc, #dbf0f0);
  .header-testimonial {
    text-align: center;
    padding-bottom: 2%;
    color: #1976d2;
  }
  .testimonial-section {
    padding-top: 1%;
    padding-bottom: 5%;

    div {
      div {
        .swiper-slide {
          width: 20%;
        }
      }
    }
  }
`;

export default Testimonials;
