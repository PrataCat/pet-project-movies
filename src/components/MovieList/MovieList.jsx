import MovieCard from '../MovieCard';

const MovieList = ({ movies, pageTitle }) => {
  return (
    <>
      <h1>{pageTitle}</h1>
      <ul>
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
      </ul>
    </>
  );
};

export default MovieList;
