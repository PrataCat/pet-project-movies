import { useEffect, useState } from 'react';
import getTrendingAll from '../../servises/api/getTrendingAll';
import Loader from '../../components/Loader';
import Slider from '../../components/Slider/Slider';
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
      <h2 className="home-title">In trend</h2>
      <Slider movies={topMovies} />
      {errorMassege && <h2>{errorMassege}</h2>}
    </main>
  );
};

export default Home;
