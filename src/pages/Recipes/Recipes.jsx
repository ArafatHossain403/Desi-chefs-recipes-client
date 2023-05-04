import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsBookmark} from "react-icons/bs";
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({recipe}) => {
    const {recipe_name, ingredients, instructions, rating}= recipe;
    const notify = () => toast("Added to favorite recipe");
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

            <Button onClick={notify}><FaHeart/></Button>
            <ToastContainer />
            </div>

          </Card.Body>
          </Card>
        </div>
    );
};

export default Recipes;