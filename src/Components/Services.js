import React from 'react'

const Services = () => {
     const servicesdata = [{
          id: 1,
          imgg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprYvpyNgXCjOXXNYtCGgIdtAANKWlGe2lu7XC_O0hKfQgcEXFgmQTO6yqYeimEFQ8AOc&usqp=CAU",
          iclass:"fas fa-hotel",
          title: "Bus services",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio.",
          link: "fecilitys/bus"
     },
     {
          id: 2,
          imgg:"https://www.vedantawakeup.com/wp-content/uploads/2022/04/rajputana-cabs-banner.jpg",
          iclass:"fas fa-utensils",
          title: "Cab Service",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio.",
          link: "fecilitys/cars"
     },
     {
          id: 3,
          imgg:"https://www.fairmont.com/assets/0/104/231/402/404/412/f0016b01-9418-4a16-97ee-937bb05f9210.jpg",
          iclass:"fas fa-bullhorn",
          title: "Hotel Booking",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, lectus id dapibus fermentum, turpis sapien dignissim lectus, sed pulvinar metus nunc sed odio.",
          link: "fecilitys/hotel"
     },
     
     ]
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
      {/* <i className={service.iclass}></i> */}
      <img src={service.imgg} alt={service.title} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a className="px-6 py-3 service-btn bg-yellow text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition" href={service.link}>
  Click Me

</a>

    </div>
          )
     })}
</div>
<div className="morediv">


</div>
</section>
      
    </>
  )
}

export default Services