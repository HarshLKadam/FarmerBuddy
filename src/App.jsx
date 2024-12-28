import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const MyContext = createContext();

function App() {

  const [openProductModel, setOpenProductModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');

  const handleClose = () => {
    setOpenProductModel(false);
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
    setOpenProductModel
  }

  return (
    <>

      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/productlisting' element={<ProductListing />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

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
            <ProductContent/>
          </div>

        </div>
      </Dialog>

    </>
  );
}

export default App;

export { MyContext }

