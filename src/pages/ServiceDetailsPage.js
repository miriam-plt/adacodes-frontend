import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import AddService from "./AddServicePage";
 
 
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
      {service && (
        <>
        {service.imageUrl &&(
          <>
          <img src={service.imageUrl} alt="service" width="400px"></img>
          </>
        )}

          <h1>{service.name}</h1>
          <h5>Address: {service.complement} {service.street} {service.streetNr} {service.zip} Berlin</h5>
          <h6>{service.date} {service.time}</h6>
          <p>Website: {service.website}</p>
          <p>Email: {service.email} Phone: {service.phone}</p>
          <p>{service.description}</p>
        </>
      )}

      <Link to="/service/list">
        <button>Back to services</button>
      </Link>

      <Link to={`/service/edit/${serviceId}`}>
        <button>Edit Submission</button>
      </Link>

      {<button onClick={publishService}>Publish</button>}
 
    </div>
  );
}
 
export default ServiceDetails;