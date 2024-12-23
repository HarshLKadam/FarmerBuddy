import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner.jsx';
import ProductSlider from './ProductSlider/ProductSlider.jsx';
import Adsection from './AdSection/Adsection.jsx';
import ProductItem from './ProductItem/ProductItem.jsx';
import ItemTab from './ProductItem/ItemTab.jsx';
import DairyProduct from './ProductItem/DairyProduct.jsx';
import GroceryItem from './ProductItem/groceryItem.jsx';
import Adsection2 from './AdSection/Adsection2.jsx';

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
       <DairyProduct/>
       <GroceryItem/>
       <Adsection2/>
        
    </>
  );
};

export default Home;
