import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.css';
import './Slider.css';
import { useEffect } from 'react';
import SliderCard from '../SliderCard/SliderCard';

const Slider = ({ movies, page_title, selector }) => {
  useEffect(() => {
    var swiper = new Swiper(`.${selector}`, {
      slidesPerView: 5,
      slidesPerGroup: 2,
      spaceBetween: 15,
      navigation: {
        nextEl: `.${selector}-btn-next`,
        prevEl: `.${selector}-btn-prev`,
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
        thresholdDelta: 70,
      },
    });
    swiper.slidePrev();
  });

  return (
    <>
      <h2 className="swiper-title">{page_title}</h2>
      <div className={selector}>
        <div className="swiper-wrapper">
          {movies.map(movie => {
            const { id, poster_path, title, name } = movie;
            return (
              <SliderCard
                id={id}
                key={id}
                poster={poster_path}
                title={title ? title : name}
              />
            );
          })}
        </div>

        <div className={`swiper-button-prev ${selector}-btn-prev`}></div>
        <div className={`swiper-button-next ${selector}-btn-next`}></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default Slider;
