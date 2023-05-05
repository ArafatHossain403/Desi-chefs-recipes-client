import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import Banner from '../pages/Shared/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import Footer from '../pages/Shared/Footer/Footer';
import Extra from '../pages/Shared/Extra/Extra';



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
            <Container >
            <Extra></Extra>
            </Container>
            
           
            <Footer></Footer>
        </div>
    );
};

export default Main;