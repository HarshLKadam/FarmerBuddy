import React from 'react'
import HomeBanner from '../Home/HomeBanner/HomeBanner.jsx'
import Ad1 from '../../assets/ad1.jpg'
import Ad2 from '../../assets/ad2.jpg'
import '../Home/HomeCss.css'
import product1 from '../../assets/p1.jpeg'
import product2 from '../../assets/product2.jpg'
import Slider from "react-slick";


const Home = () => {
  var productSlider = {

    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <HomeBanner />

      <div className="home">

        <div className="left">
          <img src={Ad1} alt="" />
          <img src={Ad2} alt="" />
        </div>

        <div className="right">

          <div className='info'>
            <div className="head">
              <span>BEST SELLERS</span>
              <button> View All</button>
            </div>
            <div className="slogan">
              Do not miss this offer
            </div>
          </div>


          <div className="product">

            <div className="items">
              <img src={product1} alt="" />
              <div className="desc">
                <span>Tommato</span>
                <span>20Rs/KG</span>
              </div>
             
            </div>

            <div className="items">
              <img src={product2} alt="" />
              <div className="desc">
                <span>Onion</span>
                <span>40Rs/KG</span>
              </div>
           
            </div>
            
            <div className="items">
              <img src={product1} alt="" />
              <div className="desc">
                <span>Tommato</span>
                <span>20Rs/KG</span>
              </div>
            </div>

            <div className="items">
              <img src={product1} alt="" />
              <div className="desc">
                <span>Tommato</span>
                <span>20Rs/KG</span>
              </div>
            </div>

            <div className="items">
              <img src={product1} alt="" />
              <div className="desc">
                <span>Tommato</span>
                <span>20Rs/KG</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Home
