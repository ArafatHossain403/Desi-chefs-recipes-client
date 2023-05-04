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
                    <h3>When should you use context API?</h3>
                    <p> when some data needs to be accessible by many components  context is primarily used at different nesting levels. Prop drilling occurs in situations where you’re looking to get the state from the top of your react tree to the bottom and you end up passing props through components that do not necessarily need them.</p>
                </div>
                <div className='question-div-ans' >
                    <h3>What is a custom hook?</h3>
                    <p>Custom hook is made by developer which is reuseable if different state and it start with use and also can fetch data.</p>
                </div>
                <div className='question-div-ans' >
                    <h3>What is useRef?</h3>
                    <p>useRef returns a mutable ref object where the object has a property called .current. And these values are accessed from the current property of the returned object. </p>
                </div>
                <div className='question-div-ans' >
                    <h3>What is useMemo?</h3>
                    <p>It is a another hook in react that lets you cache the result of a calculation between re-renders and useMemo Hook returns a memoized value. </p>
                </div>
                
                
            </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blog;