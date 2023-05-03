import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chefs = () => {
    const [chefs, setChefs]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <Container>
            <h4 className='text-center'> Our All Bangladeshi Chefs And Their Recipes</h4>
                {
                    chefs.map(chef => <p 
                    key={chef.id}
                    >
                        <Link>{chef.name}</Link>

                    </p>)
                }

                </Container>
            
        </div>
    );
};

export default Chefs;