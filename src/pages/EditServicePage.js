import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
  }, [serviceId])


    return (
      <div className="editService">
        <Navbar />
        <h1>Edit Service</h1>
        <p>*Marked fields are mandatory</p>
        <form className="ServiceForm" onSubmit={handleSubmit}>

          <container className="FormGroup">
            <h5>GENERAL INFO</h5>

            <div className="InputField">
              <label>*Name of the service</label>
              <input className="Input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="InputField">
              <label>*Category</label>
              <select className="dropdown" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue="events" hidden>Select a category</option>
                <option value="events">Events</option>
                <option value="groups">Groups</option>
                <option value="jobs">Jobs</option>
                <option value="learning">Learning</option>
                <option value="support">Support</option>
                <option value="others">Others</option>
              </select>

              {category.includes("event") && (
                <>
                  <div className="InputField">
                    <label>Please indicate the date of the event</label>
                    <input className="Input" type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                  </div>
                  <div className="InputField">
                    <label>What time is the event taking place?</label>
                    <input className="Input" type="text" name="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                  </div>
                </>
              )}

              <div className="InputField">
                <label>*Description</label>
                <textarea className="DescriptionInput" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div> 

              <div className="InputField">
                <label>Image (inform URL)</label>
                <input className="Input" type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
              </div>

              
            </div>
          </container>     
          
          <container className="FormGroup">
            <h5>ADDRESS</h5>
            <container className="Address">
              <div className="InputField">
                <label>Street</label>
                <input className="Input" type="text" name="street" value={street}  onChange={(e) => setStreet(e.target.value)}/>
              </div>

              <div className="InputField">
                <label className="InputTitle StreetNr">Number</label>
                <input className="Input" type="text" name="streetNr" value={streetNr} onChange={(e) => setStreetNr(e.target.value)}/>
              </div>
            </container>  
              

              <div className="InputField">
                <label>Zip code</label>
                <input className="Input" type="text" name="zip" value={zip} onChange={(e) => setZip(e.target.value)}/>
              </div>

              <div className="InputField">
                <label>Complement</label>
                <input className="Input" type="text" name="complement" value={complement} onChange={(e) => setComplement(e.target.value)}/>
              </div>

              <div className="InputField">
                <label>*Latitude</label>
                <input className="Input" type="text" name="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
             </div>

              <div className="InputField">
                <label>*Longitute</label>
                <input className="Input" type="text" name="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>
              </div>
            
          </container> 
          <br/>
          <container className="FormGroup">
            <h5>CONTACTS</h5>
            <div className="InputField">
              <label>Website</label>
              <input className="Input" type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            </div>

          <div className="InputField">
            <label>E-mail</label>
            <input className="Input" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="InputField">
            <label>Phone</label>
            <input className="Input" type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
        </container>
                             
          <button className="SaveBtn" type="submit">Save</button>
          <Link to="/service/list">
            <button className="CancelBtn" type="submit">Cancel</button> 
          </Link>
            
        </form>
           
        <button className="DeleteBtn" onClick={deleteService}>Delete Service</button>
      
      </div>
    );
  }
  
export default EditService;