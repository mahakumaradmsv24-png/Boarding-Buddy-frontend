import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BoardingCard from "../components/BoardingCard";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">

        <h1>Find your place, close to campus</h1>

        <p>
          Discover the best boarding places near your university.
        </p>

        <SearchBar />

      </div>

      <div className="cards">

        <BoardingCard
          title="Saman Student Residence"
          price="LKR 18,000"
          distance="500m from University"
        />

        <BoardingCard
          title="Nirmala Girls Boarding"
          price="LKR 16,000"
          distance="1km from University"
        />

        <BoardingCard
          title="Rathna Student House"
          price="LKR 22,000"
          distance="700m from University"
        />

      </div>
    </>
  );
}

export default Home;