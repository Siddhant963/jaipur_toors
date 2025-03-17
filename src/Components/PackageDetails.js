'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const PackagePlacesCarousel = ({ packageData }) => {
  const [selectedPlace, setSelectedPlace] = useState(packageData.places[0]);

  return (
    <div className="w-full min-h-screen p-6 bg-white shadow-lg flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-6">{packageData.packageName}</h2>
      
      {/* Swiper Carousel */}
      <div className="w-full h-[500px]">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-6/12 h-full"
        >
          {selectedPlace.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Places List */}
      <h1>places we cover in this tour </h1>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {packageData.places.map((place) => (
          <button
            key={place.id}
            className={`px-6 py-3 text-xl font-semibold rounded-lg transition duration-300 shadow-md ${
              selectedPlace.id === place.id ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-900'
            }`}
            onClick={() => setSelectedPlace(place)}
          >
            {place.title}
          </button>
        ))}
      </div>

      {/* Place Details */}
      <div className="mt-8 max-w-4xl p-6 border-t text-center">
        <h3 className="text-2xl font-bold">{selectedPlace.title}</h3>
        <p className="mt-4 text-lg text-gray-700 whitespace-pre-line leading-relaxed">{selectedPlace.description}</p>
      </div>
    </div>
  );
};

export default PackagePlacesCarousel;
