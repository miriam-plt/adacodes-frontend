import MapView from "../components/MapView";


function HomePage() {
  
  return (
    <div>
      <div className="header">
        <h1 className="title">Ada Codes</h1>
        <h5>Essential resources to help you focus on your personal and professional development in the tech sector. For a digital world without discrimination.</h5>
      </div>
      
      <MapView />
      <div className="submit">
      <section className="container-submit">
        <div>
          <h2>Do you have a suggestion?</h2>
          <h5>Share your suggestion and help the community</h5>
        </div>
        <div>
          <form action="/service/add">
          <input type="submit" className="submit-btn btn" value="Send suggestion" />
          </form>
        </div>
      </section>
      </div>
    </div>
  );
}
 
export default HomePage;