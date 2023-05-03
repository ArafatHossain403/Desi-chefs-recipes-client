import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const ChefsDetails = ({chefDetails}) => {
    const {name, picture, likes, recipes, experience,bio,bangladeshi_recipes}= chefDetails;
    // const {id} =useParams();
    // const chefDetails = useLoaderData();
    console.log(chefDetails);

    return (
        <div>
            <Container>
            <Row>
                <Col lg={9}>
                    <div>
                    <img height={300} src={picture} alt="" />
                    <h3>{name}</h3>


                    </div>
                    

                

                </Col>
                <Col lg={3}>

                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ChefsDetails;