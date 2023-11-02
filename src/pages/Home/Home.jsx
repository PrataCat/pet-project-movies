import { useEffect, useState } from 'react';
import getTrendingAll from '../../servises/api/getTrendingAll';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';
import PosterCarousel from '../../components/PosterCarousel';
import './Home.css';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [errorMassege, setErrorMassege] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await getTrendingAll();

        if (!data.length) {
          setErrorMassege('There are no movies or series for now.');
          setIsLoading(false);
          return;
        }

        setTopMovies(data);
      } catch (error) {
        setErrorMassege('Movies loading error.');
      }
    })();

    setIsLoading(false);
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <h1>Hello guys</h1>
      <h2>In trend</h2>
      <div className="in-trend-wrap">
        <PosterCarousel movies={topMovies} />
        <MovieList movies={topMovies} />
      </div>
      {errorMassege && <h2>{errorMassege}</h2>}
    </main>
  );
};

export default Home;
