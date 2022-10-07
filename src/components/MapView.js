//import { Link } from 'react';
import  Map, { Marker, Popup, FullscreenControl, NavigationControl } from 'react-map-gl';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import axios from "axios";

const MapView = () => {
    const [selectedService, setSelectedService] = useState(null);
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
        else {return services.isApproved === true}
    })

    

    if(services.length === 0){ 
    return <p>Loading...</p>
    }
    

  return (
    <div className="Map">
        <div>            

          <button className="map-btn allServices-btn" value="all" onClick={handleChange} >All Services</button>
          <button className="map-btn events-btn" value="events" onClick={handleChange} >Events</button>
          <button className="map-btn groups-btn" value="groups" onClick={handleChange} >Groups</button>
          <button className="map-btn learning-btn" value="learning" onClick={handleChange} >Learning</button>
          <button className="map-btn support-btn" value="support" onClick={handleChange}>Support</button>
          <button className="map-btn jobs-btn" value="jobs" onClick={handleChange} >Jobs</button>
          <button className="map-btn others-btn" value="others" onClick={handleChange}>Others</button>
        </div>
    
        <Map
            initialViewState={{
            longitude: 13.3888599,
            latitude: 52.5170365,
            zoom: 11
            }}
            style={{width: '100vw', height: '70vh'}}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >

            <FullscreenControl />
            <NavigationControl />  

           
            {filteredServices.map(service => (
                <Marker 
                    // color={chooseColor(service.category)}
                    key={service._id}
                    longitude={service.longitude} 
                    latitude={service.latitude} 
                    
                    onClick={(e) => {
                        e.originalEvent.stopPropagation();
                        setSelectedService(service);
                    }}    
                    > 
                    
                    <img className='map-marker' src="https://www.pngkey.com/png/full/163-1637155_light-blue-circle-png-circle.png" width="20px" alt="marker" />
                    

                </Marker>
            ))}

            {selectedService ? (
                <Popup
                    
                    longitude={selectedService.longitude} 
                    latitude={selectedService.latitude} 
                    onClose={() => setSelectedService(null)}
                >
                    <div>
                        <h3>{selectedService.name}</h3>
                        {selectedService.date !== "" && (
                            <p>Date: {selectedService.date}</p>
                        )}
                        {selectedService.time !== "" && (
                            <p>Time: {selectedService.time}</p>
                        )}
                        <p>
                            {selectedService.street !== "" && selectedService.street} 
                            {selectedService.streetNr !== "" && selectedService.streetNr}
                        </p>
                        {selectedService.complement !== "" && (
                            <p>{selectedService.complement}</p>
                        )}
                        {selectedService.zip !== "" && (
                            <p>Berlin {selectedService.zip}</p>
                        )}

                        {selectedService.website !== "" && (
                            <ExternalLink href={`${selectedService.website}`}>
                                <p><span>{`${selectedService.website}`}</span></p>
                            </ExternalLink>
                        )}
                        {selectedService.email !== "" && (
                            <p>{selectedService.email}</p>
                        )}
                        {selectedService.phone !== "" && (
                            <p>Phone: {selectedService.phone}</p>
                        )}
                        
                        <Link to={`/service/${selectedService._id}`}>View details</Link>
                    </div>
                </Popup>
            ) : null}        
        </Map>   
    </div>
  )};
   
export default MapView;