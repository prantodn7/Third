import React from 'react';
import './City.css'
import car from '../src/assets/assets/yellow-cab.png'
import Cap from './Component/Cap';
import Form from './Component/Contact/Form';



const Cover = () => {
    return (
       <>
         <div className='cover bg-cover'>
            <div className=' relative  bg-white/80   h-[520px]'>
            <div className='max-w-7xl  mx-auto grid grid-cols-1  '>
                <div className='text-center space-y-3 pt-10'>
                    <h2 className='text-yellow-400 text-3xl font-semibold'>BOOK CAP NOW</h2>
                    <h2 className='text-black text-3xl md:text-5xl font-bold space-x-3'>+91<span></span>9876 <span></span>54321</h2>
                    <p className='text-black'>www. y o u r d o m a i n .com</p>
                </div>
                <div className='flex justify-center'>
                    <img src={car} className='translate-y-10 min-h-[460px] sm:scale-125' alt="" />
                </div>
            </div>
            </div>
           <div className=''>
             
           
           </div>
            
            </div>
            
       </>
        
    );
};

export default Cover;