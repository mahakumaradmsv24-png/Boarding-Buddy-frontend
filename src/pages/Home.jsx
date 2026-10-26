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
  );
}

export default Home;