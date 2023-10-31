import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
