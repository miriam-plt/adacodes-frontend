import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";  
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <ul>
        
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : "unselected"}>
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : "unselected"}>
          About
        </NavLink>

        {!isLoggedIn && (
          <>
            <Link to="/signup"> <button>Sign Up</button> </Link>
            <Link to="/login"> <button>Login</button> </Link>
          </>
        )}


        {isLoggedIn && (
          <>
            <button onClick={logOutUser}>Logout</button>
            <span>{user && user.username}</span>
          </>
        )}

      </ul>
      
    </nav>
  );
}
 
export default Navbar;