import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.albumImage} />
      <Card.Body>
        <Card.Title>{props.trackName}</Card.Title>
        <Card.Subtitle>{props.artistName}</Card.Subtitle>
        <br></br>
        <Button onClick={() => props.handleAddToFavorites({ albumImage: props.albumImage, trackName: props.trackName, artistName: props.artistName })} variant="dark">Add to Favorites</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
