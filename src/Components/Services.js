import React from 'react'

const Services = () => {
     const servicesdata = [{
          id: 1,
          iclass:"fas fa-hotel",
          title: "affordable hotels",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio."
     },
     {
          id: 2,
          iclass:"fas fa-utensils",
          title: "food and drinks",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio."
     },
     {
          id: 3,
          iclass:"fas fa-bullhorn",
          title: "safty guide",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio."
     },
     {
          id: 4,
          iclass:"fas fa-globe-asia",
          title: "around the world",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio."
     },
     {
          id: 5,
          iclass:"fas fa-plane",
          title: "fastest travel",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio."
     },
     {
          id: 6,
          iclass:"fas fa-hiking",
          title: "adventures",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio."
     }]
  return (
    <>
    <section className="services" id="services">

<h1 className="heading">
  <span>s</span>
  <span>e</span>
  <span>r</span>
  <span>v</span>
  <span>i</span>
  <span>c</span>
  <span>e</span>
  <span>s</span>
</h1>

<div className="box-container">
     {servicesdata.map((service)=>{
          return(
               <div className="box" key={service.id}>
      <i className={service.iclass}></i>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
          )
     })}
</div>
<div className="morediv">

<a href="#" className="more">Click for MORE.......</a>
</div>
</section>
      
    </>
  )
}

export default Services
