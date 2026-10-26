function BoardingCard({ title, price, distance }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{distance}</p>
    </div>
  );
}

export default BoardingCard;