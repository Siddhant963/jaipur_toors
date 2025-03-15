
import React, { useState } from 'react';

const Carausal = () => {
  const [activeVideo, setActiveVideo] = useState("/videos/vid-1.mp4");

  const handleVideoChange = (src) => {
    setActiveVideo(src);
  };

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>discover new places with us, adventure awaits</p>
          <a href="/discover" className="btn">discover more</a>
        </div>

        <div className="controls">
          {["/videos/v1.mp4",
           "/videos/v2.mp4", 
           "/videos/v3.mp4", 
           "/videos/v4.mp4",
            "/videos/v5.mp4"].map((src, index) => (
            <span
              key={index}
              className={`vid-btn ${activeVideo === src ? 'active' : ''}`}
              onClick={() => handleVideoChange(src)}
              data-src={src}
            ></span>
          ))}
        </div>

        <div className="video-container">
          <video src={activeVideo} id="video-slider" loop autoPlay  />
        </div>
      </section>
    </>
  );
};

export default Carausal;