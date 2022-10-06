import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";  
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
  const { isLoggedIn, username, logOutUser } = useContext(AuthContext);
  console.log(username)

  return (
    <nav className="Navbar">
      <ul className="nav container">
        
      <div className="navbar logo">
        <NavLink to="/" >
          <img className="logo" src={"https://static.vecteezy.com/system/resources/previews/001/209/770/non_2x/square-png.png"} alt="logo" width="30px" />
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
            <span className="nav greetings">{`Hello ${username && username.username}!`}</span>
            <button className="nav nav-btn" onClick={logOutUser}>Logout</button>
          </div>
        )}
        </div>

      </ul>     
    </nav>
  );
}
 
export default Navbar;