import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from 'react-icons/fa';

const Extra = () => {
    return (
        <Row>
            
                    <Col lg={8}> 
                    <h3 className='text-center mt-5'>Recipes by Ingredients</h3>         
                    <div className='d-flex text-center mx-auto'>
                            <div className=' text-center m-2 border border-primary p-4'>
                                <img height={80} src="https://t4.ftcdn.net/jpg/00/61/26/97/360_F_61269720_3hbvPdN5vmIcSmT6GNWYPtm1WPVfG9Z9.jpg" alt="" />
                                <h4>Beef</h4>
                                <p>(2 recipes)</p>
                            </div>
                            <div className=' text-center m-2 border border-primary p-4'>
                                <img height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hzWhcFqThpDJ3tg6CG6ev2WSABE4SHzkvA5jP9A&s" alt="" />
                                <h4>Egg</h4>
                                <p>(5 recipes)</p>
                            </div> 
                            <div className=' text-center m-2 border border-primary p-4'>
                                <img height={80} width={80} src="https://media.istockphoto.com/id/1366752713/vector/cooked-rice-in-a-blue-bowl-isolated-on-white.jpg?s=612x612&w=0&k=20&c=isW-ZpZcF78eixAKhdUB9vnfgsaSIALsH9EfkNgdlPc=" alt="" />
                                <h4>Rice</h4>
                                <p>(8 recipes)</p>
                            </div>
                            <div className=' text-center m-2 border border-primary p-4'>
                                <img height={80} width={80} src="https://t4.ftcdn.net/jpg/01/01/35/85/240_F_101358592_g9W3J4a9jdmVu0scgqaYq9fCqmKFLB6s.jpg" alt="" />
                                <h4>Fish</h4>
                                <p>(7 recipes)</p>
                            </div>
                                        
                        </div>                           
                    </Col>
                    

                    <Col lg={4}>
                    <h4 className='text-center mt-5'>Follow Us on</h4>
                    <ListGroup>
                        
      <ListGroup.Item><FaFacebook className='mr-3'/> facebook </ListGroup.Item>
      <ListGroup.Item><FaInstagram/> intragram</ListGroup.Item>
      <ListGroup.Item><FaYoutube/> Youtube</ListGroup.Item>
      <ListGroup.Item><FaSnapchat/> snapchat</ListGroup.Item>
      
    </ListGroup>
                        
                    </Col>
                    
                </Row>

            
    );
};

export default Extra;