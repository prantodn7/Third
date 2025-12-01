import React from 'react';

const Form = () => {
    return (
        <div className=' bg-yellow-400'>
            <div className='hero-content flex-col justify-between items-center  '>
                <div className='hero max-w-7xl pt-32 md:flex justify-between items-center mx-auto space-y-10 p-5 '>

                    <div className='max-w-md p-10 space-y-3 my-auto '>
                        <h3 className='text-3xl font-bold text-black'>Best In City</h3>
                        <h2 className='text-4xl font-bold text-black'>TRUSTED CAB SERVIES IN NEW <br /> YORK</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime? Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Aspernatur, magnam! Tenetur odio quo at maxime?</p>
                        <button className='btn rounded-xl cursor-pointer py-2 px-5 bg-black text-white'>Book Now</button>
                    </div>
                    <div className='w-[330px] h-[340px] bg-white m-10'>
                        <h2 className='w-[330px] bg-black text-3xl text-white py-3 px-5'>Book a cap</h2>
                        <div className='flex w-full gap-3 p-3 '>
                            <input type="text" className='border-b-2 border-gray-300 w-1/2 px-5 py-1' placeholder='Name' />
                            <input type="text" className='border-b-2 border-gray-300 w-1/2 px-5 py-1' placeholder='Phone' />
                        </div>
                        <div className='flex w-full gap-3 p-3'>
                            <input type="text" className='border-b-2 border-gray-300 w-1/2 px-5 py-1' placeholder='Start' />
                            <input type="text" className='border-b-2 border-gray-300 w-1/2 px-5 py-1' placeholder='End' />
                        </div  >
                        <div className=' w-full gap-3 p-3'>
                            <input type="text" className='border-b-2 border-gray-300  px-5 py-1 w-full ' placeholder='Choose Vehicle' />
                        </div>

                        <div className=' w-full gap-3 p-3 mt-5 '>
                            <button className='btn rounded bg-black text-white w-full px-3 py-2  '>Book Now</button>
                        </div>



                    </div>

                </div>

            </div>

        </div>
    );
};

export default Form;