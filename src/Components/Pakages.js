import React from 'react'
import "@fortawesome/fontawesome-free"
const Pakages = () => {
  const pakedata = [
     {
       id:1,
       img:"/images/Pushkar/img3.jpeg" ,
       name:"5 Days Tour package",
       desc: "Jaipur , Ajmer , Pushkar , Chittorgarh ,Udaipur , Mount Abu ",
       price: 120.00,
       discount: 90.00

     },
     {
       id:2,
       img:"/images/Jodhpur/img1.jpeg" ,
       name:"5 Days Tour package II",
       desc: "Ajmer , Pushkar, Jodhpur, Jaisalmer, Udaipur, Jaipur ",
       price: 120.00,
       discount: 90.00

     },
     {    id:3,
          img:"/images/Chittorgarh/img2.jpeg" ,
          name:"7 Days Tour package",
          desc: "Ajmer, Pushkar, jodhpur, Jaisalmer, Udaipur, Mount abu, Chittorgarh , jaipur ",
          price: 120.00,
          discount: 90.00
     },
     {
          id:4,
          img:"/images/Ranthambore/img2.jpeg" ,
          name:"9 Days Tour package",
          desc: "jaipur, Bikaner, jodhpur, jaisalmer, Udaipur, Mount abu, Chittorgarh, Ajmer ,Pushkar, Ranthambore ",
          price: 120.00,
          discount: 90.00
   
        },
        {
          id:5,
          img:"/images/hawa_mehel/img1.jpeg" ,
          name:"2 Days Tour jaipur I (spaical)",
          desc: "jaipur, birla mandir , Albert Hall Museum,Hawa Mahal, Jantar Mantar, City Palace, Khazana Mahal ,Jal Mahal"
   
        },
        {
          id:6,
          img:"/images/Nahargarh_fort/img1.jpeg" ,
          name:"2 Days Tour jaipur II (spaical)",
          desc: "Nahargarh Fort, Jaigarh Fort, Amber Fort , Panna Meena Ka Kund, Chulgiri ,Gulab Bagh"
      
   
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
            <h3>  {data.name} </h3>
            <p><i className="fas fa-map-marker-alt"></i> {data.desc}</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          
            <a href={`/packages/${data.id}`}  className="btn">Know More..</a>
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
