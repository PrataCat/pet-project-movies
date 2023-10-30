import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SearchBar from '../SearchBar';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <NavLink to="/" end>
          Movie Universe
        </NavLink>
        <ul>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink>Persons</NavLink>
        </ul>
        <SearchBar />
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
