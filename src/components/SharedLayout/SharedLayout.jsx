import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SearchBar from '../SearchBar';

const SharedLayout = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <header className="container-fluid">
          <NavLink to="/" end className="navbar-brand nav-link">
            Movie Universe
          </NavLink>
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ margin: '0 auto' }}
          >
            <li className="nav-item">
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Persons
              </NavLink>
            </li>
          </ul>
          <SearchBar />
        </header>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
