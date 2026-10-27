import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BoardingCard from "../components/BoardingCard";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero-section">

        <div className="hero-overlay">

          <h1>Find Your Perfect Boarding Place</h1>

          <p>
            Smart boarding accommodation platform for university students
          </p>

          <SearchBar />

        </div>

      </section>

      <section className="featured-section">

        <h2>Featured Boarding Places</h2>

        <div className="cards">

          <BoardingCard
            title="Green Hostel"
            price="LKR 18,000"
            distance="500m from University"
          />

          <BoardingCard
            title="City Boarding"
            price="LKR 16,000"
            distance="1km from University"
          />

          <BoardingCard
            title="Lake View Rooms"
            price="LKR 22,000"
            distance="700m from University"
          />

        </div>

      </section>
    </>
  );
}

export default Home;