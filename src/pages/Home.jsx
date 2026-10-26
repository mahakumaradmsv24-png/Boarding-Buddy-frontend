import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BoardingCard from "../components/BoardingCard";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Find Your Perfect Boarding Place</h1>

        <p>
          Smart Boarding Place Management System
          for University Students
        </p>

        <SearchBar />
      </div>

      <div className="cards">

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
    </>
  );
}

export default Home;