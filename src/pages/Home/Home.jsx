import React from 'react';
import HomeBanner from '../Home/HomeBanner/HomeBanner.jsx';
import Ad1 from '../../assets/ad1.jpg';
import Ad2 from '../../assets/ad2.jpg';
import '../Home/HomeCss.css';
import product1 from '../../assets/p1.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Corrected imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <>
      {/* <HomeBanner />

      <div className="home">
        <div className="left">
          <img src={Ad1} alt="" />
          <img src={Ad2} alt="" />
        </div>

        <div className="right">
          <div className="info">
            <div className="head">
              <span>BEST SELLERS</span>
              <button> View All</button>
            </div>
            <div className="slogan">Do not miss this offer</div>
          </div>

          <div className="product">
          <Swiper
      slidesPerView={3}
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
