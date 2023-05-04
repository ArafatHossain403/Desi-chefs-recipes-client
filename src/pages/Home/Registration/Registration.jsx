import React, { useContext } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(name,photo,email,password)
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);

        })
        .catch(error=>{
            console.log(error)
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
            <Form.Control type="text" name="name" placeholder="Enter Name"  required/>
            
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Photo Url</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter Photo URl"  required/>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email"  required/>    
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password"  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms and Conditions" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button> <br />
          <Form.Text className="text-secondary mb-3">
            Already Have an Account? <Link to={"/login"}>Login</Link>
            </Form.Text>
          
          
            <Form.Text className="text-success">
             
            </Form.Text>
            <Form.Text className="text-danger">
             
            </Form.Text>
        </Form>
      </Container>
            </Container>
            <Footer></Footer>

            
        </div>
    );
};

export default Registration;