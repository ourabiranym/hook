import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import {Link} from "react-router-dom";

function Movie({movie}) {
  
  return (
    <div >
      <Card style={{ width: "400px" }}className='card'>
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          
          <ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} edit={false} half={false} value={movie.rating}/>
        <Button variant="warning">
          <Link to={`/movie/${movie.id} `}>Play</Link>
        </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie