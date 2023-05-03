import React from 'react';
import { Card } from 'react-bootstrap';

const Recipes = ({recipe}) => {
    const {recipe_name, ingredients, instructions}= recipe;
    return (
        <div className='mb-4'>
             <Card border="primary" style={{ width: 'auto' }}>
        
          <Card.Body>
          <Card.Title>{recipe_name}</Card.Title>
          <Card.Header>Ingredients:</Card.Header>
          <Card.Text>{ingredients}</Card.Text>
          <Card.Header>Instructions:</Card.Header>
          <Card.Text>{instructions}</Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
};

export default Recipes;