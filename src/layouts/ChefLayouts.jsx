import React from 'react';
import Header from '../../pages/Shared/Header/Header';
import Footer from '../../pages/Shared/Footer/Footer';
import ChefsDetails from '../../pages/ChefsDetails/ChefsDetails';
import { useLoaderData, useParams } from 'react-router-dom';

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