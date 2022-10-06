import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { AuthContext } from "../context/auth.context";
import { Link } from 'react-router-dom';


function ServiceListPage() {

  const { user } = useContext(AuthContext);

  const [services, setServices] = useState([]); 
  const [selectQuery, setSelectQuery] = useState("");

  const getAllServices = () => { 
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/services`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
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
            <button className="map-btn allServices-btn" value="all" onClick={handleChange} >All Services</button>
            <button className="map-btn events-btn" value="events" onClick={handleChange} >Events</button>
            <button className="map-btn groups-btn" value="groups" onClick={handleChange} >Groups</button>
            <button className="map-btn learning-btn" value="learning" onClick={handleChange} >Learning</button>
            <button className="map-btn support-btn" value="support" onClick={handleChange}>Support</button>
            <button className="map-btn jobs-btn" value="jobs" onClick={handleChange} >Jobs</button>
            <button className="map-btn others-btn" value="others" onClick={handleChange}>Others</button>
            {user?.isAdmin && (
              <button className="map-btn pending-btn" value="pending" onClick={handleChange}>Pending</button>
            )}
            
            <Link to="/">View map</Link>
            
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