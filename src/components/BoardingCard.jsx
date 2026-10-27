function BoardingCard({ title, price, distance }) {
  return (
    <div className="property-card">

      <div className="property-image">
        Boarding Image
      </div>

      <div className="property-content">

        <h3>{title}</h3>

        <p>{distance}</p>

        <h2>{price}</h2>

        <button className="view-btn">
          View Details
        </button>

      </div>

    </div>
  );
}

export default BoardingCard;