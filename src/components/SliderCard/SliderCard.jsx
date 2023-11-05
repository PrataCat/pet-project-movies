import { NavLink } from 'react-router-dom';
import '../Slider/Slider.css';

const SliderCard = ({ id, poster, title, release }) => {
  return (
    <div key={id} id={id} className="swiper-slide">
      <span>bestseller</span>
      <NavLink to={`movies/${id}`} className="slide-content">
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
          alt="poster"
        />
        <h3>{title}</h3>
      </NavLink>
    </div>
  );
};

export default SliderCard;
