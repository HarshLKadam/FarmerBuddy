import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import Footer from './components/Footer/Footer';
import ProductListing from './pages/ProductListing/ProductListing';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Login from './pages/Login/Login';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ProductImage from './pages/ProductDetails/productImage';
import { IoCloseSharp } from "react-icons/io5";
import ProductContent from './pages/ProductDetails/ProductContent';
import Register from './pages/Register/Register';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



import CartPanel from './components/CartPanel/CartPanel';

const MyContext = createContext();

function App() {

  const [openProductModel, setOpenProductModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');

  const handleClose = () => {
    setOpenProductModel(false);
  };

  //Drawer code for cart Pannel
  const [openCartPanel, setOpenCartPanel] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  // const [cityList, setCityList] = useState([])

  // const getCountry = (url) => {
  //   const apiKey = import.meta.env.VITE_CITY_API_KEY;

  //   axios.get(url, {
  //     headers: {
  //       'X-CSCAPI-KEY': apiKey
  //     }
  //    })
  //   .then((response) => {
  //     const citys = response.data;
  //     const cityname = citys.map((city) =>(
  //       city.name
  //     ) )
  //     console.log(cityname)
  //     setCityList(cityname);

  //   })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  // useEffect(() => {
  //   const url = import.meta.env.VITE_CITY_API_URL
  //   getCountry(url);
  // }, []);


  const values = {
    // cityList,
    setOpenProductModel,
    setOpenCartPanel
  }

  return (
    <>

      {/* context code and react router code  */}
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/productlisting' element={<ProductListing />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>


      {/* Product model page code  */}
      <Dialog
        open={openProductModel}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='proudctdetailmodel'
      >
        <div className="flex items-center w-full relative gap-4">

          <div className="close-button absolute top-6 right-10 ">
            <button className='border p-1 rounded-full bg-green-500'
              onClick={handleClose}>
              <IoCloseSharp style={{ fontSize: '30px', color: "black" }} />
            </button>
          </div>

          <div className=" part-1 w-[40%] p-4">
            <ProductImage />
          </div>

          <div className="part-2 w-[60%] p-4">
            <ProductContent />
          </div>

        </div>
      </Dialog>



      {/* cart pannel code  */}

      <Drawer open={openCartPanel} onClose={toggleDrawer(false)} anchor={'right'}
        className='cart-pannel'>

        <div className="top-cart-page flex items-center justify-between py-3 px-4 gap-60 border-b border-b-gray-500">
          <div className="cart-heading">
            <h4 className='font-bold '>Shopping cart</h4>
          </div>

          <div className="close-button ">
            <button className=''>
              <IoCloseSharp style={{ fontSize: '30px', color: "black" }} />
            </button>
          </div>
        </div>

        <CartPanel />
      </Drawer>

    </>
  );
}

export default App;

export { MyContext }

