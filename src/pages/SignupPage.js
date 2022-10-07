import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import background2 from "../images/backgound2.jpg";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

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
        <img className="BackgroundImg" src={background2} alt="background"/>

        
        <form className="Authentication" onSubmit={handleLoginSubmit}>
            <h1>Create an account</h1>
            
            <div>
              <label>Full name</label>
              <input
              className="InputAuth"
              type="text"
              name="username"
              value={username}
              onChange={handleUsername}
              />
            </div>
            
            <div>
              <label>Email</label>
              <input
              className="InputAuth"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              />
            </div>
            
            <div>
              <label>Password</label>
              <input
              className="InputAuth"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              />
            </div>

            { errorMessage && <p className="AuthErrorMsg">{errorMessage}</p> }
            <button className="AuthButton" type="submit">Create account</button>

            <p className="CallToAction">
              Already have an account? 
              <Link to={"/login"}> Log in</Link>
            </p>
            
        </form>
      </div>
    );
  }
   
  export default Signup;