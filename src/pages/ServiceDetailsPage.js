import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import ServiceMap from "../components/ServiceMap";
import { ExternalLink } from 'react-external-link';
 
 
function ServiceDetails () {
  const [service, setService] = useState(null); // 1. Define a State variable for the upcoming service
  const { serviceId } = useParams(); 
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate()

  //console.log(service)
 
  const getService = () => { 
  
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/services/${serviceId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneService = response.data;
        setService(oneService);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => { // 4. useEffect will execute once and fetch specific service
    getService();
  }, []);

  const publishService = (e) => {
    const storedToken = localStorage.getItem("authToken");
    service.isApproved = true;

    const requestBody = {...service}
    //console.log(requestBody)
  
    axios.put(
      `${process.env.REACT_APP_API_URL}/api/services/${serviceId}`, 
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
         .then((response) => {
          navigate(`/service/list`)
         });  
  }
  
  
  if(service === null){ // 3. Display this while we wait for the data from the API to load
    return <p>Loading project...</p>
  }


  return ( 
    <div className="ServiceDetails">

      <ServiceMap key={service._id} latitude={service.latitude} longitude={service.longitude}/>
      
      {service && (
        <>
        {service.imageUrl &&(
          <>
          <img src={service.imageUrl} alt="service" width="400px"></img>
          </>
        )}
          <div className="ServiceContent">
            <h1>{service.name}</h1>
            <Link to="/service/list">
              👈 Back to services
            </Link>
            <h4>
              <p>
                {service.street !== "" && service.street} 
                {service.streetNr !== "" && ` ${service.streetNr}`}
              </p>
              {service.complement !== "" && (
                <p>{service.complement}</p>
              )}
              {service.zip !== "" && (
                <p>Berlin {service.zip}</p>
              )}
            </h4>
            {service.description !== "" && (
              <p>{service.description}</p>
            )}
            {service.date !== "" && (
              <p>🗓 {service.date}</p>
            )}
            {service.time !== "" && (
              <p>🕑 {service.time}</p>
            )}
            {service.website !== "" && (
              <ExternalLink href={`${service.website}`}>
                <span>{`👩‍💻 ${service.website}`}</span>
              </ExternalLink>
            )}
            {service.email !== "" && (
              <p>✉️ {service.email}</p>
            )}
            {service.phone !== "" && (
              <p>📞 {service.phone}</p>
            )}
          </div>
        </>
      )}
      

      
      <div className="ActionButtons">
        <Link to={`/service/edit/${serviceId}`}>
          <button>Edit Submission</button>
        </Link>
      {<button onClick={publishService}>Publish</button>}

      </div>
      
 
    </div>
  );
}
 
export default ServiceDetails;