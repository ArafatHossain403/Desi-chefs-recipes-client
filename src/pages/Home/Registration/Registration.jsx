import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const [regError, setError]=  useState('');
    const [success, setSuccess]=  useState('');


    const handleRegister = event =>{

        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('Please add at least one number');
            return
        }
        else if(password.length<6){
            setError('Please add at least 6 character')
        }

        
        console.log(name,photo,email,password)
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            event.target.reset();
            setSuccess('user has created successfully');

        })
        .catch(error=>{
            console.log(error.message)
            setError(error)
            
        })
         


    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Container className="mx-auto w-50">
        <h3 className="mt-5"> Please Register </h3>
        <Form onSubmit={handleRegister} className="mt-5 mb-3 bg-light border p-3">

          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control  required type="text" name="name" placeholder="Enter Name"/>
            
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Photo Url</Form.Label>
            <Form.Control  required type="text" name="photo" placeholder="Enter Photo URl" />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  required type="email" name="email" placeholder="Enter email"/>    
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  required type="password" name="password" placeholder="Password"/>
          </Form.Group>
          <Form.Group>
          <Form.Text className="text-danger">
             {regError}
            </Form.Text>
            <Form.Text className="text-success">
             {success}
            </Form.Text>

          </Form.Group>
          
          
          <Button variant="primary" type="submit">
            Register
          </Button> <br />
          <Form.Text className="text-secondary mb-3">
            Already Have an Account? <Link className='fw-semibold' to={"/login"}>Login</Link>
            </Form.Text>
          
          
            
            
        </Form>
      </Container>
            </Container>
            <Footer></Footer>

            
        </div>
    );
};

export default Registration;