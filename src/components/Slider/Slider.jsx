import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';
import { useEffect } from 'react';
import SliderCard from '../SliderCard';

const Slider = ({ movies }) => {
  useEffect(() => {
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      // grabCursor: true,
      spaceBetween: 15,
      centeredSlides: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        // slideShadows: false,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        // hide: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        // onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        // eventsTarget: 'swiper-container',
        thresholdDelta: 10,
      },
      breakpoints: {
        460: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4.6,
        },
      },
    });
    swiper.slideNext();
  }, []);

  return (
    <main>
      <h2>Slider</h2>
      <div className="content">
        <h2>Welcome to Online Book Store</h2>
        <p>
          {' '}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quam magnam obcaecati error consequatur repellat fugiat, deleniti nisi
          eum voluptates.
        </p>
      </div>
      <div className="swiper-container">
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
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </main>
  );
};

export default Slider;
