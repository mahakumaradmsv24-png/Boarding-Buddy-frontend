import Navbar from "../components/Navbar";

function OwnerDashboard() {
  return (
    <>
      <Navbar />

      <div className="owner-dashboard">

        <h1>Welcome Back, Owner</h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>4</h2>
            <p>Total Listings</p>
          </div>

          <div className="stat-card">
            <h2>12</h2>
            <p>Bookings</p>
          </div>

          <div className="stat-card">
            <h2>8</h2>
            <p>Active Tenants</p>
          </div>

          <div className="stat-card">
            <h2>LKR 146,000</h2>
            <p>Monthly Revenue</p>
          </div>

        </div>

        <div className="table-card">

          <h2>Your Properties</h2>

          <table>

            <thead>
              <tr>
                <th>Property</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Saman Student Residence</td>
                <td>LKR 18,000</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>Nirmala Girls Boarding</td>
                <td>LKR 16,000</td>
                <td>Occupied</td>
              </tr>

              <tr>
                <td>Rathna Student House</td>
                <td>LKR 22,000</td>
                <td>Available</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default OwnerDashboard;