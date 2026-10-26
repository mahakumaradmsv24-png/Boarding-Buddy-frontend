function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by location..."
        className="search-box"
      />

      <button className="search-btn">
        Search
      </button>
    </div>
  );
}

export default SearchBar;