import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Brand = () => {
  return (
    <section className="brand-container">
      <Swiper
        modules={[Autoplay]} // Add Autoplay module
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500, // Auto-slide delay in milliseconds (2.5 seconds)
          disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="brand-slider"
      >
        <SwiperSlide>
          <img src="/images/1.jpg" alt="Brand 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/2.jpg" alt="Brand 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3.jpg" alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/4.jpg" alt="Brand 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/5.jpg" alt="Brand 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/6.jpg" alt="Brand 6" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Brand;