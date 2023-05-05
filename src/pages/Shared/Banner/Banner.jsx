import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Container className='mt-2'>
                
                <Carousel className=''>
      <Carousel.Item interval={1000}>
        <img height={500}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=740&t=st=1683041440~exp=1683042040~hmac=dfa37f84bd42d0a608a1e6f6e91439d24f07924ca1aa5038cf8cb46cc64c3494"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-warning'>Bangladeshi Foods</h3>
          <h4 className='text-warning'>The fish is a vital part of the Bangladeshi culture, and needless to say, it is a must-try food for those traveling to Bangladesh.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={500}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/482121467/photo/indian-thali-with-fish.jpg?s=612x612&w=0&k=20&c=VN1wILU7RRC-ey9llvVpB7-YGemIz4LZfv3pO5g8qd4="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Different Chefs</h3>
          <h4 className='text-warning'>The fish is a vital part of the Bangladeshi culture, and needless to say, it is a must-try food for those traveling to Bangladesh.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img height={500}
          className="d-block w-100"
          src="https://www.getbengal.com/uploads/story_image/Origin-of-Biryani.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'> With Different Taste</h3>
          <h4 className='text-warning'>
          The fish is a vital part of the Bangladeshi culture, and needless to say, it is a must-try food for those traveling to Bangladesh.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Container>
            
        </div>
    );
};

export default Banner;