import MovieCard from '../MovieCard';
import './MovieList.css';
import Row from 'react-bootstrap/Row';

const MovieList = ({ movies, pageTitle }) => {
  return (
    <>
      <h1>{pageTitle}</h1>
      <Row md={6} className="g-4">
        {movies.map(movie => {
          const { id, poster_path, title, release_date } = movie;
          return (
            <MovieCard
              id={id}
              key={id}
              poster={poster_path}
              title={title}
              release={release_date}
            />
          );
        })}
      </Row>
    </>
  );
};

export default MovieList;
