import React from 'react'
import '../slider/Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow";

import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Autoplay,EffectCoverflow  } from 'swiper';

import { SliderProducts } from '../../data/products';
import { delay } from 'framer-motion';

const Slider = () => {
    return (
        <div className="container">

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, Autoplay,EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                navigation={true}
                effect="fade"
                loopFillGroupWithBlank={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {

                    SliderProducts.map((product, i) => (

                        <SwiperSlide className='swiper-slide'>
                            <div className="left">

                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                                <span>{product.price}$</span>
                                <div>Shop Now</div>

                            </div>
                            <div className="img">                                <img src={product.img} alt="" />
                            </div>

                        </SwiperSlide>
                        

                    ))}


            </Swiper>



        </div>
    )
}
export default Slider