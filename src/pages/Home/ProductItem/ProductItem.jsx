import React from 'react'
import Pd1 from '../../../assets/P2.webp'
import pd3 from '../../../assets/pd3.webp'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../ProductItem/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination,  Navigation} from 'swiper/modules';


const ProductItem = () => {
    return (
        <div className='product-items ml-[80px] mr-20 mt-2 flex flex-wrap gap-4'>

            <Swiper
                 slidesPerView={5}
                 spaceBetween={30}
                 navigation={true} 
                 modules={[Pagination,Navigation]}
                 className="mySwiper"
                 breakpoints={{
                    400:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                 

            >
                <SwiperSlide>
                 <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                    <div className="image overflow-hidden object-cover mb-4">
                        <img src={pd3} alt="" />
                    </div>
                    <div className="info text-center">
                        <h6>
                            <Link to='/' className='no-underline text-black transition-all'>
                                Fresh Fruits
                            </Link>
                        </h6>
                        <h3>
                            <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                Apple
                            </Link>
                        </h3>
                        <div className="rating ml-3 mt-2">
                            <Stack spacing={1}
                                className=''>
                                <Rating name="size-medium" defaultValue={4} readOnly />
                            </Stack>
                        </div>
                        <div className="price mt-2">
                            <h4>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    40Rs/kg
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide> <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                    <div className="image overflow-hidden object-cover mb-4">
                        <img src={pd3} alt="" />
                    </div>
                    <div className="info text-center">
                        <h6>
                            <Link to='/' className='no-underline text-black transition-all'>
                                Fresh Fruits
                            </Link>
                        </h6>
                        <h3>
                            <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                Apple
                            </Link>
                        </h3>
                        <div className="rating ml-3 mt-2">
                            <Stack spacing={1}
                                className=''>
                                <Rating name="size-medium" defaultValue={4} readOnly />
                            </Stack>
                        </div>
                        <div className="price mt-2">
                            <h4>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    40Rs/kg
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                        <div className="image overflow-hidden object-cover mb-4">
                            <img src={pd3} alt="" />
                        </div>
                        <div className="info text-center">
                            <h6>
                                <Link to='/' className='no-underline text-black transition-all'>
                                    Fresh Fruits
                                </Link>
                            </h6>
                            <h3>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    Apple
                                </Link>
                            </h3>
                            <div className="rating ml-3 mt-2">
                                <Stack spacing={1}
                                    className=''>
                                    <Rating name="size-medium" defaultValue={4} readOnly />
                                </Stack>
                            </div>
                            <div className="price mt-2">
                                <h4>
                                    <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                        40Rs/kg
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                <SwiperSlide>
                      <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                    <div className="image overflow-hidden object-cover mb-4">
                        <img src={pd3} alt="" />
                    </div>
                    <div className="info text-center">
                        <h6>
                            <Link to='/' className='no-underline text-black transition-all'>
                                Fresh Fruits
                            </Link>
                        </h6>
                        <h3>
                            <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                Apple
                            </Link>
                        </h3>
                        <div className="rating ml-3 mt-2">
                            <Stack spacing={1}
                                className=''>
                                <Rating name="size-medium" defaultValue={4} readOnly />
                            </Stack>
                        </div>
                        <div className="price mt-2">
                            <h4>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    40Rs/kg
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                        <div className="image overflow-hidden object-cover mb-4">
                            <img src={pd3} alt="" />
                        </div>
                        <div className="info text-center">
                            <h6>
                                <Link to='/' className='no-underline text-black transition-all'>
                                    Fresh Fruits
                                </Link>
                            </h6>
                            <h3>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    Apple
                                </Link>
                            </h3>
                            <div className="rating ml-3 mt-2">
                                <Stack spacing={1}
                                    className=''>
                                    <Rating name="size-medium" defaultValue={4} readOnly />
                                </Stack>
                            </div>
                            <div className="price mt-2">
                                <h4>
                                    <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                        40Rs/kg
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                <SwiperSlide>
                    <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                        <div className="image overflow-hidden object-cover mb-4">
                            <img src={pd3} alt="" />
                        </div>
                        <div className="info text-center">
                            <h6>
                                <Link to='/' className='no-underline text-black transition-all'>
                                    Fresh Fruits
                                </Link>
                            </h6>
                            <h3>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    Apple
                                </Link>
                            </h3>
                            <div className="rating ml-3 mt-2">
                                <Stack spacing={1}
                                    className=''>
                                    <Rating name="size-medium" defaultValue={4} readOnly />
                                </Stack>
                            </div>
                            <div className="price mt-2">
                                <h4>
                                    <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                        40Rs/kg
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                <SwiperSlide>
                    <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                        <div className="image overflow-hidden object-cover mb-4">
                            <img src={pd3} alt="" />
                        </div>
                        <div className="info text-center">
                            <h6>
                                <Link to='/' className='no-underline text-black transition-all'>
                                    Fresh Fruits
                                </Link>
                            </h6>
                            <h3>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    Apple
                                </Link>
                            </h3>
                            <div className="rating ml-3 mt-2">
                                <Stack spacing={1}
                                    className=''>
                                    <Rating name="size-medium" defaultValue={4} readOnly />
                                </Stack>
                            </div>
                            <div className="price mt-2">
                                <h4>
                                    <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                        40Rs/kg
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                <SwiperSlide>
                    <div className="item w-[200px] h-[340px] border p-4 shadow-md cursor-pointer transition-all ease-in-out hover:scale-105">
                        <div className="image overflow-hidden object-cover mb-4">
                            <img src={pd3} alt="" />
                        </div>
                        <div className="info text-center">
                            <h6>
                                <Link to='/' className='no-underline text-black transition-all'>
                                    Fresh Fruits
                                </Link>
                            </h6>
                            <h3>
                                <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                    Apple
                                </Link>
                            </h3>
                            <div className="rating ml-3 mt-2">
                                <Stack spacing={1}
                                    className=''>
                                    <Rating name="size-medium" defaultValue={4} readOnly />
                                </Stack>
                            </div>
                            <div className="price mt-2">
                                <h4>
                                    <Link to='/' className='no-underline text-black transition-all hover:text-green-500'>
                                        40Rs/kg
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

            </Swiper>

        </div>

    )
}

export default ProductItem
