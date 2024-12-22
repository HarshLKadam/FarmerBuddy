import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner.jsx';
import ProductSlider from './ProductSlider/ProductSlider.jsx';
import Adsection from './AdSection/Adsection.jsx';

const Home = () => {
  return (
    <>
       <div className="banner">
       <HomeBanner />
       <ProductSlider />
       </div>

       <Adsection/>

        
    </>
  );
};

export default Home;
