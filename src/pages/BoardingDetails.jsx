import Navbar from "../components/Navbar";

function BoardingDetails() {
  return (
    <>
      <Navbar />

      <div className="details-page">

        <div className="details-image">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Boarding"
          />
        </div>

        <div className="details-content">
          <h1>Green Hostel</h1>

          <h2>Rs. 15,000 / Month</h2>

          <p>
            Comfortable boarding place for university students.
            Walking distance to university.
          </p>

          <h3>Facilities</h3>

          <ul>
            <li>WiFi</li>
            <li>Water</li>
            <li>Parking</li>
            <li>Study Area</li>
          </ul>

          <h3>Distance</h3>

          <p>500m from University</p>

          <button className="contact-btn">
            Contact Owner
          </button>

        </div>

      </div>
    </>
  );
}

export default BoardingDetails;