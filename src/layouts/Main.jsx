import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { FaFacebook, FaHeart, FaInstagram, FaRegStar, FaSnapchat, FaStar, FaYoutube } from 'react-icons/fa';

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
            <ListGroup lg={4}>
      <ListGroup.Item><FaFacebook/> facebook </ListGroup.Item>
      <ListGroup.Item><FaInstagram/> intragram</ListGroup.Item>
      <ListGroup.Item><FaYoutube/> Youtube</ListGroup.Item>
      <ListGroup.Item><FaSnapchat/> snapchat</ListGroup.Item>
      
    </ListGroup>
            </Container>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;