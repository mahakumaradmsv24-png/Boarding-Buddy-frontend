import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Boarding Buddy</h1>

        <p className="dashboard-subtitle">
          Smart Boarding Accommodation Management System
        </p>

        <div className="dashboard-grid">

          <Link to="/home" className="dashboard-card home-card">
            <h2>🏠 Home</h2>
            <p>Explore boarding places</p>
          </Link>

          <Link to="/search" className="dashboard-card search-card">
            <h2>🔍 Search</h2>
            <p>Find nearby boarding places</p>
          </Link>

          <Link to="/details" className="dashboard-card details-card">
            <h2>🛏 Details</h2>
            <p>View boarding information</p>
          </Link>

          <Link to="/map" className="dashboard-card map-card">
            <h2>🗺 Map & GPS</h2>
            <p>Nearby boarding locations</p>
          </Link>

          <Link to="/compare" className="dashboard-card compare-card">
            <h2>⚖ Compare</h2>
            <p>Compare boarding options</p>
          </Link>

          <Link to="/add" className="dashboard-card add-card">
            <h2>➕ Add Boarding</h2>
            <p>Add new boarding listings</p>
          </Link>

          <Link to="/owner" className="dashboard-card owner-card">
            <h2>📊 Owner Dashboard</h2>
            <p>Manage properties and bookings</p>
          </Link>

        </div>

      </div>
    </>
  );
}

export default Dashboard;