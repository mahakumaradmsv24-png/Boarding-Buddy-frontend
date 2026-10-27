import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🏠 Boarding Buddy</h2>

      <div className="nav-links">

        <Link to="/" className="nav-link">
          Dashboard
        </Link>

        <Link to="/home" className="nav-link">
          Home
        </Link>

        <Link to="/search" className="nav-link">
          Search
        </Link>

        <Link to="/details" className="nav-link">
          Details
        </Link>

        <Link to="/map" className="nav-link">
          Map
        </Link>

        <Link to="/compare" className="nav-link">
          Compare
        </Link>

        <Link to="/add" className="nav-link">
          Add Boarding
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;