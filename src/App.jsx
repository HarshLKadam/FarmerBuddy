import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'

const MyContext = createContext();

function App() {

  const [cityList, setCityList] = useState([])

  const getCountry = (url) => {
    const apiKey = import.meta.env.VITE_CITY_API_KEY;

    axios.get(url, {
      headers: {
        'X-CSCAPI-KEY': apiKey
      }
     })
    .then((response) => {
      const citys = response.data;
      const cityname = citys.map((city) =>(
        city.name
      ) )
      console.log(cityname)
      setCityList(cityname);

    })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    const url = import.meta.env.VITE_CITY_API_URL
    getCountry(url);
  }, []);


  const values = {
      cityList,
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext }

