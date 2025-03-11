import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Review = () => {
  const reviewdata = [
    {
      id: 1,
      name: 'John Doe',
      img: "images/pic1.png",
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis enim, ac dictum arcu. Integer euismod lectus non justo dictum, vel pulvinar mi fermentum. Donec quis arcu vel arcu consectetur egestas vitae at turpis.',
    },
    {
      id: 2,
      name: 'John Doe',
      img: "images/pic2.png",
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis enim, ac dictum arcu. Integer euismod lectus non justo dictum, vel pulvinar mi fermentum. Donec quis arcu vel arcu consectetur egestas vitae at turpis.',
    },
    {
      id: 3,
      name: 'John Doe',
      img: "images/pic3.png",
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis enim, ac dictum arcu. Integer euismod lectus non justo dictum, vel pulvinar mi fermentum. Donec quis arcu vel arcu consectetur egestas vitae at turpis.',
    },
    {
      id: 4,
      name: 'John Doe',
      img: "images/pic4.png",
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sagittis enim, ac dictum arcu. Integer euismod lectus non justo dictum, vel pulvinar mi fermentum. Donec quis arcu vel arcu consectetur egestas vitae at turpis.',
    }
  ];

  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
        </h1>

        <Swiper
          modules={[Autoplay]} // Add Autoplay module here
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500, // Auto-slide delay in milliseconds (2.5 seconds)
            disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="review-slider"
        >
          {reviewdata.map((reviews) => (
            <SwiperSlide key={reviews.id}>
              <div className="box">
                <img src={reviews.img} alt="" />
                <h3>{reviews.name}</h3>
                <p>{reviews.review}</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Review;