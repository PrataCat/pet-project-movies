import './PosterCarousel.css';
import Carousel from 'react-bootstrap/Carousel';

const PosterCarousel = ({ movies }) => {
  return (
    <Carousel
      controls={false}
      indicators={false}
      keyboard={false}
      pause={false}
      className="carousel-wrap"
    >
      {movies.map(movie => {
        const { id, poster_path } = movie;
        return (
          <Carousel.Item id={id} key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
              className="first-slide"
              alt="poster"
            />
            {/* <Carousel.Caption>
              <h3>{title}</h3>
              <p>{release_date}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PosterCarousel;
