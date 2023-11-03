import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('../SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const CastList = lazy(() => import('../CastList'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const Series = lazy(() => import('../../pages/Series'));
const SerieDetails = lazy(() => import('../../pages/SerieDetails'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastList />} />
          </Route>
          <Route path="series" element={<Series />}>
            <Route path="series/:serieID" element={<SerieDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
