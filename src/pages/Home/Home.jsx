import { useEffect, useState } from 'react';
import getTrendingAll from '../../servises/api/getTrendingAll';
import MovieList from '../../components/MovieList';

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
      {isLoading && <h2>Loading...</h2>}
      <h1>Hello guys</h1>
      <MovieList movies={topMovies} pageTitle={'In trend'} />
      {errorMassege && <h2>{errorMassege}</h2>}
    </main>
  );
};

export default Home;
