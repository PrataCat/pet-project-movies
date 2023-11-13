import { useEffect, useState } from 'react';
import getTrendingAll from '../../servises/api/getTrendingAll';
import Loader from '../../components/Loader';
import Slider from '../../components/Slider/Slider';
import './Home.css';
import Hero from '../../components/Hero';

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
      <Hero />
      <Slider
        movies={topMovies}
        page_title={'Movies in trend'}
        selector={'swiper'}
      />
      <Slider
        movies={topTV}
        page_title={'TV Series in trend'}
        selector={'tvswiper'}
      />
      {errorMassege && <h2>{errorMassege}</h2>}
    </main>
  );
};

export default Home;
