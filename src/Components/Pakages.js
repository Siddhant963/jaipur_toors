import React from 'react'
import "@fortawesome/fontawesome-free"
const Pakages = () => {
  const pakedata = [
     {
       id:1,
       img:"/images/p-1.jpg" ,
       name:"mumbai",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
       price: 120.00,
       discount: 90.00

     },
     {
       id:2,
       img:"/images/p-2.jpg" ,
       name:"hawaii",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
       price: 120.00,
       discount: 90.00

     },
     {    id:3,
          img:"/images/p-3.jpg" ,
          name:"sydney",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
          price: 120.00,
          discount: 90.00
     },
     {
          id:4,
          img:"/images/p-4.jpg" ,
          name:"paris",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
          price: 120.00,
          discount: 90.00
   
        },
        {
          id:5,
          img:"/images/p-5.jpg" ,
          name:"tokyo",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
          price: 120.00,
          discount: 90.00
   
        },
        {
          id:6,
          img:"/images/p-6.jpg" ,
          name:"eypt",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!",
          price: 120.00,
          discount: 90.00
   
        }
     
  ]
  return (
    <>
      <section className="packages" id="packages">

<h1 className="heading">
  <span>p</span>
  <span>a</span>
  <span>c</span>
  <span>k</span>
  <span>a</span>
  <span>g</span>
  <span>e</span>
  <span>s</span>
</h1>

<div className='box-container'>

  {pakedata.map((data)=>{ 
     return(
          <div className="box" key={data.id}>
          <img src={data.img} alt=""/>
          <div className="content">
            <h3> <i className="fas fa-map-marker-alt"></i> {data.name} </h3>
            <p>{data.desc}</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">{data.discount} <span>{data.price}</span> </div>
            <a href="#" className="btn">book now</a>
          </div>
        </div>  
     )
  })}
</div>

</section>

    </>
  )
}

export default Pakages
