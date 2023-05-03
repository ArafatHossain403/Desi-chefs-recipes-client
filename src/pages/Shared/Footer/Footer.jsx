import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container className='bg-dark '>
                <Row className=' mt-3'>
                    <Col className='text-light' lg={3}>
                        <h3>About Us</h3>
                        <p>
                        Browse our extensive collection of recipes that includes thousands of recipes for cookies, cakes, breads, rolls and main dishes.
                        </p>
                    </Col>
                    <Col className='text-light'  lg={3}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a  className='text-decoration-none text-white-50' href="">About Us</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Submit Your Recipe</a> </li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Privacy Policy</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Terms & Conditions</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Submit Your Recipes</a></li>
                        </ul>
                    </Col>
                    <Col className='text-light' lg={3}>
                    <h3>Courses</h3>
                        <ul >
                            <li> <a className='text-decoration-none text-white-50' href=""> About Us</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Appetizers</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Breads & Rolls</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Condiments</a></li>
                            <li> <a  className='text-decoration-none text-white-50' href="">Desserts</a></li>
                        </ul>
                    </Col>
                    <Col className='text-light'  lg={3}>
                        <h3>Latest Recipes</h3>
                        <div className='d-flex'>
                            <img  height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CMGyuF2Ws1oXb70pDz4DwNBWn_sG6rG0TvA0mF72&s" alt="" />
                            <a  className='text-decoration-none text-light' href=""> <h5 className='ml-2'>Bengali fish curry</h5></a>
                           
                        </div>
                        
                        <div className='d-flex'>
                            <img  height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qM2g41UNrA8TCNGC9qB4NJl39ijm8ccRcg&usqp=CAU" alt="" />
                            <a  className='text-decoration-none text-light' href=""> <h5>Pora  Fish Vorta</h5></a>
                            
                        </div>
                    </Col>
                    
                </Row>


            <p className='text-center text-light mt-5'><small>@copyright  Desi Chef Recipes</small></p>

            </Container>
            
        </div>
    );
};

export default Footer;