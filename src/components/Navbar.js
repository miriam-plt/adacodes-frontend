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
          className={({ isActive }) => isActive ? "selected" : "unselected"}
         >
          About
        </NavLink>
        
      </ul>
      
    </nav>
  );
}
 
export default Navbar;