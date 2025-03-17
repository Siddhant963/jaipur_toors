import React from 'react'

const Gallery = () => {
  const gallerydata = [
          {
               id: 1,
               img: "/images/jaipur/img2.jpeg",
               title: "Jaipur",
               description: "Jaipur, known as the 'Pink City,' is the capital of Rajasthan and is famous for its grand palaces, forts, and vibrant markets. "
          },
          {
               id: 2,
               img: "/images/Ajmer/img2.jpeg",
               title: "Ajmer",
               description: "Ajmer is a historic city best known for the Ajmer Sharif Dargah, the tomb of Sufi saint Khwaja Moinuddin Chishti."
          },
          {
               id: 3,
               img: "/images/Pushkar/img1.jpeg",
               title: "Pushkar",
               description: "only dedicated Brahma Temple. The town hosts the grand Pushkar Camel Fair, one of the largest livestock fairs in the world."
          },
          {
               id: 4,
               img: "/images/Chittorgarh/img2.jpeg",
               title: "Chittorgarh",
               description: "the largest fort in India, symbolizing Rajput bravery and sacrifice. Built in the 7th century by the Maurya dynasty."
          },
          {
               id: 5,
               img: "/images/Udaipur/img1.jpeg",
               title: "Udaipur",
               description: "Udaipur, also called the 'City of Lakes,' is known for its breathtaking lakes, royal palaces."
          },
          {
               id: 6,
               img: "/images/mount_abu/img2.jpeg",
               title: "Mount Abu",
               description: "Mount Abu is the only hill station in Rajasthan, offering a refreshing escape from the desert heat with its lush greenery and cool climate."
          },
          {
               id: 7,
               img: "/images/Jaisalmer/img1.jpeg",
               title: "Jaisalmer",
               description: "Jaisalmer, known as the 'Golden City,' is famous for its yellow sandstone architecture and breathtaking desert scenery."
          },
          {
               id: 8,
               img: "/images/Ranthambore/img2.jpeg",
               title: "Ranthambore",
               description: "Ranthambore is one of India's most famous wildlife reserves, known for its population of Bengal tigers."
          },
          {
               id: 9,
               img: "/images/Bikaner/img1.jpeg",
               title: "Bikaner ",
               description: "Bikaner, founded in 1488 by Rao Bika, is famous for its grand Junagarh Fort, ornate palaces, and the Karni Mata Temple, home to thousands of rats.The city is known for its camel breeding farms, delicious Bikaneri Bhujia, and the annual Camel Festival"
          }
     ]
  return (
    <>
      <section className="gallery" id="gallery">

<h1 className="heading">
  <span>g</span>
  <span>a</span>
  <span>l</span>
  <span>l</span>
  <span>e</span>
  <span>r</span>
  <span>y</span>
</h1>

<div className="box-container">
  {gallerydata.map((data)=>{ 
     return(
          <div className="box" key={data.id}>
          <img src={data.img} alt=""/>
          <div className="content">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            
          </div>
        </div> 
     )
  })}
</div>
</section>
    </>
  )
}

export default Gallery
