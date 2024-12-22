import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner.jsx';
import ProductSlider from './ProductSlider/ProductSlider.jsx';
import Adsection from './AdSection/Adsection.jsx';
import ProductItem from './ProductItem/ProductItem.jsx';
import ItemTab from './ProductItem/ItemTab.jsx';

const Home = () => {
  return (
    <>
       <div className="banner">
       <HomeBanner />
       <ProductSlider />
       </div>
       <Adsection/>
       <ItemTab/>
       <ProductItem/>

        
    </>
  );
};

export default Home;
