import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <Button className='mb-3' variant="outline-warning"><FaGoogle />  Login With Google</Button>
            <Button className='mb-3' variant="outline-warning"><FaGithub />   Login With Github</Button> 
        </div>
    );
};

export default RightNav;