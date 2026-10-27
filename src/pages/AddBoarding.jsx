import Navbar from "../components/Navbar";

function AddBoarding() {
  return (
    <>
      <Navbar />

      <div className="add-page">

        <h1>Add New Boarding</h1>

        <div className="form-card">

          <input
            type="text"
            placeholder="Boarding Name"
          />

          <input
            type="text"
            placeholder="Address"
          />

          <input
            type="number"
            placeholder="Monthly Rent"
          />

          <select>
            <option>Room Type</option>
            <option>Single</option>
            <option>Shared</option>
          </select>

          <textarea
            placeholder="Description"
          ></textarea>

          <div className="upload-area">
            Upload Images Here
          </div>

          <div className="duplicate-badge">
            ✅ Duplicate Detection Enabled
          </div>

          <button className="submit-btn">
            Submit Boarding
          </button>

        </div>

      </div>
    </>
  );
}

export default AddBoarding;