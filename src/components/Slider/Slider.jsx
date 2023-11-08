import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.css';
import './Slider.css';
import { useEffect } from 'react';
import SliderCard from '../SliderCard/SliderCard';

const Slider = ({ movies }) => {
  useEffect(() => {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 5,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 50,
        draggable: true,
        dragColor: 'aqua',
      },
      keyboard: {
        enabled: true,
        pageUpDown: true,
      },
      mousewheel: {
        thresholdDelta: 10,
      },
    });
    swiper.slideNext();
  }, [movies.length]);
  return (
    <>
      <h2 className="swiper-title">Movies</h2>
      <div className="swiper">
        <div className="swiper-wrapper">
          {movies.map(movie => {
            const { id, poster_path, title, release_date } = movie;
            return (
              <SliderCard
                id={id}
                key={id}
                poster={poster_path}
                title={title}
                release={release_date}
              />
            );
          })}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default Slider;
