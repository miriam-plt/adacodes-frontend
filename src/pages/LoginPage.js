import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';
import background from "../images/background.jpg";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
        .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);  
        
        authenticateUser(); 
        navigate('/');                     
    })
  .catch((error) => {
    const errorDescription = error.response.data.message;
    setErrorMessage(errorDescription);
  })
};


    return (
      <div className="AuthenticationContent">
        <img className="BackgroundImg" src={background} alt="background"/>
        
        <form className="Authentication" onSubmit={handleLoginSubmit}>
            <h1>Welcome back</h1>
            
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
            <button className="AuthButton" type="submit">Enter</button>

            <p className="CallToAction">Don't have an account yet? <Link className="CallToAction" to={"/signup"}> Sign Up</Link></p>
            
        </form>
       
      </div>
    );
  }
   
  export default Login;