import React from 'react'
import HomeBanner from '../Home/HomeBanner/HomeBanner.jsx'
import Ad1 from '../../assets/ad1.jpg'
import Ad2 from '../../assets/ad2.jpg'
import '../Home/HomeCss.css'
import Slider from "react-slick";


const Home = () => {
  var settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <HomeBanner />

      <div className="homeProducts">
        <div className="ad-container">
          <div className="left">
            <img src={Ad1} alt="" />
            <img src={Ad2} alt="" />
          </div>
        </div>

        <div className="right">

          <div className="head">
            <div className="title">
              <span className='cap'>BEST SELLERS </span><br />
              <span className='bottom'> Do not miss this the current offers until the end of this Month</span>
            </div>
            <div className="view-all">
              <button> View All</button>
            </div>
          </div>

          <div className="product">
            <Slider {...settings}>
              <div className=" product-items item">
                 
              </div>
            </Slider>
          </div>

        </div>

      </div>
    </>
  )
}

export default Home
