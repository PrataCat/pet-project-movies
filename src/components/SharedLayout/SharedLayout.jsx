import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SearchBar from '../SearchBar';
import './SharedLayout.css';
import Loader from '../Loader';

const SharedLayout = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <header className="container-fluid">
          <NavLink to="/" end className="navbar-brand nav-link">
            <h1>Movie Universe</h1>
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/series" className="nav-link">
                TV Series
              </NavLink>
            </li>
          </ul>
          <SearchBar />
        </header>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
