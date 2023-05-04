import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import { Button, Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col lg={12}>
                        <Chefs></Chefs>
                    </Col>
                    
                </Row>
            </Container>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;