import { useState } from "react";

function AddService(props) {
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
    }
  
    return (
        <div className="AddService">
            <h3>Submit your suggestion</h3>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName}/>
                <label>Category:</label>
                <input type="text" name="category" value={category} onChange={handleCategory}/>
                <label>Street:</label>
                <input type="text" name="street" value={street} onChange={handleStreet}/>
                <label>Street Nr:</label>
                <input type="number" name="streetNr" value={streetNr} onChange={handleStreetNr}/>
                <label>Address complement:</label>
                <input type="text" name="complement" value={complement} onChange={handleComplement}/>
                <label>Zip:</label>
                <input type="number" name="zip" value={zip} onChange={handleZip}/>
                <label>Website:</label>
                <input type="text" name="website" value={website} onChange={handleWebsite}/>
                <label>E-mail address:</label>
                <input type="text" name="email" value={email} onChange={handleEmail}/>
                <label>Phone:</label>
                <input type="number" name="phone" value={phone} onChange={handlePhone}/>
                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={handleDescription}/>
                <label>Picture:</label>
                <input type="text" name="picture" value={picture} onChange={handlePicture}/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )

}

   


export default AddService;