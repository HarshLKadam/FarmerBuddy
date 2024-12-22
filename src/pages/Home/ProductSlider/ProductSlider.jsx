import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; 
import p1 from '../../../assets/p1.jpeg';


const ProductSlider = () => {
  return (
    <div className='pl-[150px] pr-[150px]'>
    <Swiper
      modules={[Navigation, Pagination]} 
      spaceBetween={1}
      slidesPerView={5} 
      navigation
      pagination={{ clickable: true }}
      className="trending-product mt-4 border"
    >
        <SwiperSlide>
          <div className="item ml-[40px] w-[150px] border-t rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 ">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="item w-[150px] border-t  rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-[150px] border-t  rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-[150px] border-t rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-[150px] border-t  rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-[150px] border-t  rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-[150px] border-t bo rounded-lg overflow-hidden bg-white hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <Link className="block no-underline" to='/'>
              <img
                className="w-full h-28 object-cover rounded-t-lg"
                src={p1}
                alt=''
              />
              <p className="text-center text-black py-2 font-medium">Tommato</p>
            </Link>
          </div>
        </SwiperSlide>

    
    </Swiper>
    </div>
  );
};

export default ProductSlider;
