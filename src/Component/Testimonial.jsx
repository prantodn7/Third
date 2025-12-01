
import './Testi.css'
import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// react slict
import React, { Component } from "react";
import Slider from "react-slick";


const Testimonial = () => {
    const [testi, setTesti] = useState([])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    // };
    useEffect(() => {
        fetch('Testi.json')
            .then(res => res.json())
            .then(data => setTesti(data))
    }, [])
    return (
        <div className='test  text-black '>
            <div className='bg-white/80 '>
                <div className=' max-w-7xl mx-auto   '>
                    <h2 className='text-4xl text-center pt-22 pb-10 text-black font-bold'>Testimonials</h2>
                    <div className=''>
                        <Swiper
                           
                        
                        slidesPerView={1}
                        
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                        >
                        <div className=' flex-col justify-center items-center text-center mb-36'>
                            {
                                testi.map(test =>
                                    <SwiperSlide test={test}>
                                        <div className="card  pb-36">
                                            <div className="card-body text-start w-96 bg-white rounded-2xl p-5 mx-auto space-y-3">
                                                <p className='black'>{test.comment}</p>
                                                <div className='flex justify-start items-center gap-5'>
                                                    <img className='w-16 h-16 rounded-full' src={test.photo} alt="" />
                                                    <div className='space-y-2'>
                                                        <h2 className='text-xl font-semibold text-gray-600'>{test.name}</h2>
                                                        <p className='text-gray-500'>{test.occupation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </div>
                        <div className="autoplay-progress mb-10" slot="container-end" ref={progressCircle}  >

                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>

                </div>
                {/* reactslick------------ */}

                {/* <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div> */}
            </div>
        </div>
        </div >
    );
};

export default Testimonial;