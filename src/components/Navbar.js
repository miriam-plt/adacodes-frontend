import { NavLink } from "react-router-dom";   // <== IMPORT
 
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : "default"}>
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : "default"}
         >
          About
        </NavLink>
        
      </ul>
      
    </nav>
  );
}
 
export default Navbar;