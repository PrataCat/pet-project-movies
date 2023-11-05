import MovieCard from '../MovieCard';
import './MovieList.css';
import Row from 'react-bootstrap/Row';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-wrap">
      <Row sd={3} md={5} className="g-4 ">
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
    </div>
  );
};

export default MovieList;
