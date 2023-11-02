import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const MovieCard = ({ id, poster, title, release }) => {
  return (
    <Col key={id}>
      <Card key={id} id={id}>
        <Card.Img
          variant="top"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{release}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
