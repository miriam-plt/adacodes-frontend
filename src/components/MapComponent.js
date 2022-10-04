//import { Link } from 'react';
import  Map, { Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from "react";
import axios from "axios";

const MapComponent = () => {
   const [showPopup, setShowPopup] = useState(false);

    const handleDisplayPopup = (e) => { e.originalEvent.stopPropagation(); setShowPopup(!showPopup)}
    const handleClosePopup = () => {setShowPopup(!showPopup)}

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

    //console.log(services)
    
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
        else {return services.isApproved === true}
    })

    console.log(filteredServices)

    if(services.length === 0){ 
    return <p>Loading...</p>
    }  
  

  return (
    <div className="Map">
        <div>            
          <button className="allServices-btn" value="all" onClick={handleChange} >All Services</button>
          <button className="events-btn" value="events" onClick={handleChange} >Events</button>
          <button className="groups-btn" value="groups" onClick={handleChange} >Groups</button>
          <button className="learning-btn" value="learning" onClick={handleChange} >Learning</button>
          <button className="support-btn" value="support" onClick={handleChange}>Support</button>
          <button className="jobs-btn" value="jobs" onClick={handleChange} >Jobs</button>
          <button className="others-btn" value="others" onClick={handleChange}>Others</button>
      </div>
    
        <Map
            initialViewState={{
            longitude: 13.3888599,
            latitude: 52.5170365,
            zoom: 10
            }}
            style={{width: '100vw', height: '70vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
        
        { filteredServices.map((service) => {
                return (
                    <div key={service._id}>
                        {!showPopup && 
                        <Marker 
                            longitude={service.longitude} 
                            latitude={service.latitude} 
                            anchor="bottom" 
                            onClick={handleDisplayPopup}
                        >
                    </Marker>}
                   
                    {showPopup && 
                        <Popup 
                            longitude={service.longitude} 
                            latitude={service.latitude} 
                            onClose={handleClosePopup}
                            anchor="bottom"
                        >
                            <img src={service.image} alt="service"></img>
                            <h3>{service.name}</h3>
                            <p>{service.street} {service.streetNr}</p>
                            <p>{service.complement}</p>
                            <p>{service.email}</p>
                            <p>{service.website}</p>
                            <p>{service.phone}</p>
                            <p>Berlin {service.zip}</p>
                            {/*<Link>View details</Link>*/}        
                    </Popup>}
                    </div>
                )
         })
        }        
        </Map>
    </div>
    
  )
}
export default MapComponent