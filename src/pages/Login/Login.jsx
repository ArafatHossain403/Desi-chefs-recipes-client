import React, { useContext } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const {createUser} = useContext(AuthContext);
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password)
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
      <Container className="mx-auto bg-light w-25">
        <h3 className="mt-5 text-center"> Please Login </h3>
        <Form  onSubmit={handleSignIn} className="mt-5 mb-3 p-3">

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email"  required/>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password"  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox"  name="accept" label="Accept Terms and Conditions" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button> <br />
          <Form.Text className="text-secondary mb-3">
              Don't Have an Account? <Link to={"/registration"}>Register</Link>
            </Form.Text>
          
          
            
        </Form>
        <Button className='mb-3' variant="outline-warning"><FaGoogle />  Login With Google</Button>
        <Button className='mb-3' variant="outline-warning"><FaGithub />   Login With Github</Button>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Login;
