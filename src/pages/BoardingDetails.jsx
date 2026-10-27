import Navbar from "../components/Navbar";

function BoardingDetails() {
  return (
    <>
      <Navbar />

      <div className="details-wrapper">

        <div className="details-left">

          <div className="main-image">
            Main Boarding Image
          </div>

          <div className="gallery-row">

            <div className="small-image">Image 1</div>
            <div className="small-image">Image 2</div>
            <div className="small-image">Image 3</div>

          </div>

          <div className="description-box">

            <h2>Saman Student Residence</h2>

            <p>
              A comfortable boarding place located near the university.
              Includes WiFi, study area, parking and laundry facilities.
            </p>

            <h3>Facilities</h3>

            <ul>
              <li>WiFi</li>
              <li>Study Area</li>
              <li>Laundry</li>
              <li>Parking</li>
            </ul>

          </div>

        </div>

        <div className="details-right">

          <div className="price-card">

            <h2>LKR 18,000</h2>

            <p>per month</p>

            <button className="contact-btn">
              Contact Owner
            </button>

            <button className="contact-btn secondary-btn">
              Add to Favorites
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default BoardingDetails;