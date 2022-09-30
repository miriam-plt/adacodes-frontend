import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddService(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [street, setStreet] = useState("");
    const [streetNr, setStreetNr] = useState(0);
    const [complement, setComplement] = useState("");
    const [zip, setZip] = useState(0);
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");

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
    const handlePicture = (e) => setPicture(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, category, street, streetNr, complement, zip, website, email, phone, description, picture };
        console.log(requestBody);
        const storedToken = localStorage.getItem('authToken');
        axios.post(`${process.env.REACT_APP_API_URL}/api/services`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
             .then((response) => {
                setName('');
                setCategory('');
                setStreet('');
                setStreetNr(0);
                setComplement('');
                setZip(0);
                setWebsite('');
                setEmail('');
                setPhone('');
                setDescription('');
                setPicture('');
                navigate('/');
             })
                .catch((error) => console.log(error));
    }
  
    return (
        <div className="AddService">
            <h3>Submit your suggestion</h3>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={(e) => handleName(e)}/>
                <label>Category:</label>
                <input type="text" name="category"  onChange={(e) => handleCategory(e)}/>
                <label>Street:</label>
                <input type="text" name="street"  onChange={(e) => handleStreet(e)}/>
                <label>Street Nr:</label>
                <input type="number" name="streetNr"  onChange={(e) => handleStreetNr(e)}/>
                <label>Address complement:</label>
                <input type="text" name="complement"  onChange={(e) => handleComplement(e)}/>
                <label>Zip:</label>
                <input type="number" name="zip" onChange={(e) => handleZip(e)}/>
                <label>Website:</label>
                <input type="text" name="website"  onChange={(e) => handleWebsite(e)}/>
                <label>E-mail address:</label>
                <input type="text" name="email"  onChange={(e) => handleEmail(e)}/>
                <label>Phone:</label>
                <input type="number" name="phone"  onChange={(e) => handlePhone(e)}/>
                <label>Description:</label>
                <input type="text" name="description"  onChange={(e) => handleDescription(e)}/>
                <label>Picture:</label>
                <input type="text" name="picture"  onChange={(e) => handlePicture(e)}/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )

}

   


export default AddService;