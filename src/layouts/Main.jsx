import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Row>
                    <Col lg={10}>
                        <Chefs></Chefs>
                    </Col>
                    <Col lg={2}>
                        <Button>Login With Google</Button>
                        <Button>Login With Github</Button>
                    </Col>
                </Row>
            </Container>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;