import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { BiLike} from "react-icons/bi";
import { GiCampCookingPot, GiCook } from "react-icons/gi";


const ChefCard = ({ chef }) => {
  const { name, picture, likes, recipes, experience,id } = chef;
  return (
    <div className="col-sm ml-2">
      <Card style={{ width: "16rem"}}>
        <LazyLoad >
        <Card.Img height={200} variant="top" src={picture} />
        </LazyLoad>
        
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><GiCook /> Experience: {experience} Years</ListGroup.Item>
          <ListGroup.Item><GiCampCookingPot/> Recipes: {recipes}</ListGroup.Item>
          <ListGroup.Item><BiLike/> Likes: {likes}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button variant="warning"><Link className="text-decoration-none" to={`/chefs/${id}`}>View Recipes Details</Link></Button>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;
