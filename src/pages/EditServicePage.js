import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditService() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [street, setStreet] = useState("");
  const [streetNr, setStreetNr] = useState("");
  const [complement, setComplement] = useState("");
  const [zip, setZip] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isApproved, setIsApproved] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const navigate = useNavigate();
  const { serviceId } = useParams();
  console.log(serviceId)

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, category, street, streetNr, complement, zip, website, email, phone, description, imageUrl, date, time, isApproved, latitude, longitude };
    const storedToken = localStorage.getItem("authToken");

    axios.put(
      `${process.env.REACT_APP_API_URL}/api/services/${serviceId}`, 
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
         .then((response) => {
          navigate(`/service/${serviceId}`)
         });
  }


  const deleteService = () => {
    const storedToken = localStorage.getItem("authToken");

    axios.delete(
      `${process.env.REACT_APP_API_URL}/api/services/${serviceId}`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
         .then(() => {
          navigate('/')
         })
         .catch((error) => console.log(error));
  };

  useEffect(()=>{
    const storedToken = localStorage.getItem("authToken");

    axios.get(
      `${process.env.REACT_APP_API_URL}/api/services/${serviceId}`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
         .then((response) => {
          const oneService = response.data;
          setName(oneService.name);
          setCategory(oneService.category);
          setStreet(oneService.street);
          setStreetNr(oneService.streetNr);
          setComplement(oneService.complement);
          setZip(oneService.zip);
          setWebsite(oneService.website);
          setEmail(oneService.email);
          setPhone(oneService.phone);
          setDescription(oneService.description);
          setImageUrl(oneService.imageUrl);
          setDate(oneService.date);
          setTime(oneService.time);
          setIsApproved(oneService.isApproved);
          setLatitude(oneService.latitude);
          setLongitude(oneService.longitude);
         })
         .catch((error) => console.log(error));
  }, [])


    return (
      <div className="editService">
        <h1>Edit the submission:</h1>
        <form onSubmit={handleSubmit}>
                <label>Name:*</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Category:*</label>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option defaultValue="events"  hidden>Select a category</option>
                    <option value="events">Events</option>
                    <option value="groups">Groups</option>
                    <option value="jobs">Jobs</option>
                    <option value="learning">Learning</option>
                    <option value="support">Support</option>
                    <option value="others">Others</option>
                </select>
                <label>Street:</label>
                <input type="text" name="street" value={street}  onChange={(e) => setStreet(e.target.value)}/>
                <label>Street Nr:</label>
                <input type="text" name="streetNr" value={streetNr} onChange={(e) => setStreetNr(e.target.value)}/>
                <label>Address complement:</label>
                <input type="text" name="complement" value={complement} onChange={(e) => setComplement(e.target.value)}/>
                <label>Zip:</label>
                <input type="text" name="zip" value={zip} onChange={(e) => setZip(e.target.value)}/>

                <label>Please indicate here the latitude:</label>
                <input type="text" name="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
                <label>Please indicate here the longitute:</label>
                <input type="text" name="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>

                <label>Website:</label>
                <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
                <label>E-mail address:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Phone:</label>
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label>Description:*</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label>Select an image url:</label>
                <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>

              {category.includes("event") && (
                <>
                  <label>In case you're submitting an event please indicate the date:</label>
                  <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                  <label>In case you're submitting an event please indicate the time:</label>
                  <input type="text" name="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                </>
              )}
                                
                <button type="submit">Save changes</button>
            </form>
            <p>All fields marked with an asterisk are mandatory.</p>
            <button onClick={deleteService}>Delete</button>
      
      </div>
    );
  }
  
export default EditService;