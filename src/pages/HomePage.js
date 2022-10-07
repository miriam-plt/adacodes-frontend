import MapView from "../components/MapView";
import Navbar from "../components/Navbar";
import { HashLink } from 'react-router-hash-link';

function HomePage() {
  
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1 className="title">adacodes</h1>
          <h5>Essential resources to help you focus on your personal and professional development in the tech sector. For a digital world without discrimination.</h5>
        <HashLink smooth to="#map">
          View Map
        </HashLink>
      </div>

      
      <div id="map">
        <MapView />
      </div>
      <div className="submit">
      <section className="container-submit">
        <div>
          <h2>Do you have a suggestion?</h2>
          <h5>Share your suggestion and help the community</h5>
        </div>
        <div>
          <button className="submit-btn btn">Send suggestion</button>
        </div>
      </section>
      </div>
    </div>
  );
}
 
export default HomePage;