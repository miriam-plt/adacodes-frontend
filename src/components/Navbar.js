import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";  
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(user)

  return (
    <nav className="Navbar">
      <ul>
        
        <NavLink to="/" className="home-btn">
          <img className="logo" src={"https://static.vecteezy.com/system/resources/previews/001/209/770/non_2x/square-png.png"} alt="logo" width="60px" />
        </NavLink>
        
        <NavLink 
          to="/about" 
          className= {({ isActive }) => isActive ? "navlink selected" : "navlink unselected"}>
          About us
        </NavLink>

        {!isLoggedIn && (
          <>
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "navlink selected" : "navlink unselected"}>
              Share your suggestion
            </NavLink>
            <Link to="/signup" className="navlink btn"> <button>Sign Up</button> </Link>
            <Link to="/login" className="navlink btn"> <button>Login</button> </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <NavLink 
              to="/service/add" 
              className={({ isActive }) => isActive ? "selected" : "unselected"}>
              Share your suggestion
            </NavLink>
            <Link to="/service/list" className="navlink btn"> <button>List</button> </Link>
            <Link to="/" className="navlink btn"> <button>Map</button> </Link>
            <button className="navlink btn" onClick={logOutUser}>Logout</button>
            <span className="navlink greetings">{`Hello ${user && user.user}!`}</span>
          </>
        )}



      </ul>
      
    </nav>
  );
}
 
export default Navbar;