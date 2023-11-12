import { useEffect, useState } from 'react';
import getTrendingAll from '../../servises/api/getTrendingAll';
import Loader from '../../components/Loader';
import Slider from '../../components/Slider/Slider';
import './Home.css';

const category = {
  1: 'movie',
  2: 'tv',
  3: 'person',
};

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topTV, setTopTV] = useState([]);
  const [errorMassege, setErrorMassege] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await getTrendingAll(category[1]);

        if (!data.length) {
          setErrorMassege('There are no movies for now.');
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

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await getTrendingAll(category[2]);

        if (!data.length) {
          setErrorMassege('There are no TV shows for now.');
          setIsLoading(false);
          return;
        }

        setTopTV(data);
      } catch (error) {
        setErrorMassege('TV shows loading error.');
      }
    })();

    setIsLoading(false);
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <h2 className="home-title">In trend</h2>
      <Slider movies={topMovies} page_title={'Movies'} selector={'swiper'} />
      <Slider movies={topTV} page_title={'TV shows'} selector={'tvswiper'} />
      {errorMassege && <h2>{errorMassege}</h2>}
    </main>
  );
};

export default Home;
