import MapView from "../components/MapView";


function HomePage() {
  
  return (
    <div>
      <div className="header">
        <h1>Ada Codes</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
      </div>
      
      <MapView />

      <section className="submit">
        <h2>Do you have a suggestion?</h2>
        <h5>Share your suggestion and help the community</h5>
        <button>Send suggestion</button>
      </section>
    </div>
  );
}
 
export default HomePage;