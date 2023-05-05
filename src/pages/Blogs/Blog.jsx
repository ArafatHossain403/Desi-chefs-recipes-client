import React from 'react';
import "./Blog.css"
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const Blog = () => {
    return (
        <div>
            <Header></Header>
            
            <Container>
            <div className='blog-banner'>
            <h2>Blog Page</h2>
            </div>

            <div className='question-div'>
                <div className='question-div-ans' >
                    <h3>Tell us the differences between uncontrolled and controlled components.</h3>
                    <p> controlled component, the form data is handled by the state within the component.Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component.</p>
                </div>
                <div className='question-div-ans' >
                    <h3>How to validate React props using PropTypes</h3>
                    <p>React PropTypes are a good way to help you catching bugs by validating data types of values passed through props. They also offer possibilities to flag props as mandatory or set default values. They provide a great benefit with little effort.</p>
                </div>
                <div className='question-div-ans' >
                    <h3>Tell us the difference between nodejs and express js.</h3>
                    <p>Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Simply put, Node.js is an open-source and multi-platform environment that lets you build server-side applications and tools by using JavaScript. Express.js is a minimal, flexible, and open-source Node.js web application framework. You can use it on top of Node.js to ensure better web functionality. Express is the most popular Node.js web framework. </p>
                </div>
                <div className='question-div-ans' >
                    <h3>What is a custom hook, and why will you create a custom hook?</h3>
                    <p>Hooks are reusable functions.When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
                </div>
                
                
            </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blog;