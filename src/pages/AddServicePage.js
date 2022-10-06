import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service";
import Navbar from "../components/Navbar";

function AddService() {
    const navigate = useNavigate();
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

    const handleName = (e) => setName(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    const handleStreet = (e) => setStreet(e.target.value);
    const handleStreetNr = (e) => setStreetNr(e.target.value);
    const handleComplement = (e) => setComplement(e.target.value);
    const handleZip = (e) => setZip(e.target.value);
    const handleWebsite = (e) => setWebsite(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleTime = (e) => setTime(e.target.value);

    const handleFileUpload = e => {
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        service
        .uploadImage(uploadData)
        .then(response => {
          // console.log("response is: ", response);
          // response carries "fileUrl" which we can use to update the state
          setImageUrl(response.fileUrl);
        })
        .catch(err => console.log("Error while uploading the file: ", err));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, category, street, streetNr, complement, zip, website, email, phone, description, imageUrl, date, time };
        console.log(requestBody);
        
        service
             .createService(requestBody)
             .then((response) => {
                setName('');
                setCategory('');
                setStreet('');
                setStreetNr('');
                setComplement('');
                setZip('');
                setWebsite('');
                setEmail('');
                setPhone('');
                setDescription('');
                setImageUrl('');
                setDate('');
                setTime('');
                navigate('/thankyou');
             })
                .catch((error) => console.log(error));
    }
  

    return (
        <div className="AddService">
            <Navbar />
            <h1>Submit your suggestion</h1>
            <p>*Marked fields are mandatory</p>

            <form className="AuthForm" onSubmit={handleSubmit}>
                <container className="FormGroup">
                    <h4>GENERAL INFO</h4>

                    <div className="InputField">
                        <label className="InputTitle">*Name of the service</label>
                        <input className="Input" type="text" name="name" onChange={(e) => handleName(e)}/>
                    </div>

                    <div className="InputField">
                        <label className="InputTitle">*Category</label>
                        <select className="dropdown" name="category" onChange={(e) => handleCategory(e)}>
                        <option defaultValue="events"  hidden>Select a category</option>
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
                                    <label className="InputTitle">Please indicate the date of the event</label>
                                    <input className="Input" type="text" name="date" value={date} onChange={(e) => handleDate(e)}/>
                                </div>    
                                        
                                <div className="InputField">
                                    <label className="InputTitle">What time is the event taking place?</label>
                                    <input className="Input" type="text" name="time" value={time} onChange={(e) => handleTime(e)}/>
                                </div>
                            </>
                        )}
                    </div>    

                    <div className="InputField">
                        <label className="InputTitle">*Description</label>
                        <input className="DescriptionInput" type="text" name="description"  onChange={(e) => handleDescription(e)}/>
                    </div>

                    <div className="ImgUpload">
                        <label className="InputTitle">Select an image to upload</label>
                        <input className="Input" type="file" name="imageUrl"  onChange={(e) => handleFileUpload(e)}/>
                    </div>
                </container>
                <br/>
                <container className="FormGroup">
                    <h4>ADDRESS</h4>

                    <div className="InputField">
                        <label className="InputTitle">Street</label>
                        <input className="Input" type="text" name="street"  onChange={(e) => handleStreet(e)}/>
                    </div>

                    <div className="InputField">
                        <label className="InputTitle">Number</label>
                        <input className="Input" type="text" name="streetNr"  onChange={(e) => handleStreetNr(e)}/> 
                    </div>

                    <div className="InputField">
                        <label className="InputTitle">Complement</label>
                        <input className="Input" type="text" name="complement"  onChange={(e) => handleComplement(e)}/>
                    </div>

                    <div className="InputField">
                        <label className="InputTitle">Zip code</label>
                        <input className="Input" type="text" name="zip" onChange={(e) => handleZip(e)}/>
                    </div>
                </container>

                <container className="FormGroup">
                    <h4>CONTACTS</h4>
                    <div className="InputField">
                        <label className="InputTitle">Website</label>
                        <input className="Input" type="text" name="website"  onChange={(e) => handleWebsite(e)}/>
                    </div>

                    <div className="InputField">
                        <label className="InputTitle">E-mail</label>
                        <input className="Input" type="text" name="email"  onChange={(e) => handleEmail(e)}/>
                    </div>

                    <div className="InputField">
                        <label className="InputTitle">Phone</label>
                        <input className="Input" type="text" name="phone"  onChange={(e) => handlePhone(e)}/>
                    </div>
                </container>
      
                <button className="SaveBtn" type="submit">Submit</button>
            </form>
        
        </div>
    )
}

export default AddService;