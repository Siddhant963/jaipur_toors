import Busservicepage from "@/Components/Busservicepage";
import serviceData from "../../../data/all_services.json";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const page = async ({params}) => {
    const {service} = await params;
    const data = serviceData[service];
   
  return (
    <div>
     <Navbar/>
      <Busservicepage data={data} />
      <Footer/>
    </div>
  )
}

export default page
