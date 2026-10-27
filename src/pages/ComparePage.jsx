import Navbar from "../components/Navbar";

function ComparePage() {
  return (
    <>
      <Navbar />

      <div className="compare-page">

        <h1>Compare Boarding Places</h1>

        <div className="compare-grid">

          <div className="compare-card">
            <h2>Green Hostel</h2>

            <p>Price: LKR 18,000</p>
            <p>Distance: 500m</p>
            <p>WiFi: Available</p>
            <p>Parking: Available</p>
            <p>Rating: ⭐ 4.5</p>
          </div>

          <div className="compare-card">
            <h2>City Boarding</h2>

            <p>Price: LKR 16,000</p>
            <p>Distance: 1km</p>
            <p>WiFi: Available</p>
            <p>Parking: No</p>
            <p>Rating: ⭐ 4.2</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default ComparePage;
