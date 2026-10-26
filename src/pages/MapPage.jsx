import Navbar from "../components/Navbar";

function MapPage() {
  return (
    <>
      <Navbar />

      <div className="map-page">

        <h1>Boarding Locations</h1>

        <div className="map-container">
          <h2>🗺 Map Placeholder</h2>
          <p>
            Google Maps / Leaflet Map will appear here
          </p>
        </div>

        <div className="nearby-section">

          <h2>Nearby Boarding Places</h2>

          <div className="nearby-card">
            <h3>Green Hostel</h3>
            <p>Distance: 500m</p>
          </div>

          <div className="nearby-card">
            <h3>City Boarding</h3>
            <p>Distance: 1km</p>
          </div>

          <div className="nearby-card">
            <h3>Lake View Rooms</h3>
            <p>Distance: 700m</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default MapPage;