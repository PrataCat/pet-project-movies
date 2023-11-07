import './PosterCarousel.css';
import '../Slider/Slider.css';
import Carousel from 'react-bootstrap/Carousel';

const PosterCarousel = ({ movies }) => {
  return (
    <div className="carousel-card swiper-slide">
      <h2 className="carousel-title">Movies</h2>
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
                className="slide-content"
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
    </div>
  );
};

export default PosterCarousel;
