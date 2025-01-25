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

import Dialog from '@mui/material/Dialog';
import ProductImage from './pages/ProductDetails/productImage';
import ProductContent from './pages/ProductDetails/ProductContent';
import Register from './pages/Register/Register';

import { IoCloseSharp } from "react-icons/io5";
import CartPage from './pages/CartPage/CartPage';
import Verify from './pages/Login/Verify/Verify';

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/Login/ForgotPassword/ForgotPassword';
import CheckOut from './pages/CheckOut/CheckOut';
import MyAccount from './pages/MyAccountPage/MyAccount';
import UserAccount from './pages/MyAccountPage/UserAccount';
import ListPage from './pages/MyAccountPage/ListPage';
import MyOrders from './pages/MyAccountPage/MyOrders';
import { fetchDataFromApi } from './utils/api';

const MyContext = createContext();

function App() {

  const [openProductModel, setOpenProductModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');
  const[isLogin,setisLogin]=useState(false)
  const[userData,setUserData]=useState(null)

  const apiUrl=import.meta.env.VITE_API_URL;

  const handleClose = () => {
    setOpenProductModel(false);
  };

  //Drawer code for cart Pannel
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const opentoast = (status, msg) => {
    if (status == "success") {
      toast.success(msg);
    }
    
    if(status=='error'){
      toast.error(msg)
    }
  }

  useEffect(()=>{
    const token=localStorage.getItem('accessToken')
    if(token!==undefined && token !==null && token !==""){
      setisLogin(true)

      fetchDataFromApi(`/api/user/user-details?token=${localStorage.getItem('accessToken')}`)
      .then((res)=>{
        setUserData(res.data)
      })
    }
    else{
      setisLogin(false)
    }
  },[isLogin])

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
    setOpenCartPanel,
    openCartPanel,
    toggleDrawer,
    opentoast,
    isLogin,
    setisLogin,
    apiUrl,
    userData,
    setUserData
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
            <Route path='/cart' element={<CartPage />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/useraccount' element={<UserAccount />} />
            <Route path='/userlist' element={<ListPage />} />
            <Route path='/order' element={<MyOrders />} />
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

      <Toaster
        reverseOrder={false}
      />

    </>
  );
}

export default App;

export { MyContext }

