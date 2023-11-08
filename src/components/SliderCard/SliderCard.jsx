const SliderCard = ({ id, poster, title, release }) => {
  return (
    <div key={id} id={id} className="swiper-slide swiper-card-wrap">
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
        alt="poster"
        className="swiper-img"
      />
      {title ? (
        <h3 className="swiper-card-title">{title}</h3>
      ) : (
        <h3 className="swiper-card-title">No title</h3>
      )}
    </div>
  );
};

export default SliderCard;
