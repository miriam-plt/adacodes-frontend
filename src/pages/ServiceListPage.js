import { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";


function ServiceListPage() {
    const [services, setServices] = useState([]); 
    const [selectQuery, setSelectQuery] = useState("");
   
    const getAllServices = () => { 
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/services`)
        .then((response) => setServices(response.data))
        .catch((error) => console.log(error));
    };
   
    useEffect(() => { 
      getAllServices();
    }, [] );

    const handleChange = event => {
        setSelectQuery(event.target.value)
    }

    const filteredServices = services.filter(services => {
        if (selectQuery === "all"){ return services.isApproved === true}
        if (selectQuery === "events"){ return services.category.includes("events") && services.isApproved === true}
        if (selectQuery === "groups"){ return services.category.includes("groups") && services.isApproved === true}
        if (selectQuery === "learning"){ return services.category.includes("learning") && services.isApproved === true}
        if (selectQuery === "support"){ return services.category.includes("support") && services.isApproved === true}
        if (selectQuery === "jobs"){ return services.category.includes("jobs") && services.isApproved === true}
        if (selectQuery === "others"){ return services.category.includes("others") && services.isApproved === true}
        if (selectQuery === "pending"){ return services.isApproved === false}
        else {return services.isApproved === true}
    })
   
    if(services.length === 0){ 
      return <p>Loading...</p>
    }
    
    
    return ( 
      <div className="ServiceListPage">
        <div>            
            <button className="allServices-btn" value="all" onClick={handleChange} >All Services</button>
            <button className="events-btn" value="events" onClick={handleChange} >Events</button>
            <button className="groups-btn" value="groups" onClick={handleChange} >Groups</button>
            <button className="learning-btn" value="learning" onClick={handleChange} >Learning</button>
            <button className="support-btn" value="support" onClick={handleChange}>Support</button>
            <button className="jobs-btn" value="jobs" onClick={handleChange} >Jobs</button>
            <button className="others-btn" value="others" onClick={handleChange}>Others</button>
            <button className="pending-btn" value="pending" onClick={handleChange}>Pending</button>
        </div>


          {filteredServices.map((service) => {
                return (
              <ServiceCard key={service._id} _id={service._id} name={service.name} description={service.description} />
            )}
          )}     
         
      </div>
    );
  }
   
  export default ServiceListPage;