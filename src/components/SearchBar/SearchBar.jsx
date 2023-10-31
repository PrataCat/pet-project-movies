import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
