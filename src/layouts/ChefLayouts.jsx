import React from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import ChefsDetails from '../pages/ChefsDetails/ChefsDetails';
import Footer from '../pages/Shared/Footer/Footer';

const ChefLayouts = () => {
    const {id} =useParams();
    const chefDetails = useLoaderData();
    
    return (
        <div>
             <Header></Header>
             
             
             <ChefsDetails key={id}
             chefDetails={chefDetails}
             >
                
             </ChefsDetails>
            
            


            <Footer></Footer>
            
        </div>
    );
};

export default ChefLayouts;