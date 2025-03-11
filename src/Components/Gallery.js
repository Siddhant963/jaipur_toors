import React from 'react'

const Gallery = () => {
  const gallerydata = [
          {
               id: 1,
               img: "/images/g-1.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 2,
               img: "/images/g-2.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 3,
               img: "/images/g-3.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 4,
               img: "/images/g-4.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 5,
               img: "/images/g-5.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 6,
               img: "/images/g-6.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 7,
               img: "/images/g-7.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 8,
               img: "/images/g-8.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
               id: 9,
               img: "/images/g-9.jpg",
               title: "amazing places",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
            <a href="#" className="btn">see more</a>
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
