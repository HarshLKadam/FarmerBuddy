import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../assets/home-banner4.jpeg';
import banner2 from '../../assets/home-banner-2.jpg';
import banner3 from '../../assets/home-banner1.webp';
import banner4 from '../../assets/home-banner3.jpg';
import '../HomeBanner/HomeBannerCss.css'

const HomeBanner = () => {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:true,
        dots:true,
      };

  return (
    <div className="home-banner">
      <Slider {...settings}>
        <div className="item">
          <img src={banner1} alt="Farmer Buddy - Banner 1" />
        </div>
        <div className="item">
          <img src={banner2} alt="Farmer Buddy - Banner 2" />
        </div>
        <div className="item">
          <img src={banner3} alt="Farmer Buddy - Banner 3" />
        </div>
        <div className="item">
          <img src={banner4} alt="Farmer Buddy - Banner 4" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
