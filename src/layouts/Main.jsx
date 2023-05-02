import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Chefs></Chefs>


            <Footer></Footer>
        </div>
    );
};

export default Main;