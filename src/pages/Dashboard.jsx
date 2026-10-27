import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Boarding Buddy Demo Dashboard</h1>

        <p>
          Smart Boarding Accommodation Management System
        </p>

        <div className="dashboard-grid">

          <Link to="/home" className="dashboard-card">
            🏠 Home Page
          </Link>

          <Link to="/search" className="dashboard-card">
            🔍 Search Results
          </Link>

          <Link to="/details" className="dashboard-card">
            🛏 Boarding Details
          </Link>

          <Link to="/map" className="dashboard-card">
            🗺 Map & GPS
          </Link>

        </div>

      </div>
    </>
  );
}

export default Dashboard;