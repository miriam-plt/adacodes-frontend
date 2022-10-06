import MapView from "../components/MapView";


function HomePage() {
  
  return (
    <div>
      <div className="header">
        <h1 className="title">Ada Codes</h1>
        <h5>Essential resources to help you focus on your personal and professional development in the tech sector. For a digital world without discrimination.</h5>
      </div>
      
      <MapView />

      <section className="submit">
        <div>
          <h2>Do you have a suggestion?</h2>
          <h5>Share your suggestion and help the community</h5>
        </div>
        <div>
          <button className="submit-btn btn">Send suggestion</button>
        </div>
      </section>
    </div>
  );
}
 
export default HomePage;