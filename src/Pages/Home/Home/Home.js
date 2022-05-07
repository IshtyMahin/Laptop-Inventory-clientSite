import React from 'react';
import Banner from '../Banner/Banner';
import Contactme from '../Contactme/Contactme';
import HomeHeader from '../HomeHeader/HomeHeader';
import Products from '../Products/Products';






const Home = () => {
    return (
        <div>


        <>
           <HomeHeader></HomeHeader>
            <Banner></Banner>
            <Products></Products>
            <Contactme></Contactme>
        </>

        </div>
    );
};

export default Home;