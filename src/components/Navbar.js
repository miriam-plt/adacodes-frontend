import { NavLink } from "react-router-dom";   // <== IMPORT
 
function Navbar() {
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

        <NavLink 
          to="/service/list" 
          className={({ isActive }) => isActive ? "selected" : "unselected"}>
          Services
        </NavLink>
        
      </ul>
      
    </nav>
  );
}
 
export default Navbar;