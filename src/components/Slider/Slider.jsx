import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';
import { useEffect } from 'react';
import SliderCard from '../SliderCard';
import PosterCarousel from '../PosterCarousel';

const Slider = ({ movies }) => {
  useEffect(() => {
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 4,
      // slidesPerGroup: 2,
      spaceBetween: 15,
      centeredSlides: false,
      oneWayMovement: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },

      loop: true,
      loopAddBlankSlides: false,
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
  }, []);
  return (
    <section className="in-trend-wrap">
      <div className="swiper-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            <PosterCarousel movies={movies} />
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
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Slider;
