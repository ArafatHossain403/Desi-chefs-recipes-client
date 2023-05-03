import React from 'react';
import { Card } from 'react-bootstrap';
import { BsBookmark} from "react-icons/bs";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipes = ({recipe}) => {
    const {recipe_name, ingredients, instructions, rating}= recipe;
    return (
        <div className='mb-4'>
             <Card border="primary" style={{ width: 'auto' }}>
        
          <Card.Body>
          <Card.Title>{recipe_name}</Card.Title>
          <Card.Header>Ingredients:</Card.Header>
          <Card.Text>{ingredients}</Card.Text>
          <Card.Header>Instructions:</Card.Header>
          <Card.Text>{instructions}</Card.Text>
          <div className='d-flex'>
            <div className='flex-grow-1'>
                <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                readonly
                placeholderSymbol={<FaStar className='text-warning' />}
                fullSymbol={<FaStar />}></Rating>
                <span className='text-muted pl-2'>{rating}</span>
            </div>

            <BsBookmark/>
            </div>

          </Card.Body>
          </Card>
        </div>
    );
};

export default Recipes;