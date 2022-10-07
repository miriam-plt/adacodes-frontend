import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function ThankYouPage() {
    return (
      <div className="thankYou">
        <Navbar />
        <div>
          <p className="emoji">🙌</p>
          <h1>Thank you for your contribution!</h1>
          <h4>Our Admin Team will review your submission. Once approved, the content will be available on the website and accessible to everyone. Keep an eye on for updates.</h4>
          <Link to="/service/add">
              <button>Share another suggestion</button>
          </Link>
          <br/>
          <p>
            <Link to="/service/list">
                👈 Back to services
            </Link>
          </p>
          
        </div>
        
      </div>
    );
  }
   
  export default ThankYouPage;