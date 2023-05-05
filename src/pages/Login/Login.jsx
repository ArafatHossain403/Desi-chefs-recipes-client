import React, { useContext, useState } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const auth =getAuth(app);
    
    const provider =new GoogleAuthProvider();
    const gitProvider= new GithubAuthProvider();


    const handleGithubSignIn =()=>{
        signInWithPopup(auth, gitProvider)
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setSuccess('login in successful');
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


    const handleGoogleSignIn =()=> {
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })


    }

    //const {loggedUser} = useContext(AuthContext);
    const [regError, setError]=  useState('');
    const [success, setSuccess]=  useState('');
    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            setSuccess('user login successful');
            setError('');
            event.target.reset();
            console.log(loggedUser);

        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
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
          <Form.Group>
          <Form.Text className="text-danger">
             {regError}
            </Form.Text>
            <Form.Text className="text-success">
             {success}
            </Form.Text>

          </Form.Group>
          

         
          <Button variant="primary" type="submit">
            Login
          </Button> <br />
          <Form.Text className="text-secondary mb-3">
              Don't Have an Account? <Link className="fw-semibold" to={"/registration"}>Register</Link>
            </Form.Text>
          
          
            
        </Form>
        <Button onClick={handleGoogleSignIn} className='mb-3' to={'/'} variant="outline-success"><FaGoogle />  Login With Google</Button>
        <Button onClick={handleGithubSignIn}className='mb-3' variant="outline-success"><FaGithub />   Login With Github</Button>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Login;
