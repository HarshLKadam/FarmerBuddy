import React from 'react';
import banner1 from '../../../assets/home-banner4.jpeg';
import banner2 from '../../../assets/home-banner-2.jpg';
import banner3 from '../../../assets/home-banner1.webp';
import banner4 from '../../../assets/home-banner3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../HomeBanner/style.css';
import { Navigation, Keyboard,Autoplay } from 'swiper/modules';

const HomeBanner = () => {
  return (
    <div className="container py-2">
    <Swiper
      navigation={true}
      autoplay={{
        delay: 1000, 
        disableOnInteraction: true, 
      }}
      keyboard={true}
      modules={[Navigation, Keyboard,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img src={banner1} width={1600} alt="Banner 1" /></SwiperSlide>
      <SwiperSlide><img src={banner2} width={1600} alt="Banner 2" /></SwiperSlide>
      <SwiperSlide><img src={banner3} width={1600} alt="Banner 3" /></SwiperSlide>
      <SwiperSlide><img src={banner4} width={1600} alt="Banner 4" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default HomeBanner;
