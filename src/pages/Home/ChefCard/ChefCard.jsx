import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { name, picture, likes, recipes, experience, id } = chef;
  return (
    <div className="d-flex">
      <Card style={{ width: "18rem" }}>
        <LazyLoad >
        <Card.Img height={200} variant="top" src={picture} />
        </LazyLoad>
        
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Experience: {experience} Years</ListGroup.Item>
          <ListGroup.Item>Recipes: {recipes}</ListGroup.Item>
          <ListGroup.Item> Likes: {likes}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button variant="warning"><Link className="text-decoration-none" to={`/chefs/${id}`}>View Recipes Details</Link></Button>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;
