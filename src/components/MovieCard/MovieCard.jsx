import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './MovieCard.css';

const MovieCard = ({ id, poster, title, release }) => {
  return (
    <Col key={id} className="movie-card-wrap">
      <Card key={id} id={id}>
        <Card.Img
          variant="top"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
          alt="poster"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>{release}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;

// {
//   "adult": false,
//   "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
//   "id": 934433,
//   "title": "Scream VI",
//   "original_language": "en",
//   "original_title": "Scream VI",
//   "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
//   "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
//   "media_type": "movie",
//   "genre_ids": [
//     27,
//     9648,
//     53
//   ],
//   "popularity": 609.941,
//   "release_date": "2023-03-08",
//   "video": false,
//   "vote_average": 7.374,
//   "vote_count": 684
// },
