import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);

    const API_URL = process.env.REACT_APP_API_URL 

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, username };
 
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`http://localhost:5006/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
    };


    return (
      <div className="AuthContent">
        
        <form className="AuthForm" onSubmit={handleLoginSubmit}>
            <h1>Please inform your credentials</h1>
            <p>Already have an account yet?</p>
            <Link to={"/login"}> Log in</Link>
            <label>Username</label>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
            />
            <label>Email</label>
            <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            />

            <label>Password</label>
            <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            />
            <button type="submit">Create account</button>
            
        </form>

        { errorMessage && <p className="error-message">{errorMessage}</p> }

      </div>
    );
  }
   
  export default Signup;