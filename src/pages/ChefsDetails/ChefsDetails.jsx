import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const ChefsDetails = ({chefDetails}) => {
    const {name,picture}= chefDetails;
    // const {id} =useParams();
    // const chefDetails = useLoaderData();
    console.log(chefDetails);

    return (
        <div>
            <Container>
            <Row>
                <Col lg={9}>
                <h3>{name}</h3>
                

                </Col>
                <Col lg={3}>
                    
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ChefsDetails;