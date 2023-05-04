import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Error = () => {
    return (
        <div>
            <Header></Header>
            
            <Container className='w-50 mx-auto'>
                <img height={500} src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Error;