import React from 'react';
import './Best.css'
import { CiStar } from 'react-icons/ci';

const Bestwish = () => {
    return (
        <div className='   best bg-center bg-cover '>
            <div className=' bg-black/80 min-h-[530px] flex items-center '>
            <div className='max-w-7xl mx-auto   '>
                <div className='text-center mb-10 mt-20'>
                   <h2 className='text-yellow-400 text-2xl font-semibold'>WE DO BEST</h2>
                   <h2 className='text-3xl font-bold text-white'>THAN YOU WISH</h2>
                </div>
                <div className='mb-10 w-4/3'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center  '>
                        <div className='flex justify-center items-center gap-8 w-[350px]'>
                            <div  className='w-14 h-14 bg-yellow-400 rounded-full '>
                                <span className='font-bold '><CiStar className='m-4.5 text-xl ' /></span>
                            </div>
                            <div className='space-y-1'>
                                <h2 className='text-xl text-yellow-400 font-semibold'>FAST BOOKING</h2>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                         <div className='flex justify-center items-center gap-4 w-[350px]'>
                            <div  className='w-14 h-14 bg-yellow-400 rounded-full '>
                                <span className='font-bold '><CiStar className='m-4.5 text-xl ' /></span>
                            </div>
                            <div className='space-y-1'>
                                <h2 className='text-xl text-yellow-400 font-semibold'>FAST BOOKING</h2>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                         <div className='flex justify-center items-center gap-4 w-[350px]'>
                            <div  className='w-14 h-14 bg-yellow-400 rounded-full '>
                                <span className='font-bold '><CiStar className='m-4.5 text-xl ' /></span>
                            </div>
                            <div className='space-y-1'>
                                <h2 className='text-xl text-yellow-400 font-semibold'>FAST BOOKING</h2>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                         <div className='flex justify-center items-center gap-4 w-[350px]'>
                            <div  className='w-14 h-14 bg-yellow-400 rounded-full '>
                                <span className='font-bold '><CiStar className='m-4.5 text-xl ' /></span>
                            </div>
                            <div className='space-y-1'>
                                <h2 className='text-xl text-yellow-400 font-semibold'>FAST BOOKING</h2>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                     <div>
                        <div></div>
                        <div></div>
                     </div>
            </div>
        </div>
        </div>
    );
};

export default Bestwish;