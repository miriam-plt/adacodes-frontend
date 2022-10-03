import { NavLink } from "react-router-dom";   // <== IMPORT
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context"; 

function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext);

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
            <NavLink 
              to="/login" 
               className={({ isActive }) => isActive ? "selected" : "unselected"}>
               Login
            </NavLink>

            <NavLink 
              to="/signup" 
              className={({ isActive }) => isActive ? "selected" : "unselected"}>
              Join the community
            </NavLink>
          </>
        )}

        {isLoggedIn &&
          <>
            <NavLink 
              to="/logout" 
              className={({ isActive }) => isActive ? "selected" : "unselected"}>
              Log out
            </NavLink>
          </>
        }
      </ul>
      
    </nav>
  );
}
 
export default Navbar;