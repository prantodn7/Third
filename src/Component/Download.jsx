import React from 'react';
import img1 from '../assets/assets/website/pro1.jpeg'
import img2 from '../assets/assets/website/pro2.jpeg'
import img3 from '../assets/assets/carbooking.png'

const Download = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-5xl mx-auto pt-12 pb-10' >
                <div className='text-center space-y-3'>
                    <h2 className='text-2xl text-yellow-400 font-semibold'>DOWNLOAD</h2>
                    <h2 className='text-3xl text-black font-bold'>BEST CAB SERVICE</h2>
                </div>
                <div className='md:flex justify-between items-center pt-10 m-10'>
                    <div className='space-y-10'> 
                        <h2 className='text-2xl text-black font-bold'>Download the Cab voucher app <br /> free! Get Exciting New Offers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Blanditiis ad animi consequuntur aperiam unde!</p>
                        <div className='flex justify-center items-center gap-3'>
                            <img src={img1} className='rounded-xl w-[190px]' alt="" />
                            <img src={img2} className='rounded-xl w-[190px]' alt="" />
                        </div>
                    </div>
                    <div >
                           <img src={img3} className='w-[350px]' alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Download;