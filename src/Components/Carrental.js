"use client"
import Image from 'next/image';
import { useState } from 'react';
import  "bootstrap/dist/css/bootstrap.min.css"
import Aboutcr from '@/Components/Aboutvehiclesandsidemenu';
import WhyChooseAndFAQ from './WhyChooseAndFAQ';



export default function Home(props) {
  const [carData, setCarData] = useState(props.data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const prevCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
  };

  return (
    <>

    <div className='d-flex flex-column justify-content-end' style={{ backgroundImage: `url("https://www.progressivetourtravels.com/images/car-detail-page-banner4.jpg")`, height:"40vh"}}>
    <div style={{height:"15vh",width:"40vw"}} className='d-flex flex-row justify-content-between' >
        <div style={{height:"5vh", width:"5vw"}}></div>
        <div className='bg-dark d-flex flex-column justify-content-center' style={{width:"200px", height:"200px", borderRadius:"100%"}}>
                    <h1 className='text-light fw-bolder text-center'>Jaipur<br/>Tour<br/>Point</h1>

        </div>
    </div>
    <div className='p-5 w-100 '>
        <h1 className='text-light fw-bolder ' style={{fontSize:"50px"}}> Our Vehicles</h1>
    </div>
        
    </div>

    <div className="container mx-auto">   
    <div className="p-4 md:p-10 bg-white min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 packageheadingbg p-3 text-center">Cab in Jaipur Rajasthan</h1>

      {/* Introduction */}
      <p className="text-gray-600 fs-5 mb-5 ">
      To make travel convenient and safe, avail car rental services to avoid hassles of transportation in and around the city.
        We offer a clean, well-maintained, and comfortable fleet of car rentals that ensures a safe and hassle-free journey.
        Book online cab rental in Jaipur for outstation tours with family, friends, or colleagues, and get the best deals on it.
        Choose from our section of Car Rental in Rajasthan for local and outstation tours to book the one for your comfortable journey through the city.

        Our services are tailored to meet the diverse travel needs of tourists, business travelers, and locals. Whether you are planning a sightseeing tour, an outstation trip, or need a car for corporate travel, our fleet is equipped to provide unmatched comfort and convenience. We believe in delivering top-notch service with transparency and affordability. Our drivers are experienced, courteous, and well-versed with the routes, ensuring timely pickups and drop-offs.

        From budget-friendly sedans to luxury SUVs and spacious tempo travelers, we have vehicles that fit every requirement. Experience the freedom to travel at your own pace and explore Rajasthan’s heritage, culture, and beauty without any stress. Our seamless booking process, customer support, and well-maintained vehicles make us the preferred choice for car rentals in Jaipur and across Rajasthan.

        Embrace the joy of traveling with our car rental services that prioritize your comfort, safety, and satisfaction. Our vehicles undergo regular maintenance checks and hygiene protocols to ensure a safe and pleasant journey. Whether you're visiting iconic landmarks, heading to a destination wedding, or on a business trip, we are committed to making your travel smooth and memorable.

        With transparent pricing, no hidden charges, and flexible rental options, you can plan your trip without any worries. Book in advance or on short notice, our team is ready to assist you 24/7. Choose us for a reliable, affordable, and enjoyable travel experience in Rajasthan. Discover the royal charm of Jaipur, the serene lakes of Udaipur, the golden sands of Jaisalmer, and more with our trusted car rental services.
      </p>

      {/* Cards and Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5">
        {/* Left Cards Grid */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {carData.map((car, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <Image src={car.img} alt={car.name} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold -mt-12 relative z-10">
                {car.name} - {car.capacity} Seater
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Card - Carousel */}
        <div className="border rounded-lg shadow-md p-4 relative">
          <div className="relative w-full h-48 mb-4">
            <Image src={carData[currentIndex].img} alt={carData[currentIndex].name} fill className="object-cover rounded-md" />
          </div>
          <h2 className="text-xl font-semibold mb-2">{carData[currentIndex].name}</h2>
          <div className="text-gray-700 space-y-1">
            <p><strong>Seats:</strong> {carData[currentIndex].capacity}</p>
            {/* <p><strong>Category:</strong> XUV</p> */}
            {/* <p><strong>8 Hr / 80 Km:</strong> </p> */}
            {/* <p><strong>Extra hour:</strong> INR 300</p>
            <p><strong>Extra Km:</strong> INR 16</p>
            <p><strong>Outstation Km:</strong> INR 16</p> */}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Note*</strong>: Parking and Toll Charges are excluded for Taxi Service in Jaipur.
          </p>
          {/* Carousel Buttons */}
          <div className="flex justify-between mt-4">
            <button onClick={prevCar} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Previous</button>
            <button onClick={nextCar} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
 
    <Aboutcr/>
    <WhyChooseAndFAQ/>

    
    </>
  );
}