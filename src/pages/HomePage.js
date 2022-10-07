import MapView from "../components/MapView";


function HomePage() {
  
  return (
    <div>
      <div className="header">
        <h1 className="title">adacodes</h1>
        <h5>Essential resources to help you focus on your personal and professional development in the tech sector. For a <del>digital</del> world without discrimination.</h5>
      </div>
      
      <MapView id="mapview"/>
      <div className="submit">
      <section className="container-submit">
        <div>
          <h2 className="send-suggestion">Do you have a suggestion?</h2>
          <h5 className="share-suggestion">Share your suggestion and help the community</h5>
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