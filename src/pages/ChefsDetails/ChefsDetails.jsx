import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiLike} from "react-icons/bi";
import { GiCampCookingPot, GiCook } from "react-icons/gi";
import Recipes from '../Recipes/Recipes';



const ChefsDetails = ({chefDetails}) => {
    const {name, picture, likes, recipes, experience,bio,bangladeshi_recipes}= chefDetails;
    const recipes_number = bangladeshi_recipes;
    // const {id} =useParams();
    // const chefDetails = useLoaderData();
    console.log(chefDetails);

    return (
        <div>
            <Container className='bg-warning'>
            <Row className='mt-5'>
                <Col lg={6}>
                    <div >
                    <img className='rounded mt-3' height={300} src={picture} alt="" />
                    <h3 className='mt-2'>{name}</h3>
                    <p>{bio}</p>
                    <p><GiCook /> Experience: {experience} Years</p>
                    <p><GiCampCookingPot/> Recipes: {recipes}</p>
                    <p><BiLike/> Likes: {likes}</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <h2>Number of Recipes: {recipes_number.length}</h2>
                    {recipes_number.map(recipe =><Recipes key={recipe}
                    recipe={recipe}
                    >

                    </Recipes>)}
                    
                    
                    


                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ChefsDetails;