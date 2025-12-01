import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import car from '../assets/assets/car2.png'

const Cap = () => {
    const [cabs, setCabs] = useState([])
    useEffect(() => {
        fetch('Cab.json')
            .then(res => res.json())
            .then(data => setCabs(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto mt-10 mb-10'>
            <div>
                <div className=''>
                    <h2 className='text-3xl text-center font-bold mb-20'>Choose Best Cab</h2>
                </div>
                <div className='md:flex justify-center  md:justify-between  space-y-18 md:space-y-0  items-center mx-25 '>
                    {
                        cabs.map((cab) => (
                           
                            <div className=" bg-base-100 shadow-xl w-[270px]  rounded-2xl hover:bg-yellow-400 group duration-200 ">
                                 <div className=''>
                                    <img src={car} className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300 ' alt="" />
                                 </div>
                                <div className="text-center pb-10  space-y-3">
                                    <h2 className=" text-2xl font-bold">{cab.class}</h2>
                                    <p className='text-gray-500 group-hover:text-black'>{cab.text}</p>
                                    <h3 className='text-3xl text-yellow-400 group-hover:text-black font-bold'>{cab.price}</h3>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary cursor-pointer bg-black rounded-xl text-white py-2 px-3">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Cap;