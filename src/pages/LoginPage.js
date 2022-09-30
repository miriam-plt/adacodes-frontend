import { useState } from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   // const [errorMessage, setErrorMessage] = useState(undefined);

    //const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(`email is: ${email}, password is: ${password}`)
    }





    return (
      <div className="AuthContent">
        
        <form className="AuthForm" onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>
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
            <button type="submit">Enter</button>
            
        </form>

        

      </div>
    );
  }
   
  export default Login;