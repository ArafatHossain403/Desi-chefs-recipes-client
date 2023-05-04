import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const [chefs, setChefs]= useState([]);

    useEffect(()=>{
        fetch('https://y-arafathossain403.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <Container>
            <h4 className='text-center'> Our All Bangladeshi Chefs And Their Recipes</h4>
                <div className='d-flex col-sm'>
                {
                    chefs.map(chef => <ChefCard
                    key={chef.id}
                    chef={chef}
                    >

                    </ChefCard>)
                }
                </div>

                </Container>
            
        </div>
    );
};

export default Chefs;