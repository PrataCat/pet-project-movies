import './SearchBar.css';
import sprite from '../../images/symbol-defs.svg';

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

        <button
          className="btn btn-outline-secondary text-body-tertiary"
          type="submit"
        >
          <svg className="svg-param">
            <use href={`${sprite}#icon-search`}></use>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
