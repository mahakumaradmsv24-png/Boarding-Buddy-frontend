import Navbar from "../components/Navbar";

function SearchResults() {
  return (
    <>
      <Navbar />

      <div className="search-layout">

        <div className="filter-panel">

          <h3>Filters</h3>

          <label>Monthly Rent</label>
          <select>
            <option>Any</option>
            <option>Under 15,000</option>
            <option>15,000 - 20,000</option>
            <option>20,000+</option>
          </select>

          <label>Room Type</label>
          <select>
            <option>Any</option>
            <option>Single</option>
            <option>Shared</option>
          </select>

          <label>Distance</label>
          <select>
            <option>Any</option>
            <option>Under 500m</option>
            <option>Under 1km</option>
          </select>

          <button className="search-btn">
            Apply Filters
          </button>

        </div>

        <div className="boarding-list">

          <div className="listing-card">
            <div className="listing-image">
              Boarding Image
            </div>

            <div className="listing-content">
              <h3>Saman Student Residence</h3>
              <p>500m from University</p>
              <h2>LKR 18,000</h2>
              <button>View Details</button>
            </div>
          </div>

          <div className="listing-card">
            <div className="listing-image">
              Boarding Image
            </div>

            <div className="listing-content">
              <h3>Nirmala Girls Boarding</h3>
              <p>1km from University</p>
              <h2>LKR 16,000</h2>
              <button>View Details</button>
            </div>
          </div>

          <div className="listing-card">
            <div className="listing-image">
              Boarding Image
            </div>

            <div className="listing-content">
              <h3>Rathna Student House</h3>
              <p>700m from University</p>
              <h2>LKR 22,000</h2>
              <button>View Details</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default SearchResults;