import Navbar from "../components/Navbar";
import BoardingCard from "../components/BoardingCard";

function SearchResults() {
  return (
    <>
      <Navbar />

      <div className="search-page">

        <div className="filters">

          <h2>Filters</h2>

          <label>Price Range</label>
          <select>
            <option>Any</option>
            <option>Under Rs. 15,000</option>
            <option>Under Rs. 20,000</option>
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

        </div>

        <div className="results">

          <BoardingCard
            title="Green Hostel"
            price="Rs. 15,000 / Month"
            distance="500m from University"
          />

          <BoardingCard
            title="City Boarding"
            price="Rs. 18,000 / Month"
            distance="1km from University"
          />

          <BoardingCard
            title="Lake View Rooms"
            price="Rs. 20,000 / Month"
            distance="700m from University"
          />

        </div>

      </div>
    </>
  );
}

export default SearchResults;
