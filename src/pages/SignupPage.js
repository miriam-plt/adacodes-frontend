import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("undefined");

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, username };
 
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
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