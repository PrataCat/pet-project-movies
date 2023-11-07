import { NavLink } from 'react-router-dom';
import '../Slider/Slider.css';
import Carousel from 'react-bootstrap/Carousel';

const SliderCard = ({ id, poster, title, release }) => {
  return (
    <Carousel.Item key={id} id={id} className="swiper-slide">
      <NavLink to={`movies/${id}`} className="slide-content">
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
          alt="poster"
          className="img-slider"
        />
        <h3>{title}</h3>
      </NavLink>
    </Carousel.Item>
  );
};

export default SliderCard;
