import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";  
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <ul className="nav container">
        
      <div className="navbar logo">
        <NavLink to="/" >
          <img className="logo" src={"https://64.media.tumblr.com/0b2de04ff443fa82ba8f44dc3cfd586a/c662ab4f49c20770-74/s500x750/3ec70bd9f9adcf928f569d7ab6e52caad7ae92de.pnj"} alt="logo" width="70px" />
        </NavLink>
      </div>
        
      <div className="navbar links">
        <Link to="/service/list" className="navlink"> List </Link>
        <Link to="/" className="navlink"> Map </Link>

        <NavLink 
          to="/about" 
          className= {({ isActive }) => isActive ? "navlink selected" : "navlink unselected"}>
          About
        </NavLink>

      {!isLoggedIn && (
        <NavLink 
          to="/login" 
          className={({ isActive }) => isActive ? "navlink selected" : "navlink unselected"}>
          Share
        </NavLink>
      )}

      {isLoggedIn && (
        <NavLink 
          to="/service/add" 
          className={({ isActive }) => isActive ? "navlink selected" : "navlink unselected"}>
          Share
        </NavLink>
      )}
      </div>

      <div className="navbar auth">
        {!isLoggedIn && (
          <div className="navbar login">
            <Link to="/login" className="nav nav-btn"> Login </Link>
            <Link to="/signup"> <button className="nav-btn">Sign Up</button> </Link>  
          </div>
        )}

        {isLoggedIn && (
          <div className="navbar login">
            <span className="nav greetings">{`Hello ${user && user.username}!`}</span>
            <button className="nav nav-btn" onClick={logOutUser}>Logout</button>
          </div>
        )}
        </div>

      </ul>     
    </nav>
  );
}
 
export default Navbar;