import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../service";

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
            <h3>Submit your suggestion</h3>

            <form onSubmit={handleSubmit}>
                <label>Name:*</label>
                <input type="text" name="name" onChange={(e) => handleName(e)}/>
                <label>Category:*</label>
                <select name="category" onChange={(e) => handleCategory(e)}>
                <option defaultValue="events"  hidden>Select a category</option>
                    <option value="events">Events</option>
                    <option value="groups">Groups</option>
                    <option value="jobs">Jobs</option>
                    <option value="learning">Learning</option>
                    <option value="support">Support</option>
                    <option value="others">Others</option>
                </select>
                <label>Street:</label>
                <input type="text" name="street"  onChange={(e) => handleStreet(e)}/>
                <label>Street Nr:</label>
                <input type="text" name="streetNr"  onChange={(e) => handleStreetNr(e)}/>
                <label>Address complement:</label>
                <input type="text" name="complement"  onChange={(e) => handleComplement(e)}/>
                <label>Zip:</label>
                <input type="text" name="zip" onChange={(e) => handleZip(e)}/>
                <label>Website:</label>
                <input type="text" name="website"  onChange={(e) => handleWebsite(e)}/>
                <label>E-mail address:</label>
                <input type="text" name="email"  onChange={(e) => handleEmail(e)}/>
                <label>Phone:</label>
                <input type="text" name="phone"  onChange={(e) => handlePhone(e)}/>
                <label>Description:*</label>
                <input type="text" name="description"  onChange={(e) => handleDescription(e)}/>
                <label>Select an image:</label>
                <input type="file" name="imageUrl"  onChange={(e) => handleFileUpload(e)}/>
                <label>In case you're submitting an event please indicate the date:</label>
                <input type="text" name="date"  onChange={(e) => handleDate(e)}/>
                <label>In case you're submitting an event please indicate the time:</label>
                <input type="text" name="time"  onChange={(e) => handleTime(e)}/>
                <button type="submit">Submit</button>
            </form>
            <p>All fields marked with an asterisk are mandatory.</p>
        </div>
    )
}

   


export default AddService;