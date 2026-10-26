import BoardingCard from "../components/BoardingCard";

function Home() {
  return (
    <div>
      <h1>🏠 Boarding Buddy</h1>

      <h2>Find Your Perfect Boarding Place</h2>

      <p>
        Smart Boarding Place Management System for University Students
      </p>

      <button>Search Boardings</button>

      <hr />

      <BoardingCard />
      <BoardingCard />
      <BoardingCard />
    </div>
  );
}

export default Home;