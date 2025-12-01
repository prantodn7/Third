import React from 'react';
import { FaAppStoreIos, FaFacebook, FaGoogle, FaInstagram, FaMousePointer, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { MdAndroid, MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <>
            <div className=' bg-yellow-400'>
                <div className='max-w-7xl  mx-auto h-52 flex justify-center items-center'>
                    <div className='flex-col justify-between text-center '>
                        <h2 className='text-2xl font-bold'>WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!</h2>
                        <h1 className='text-3xl md:text-5xl font-bold'>+123 4567 8900</h1>
                    </div>
                </div>
            </div>
            <div className='max-w-3/4 mx-auto mb-5 mt-14'>
                <div className='md:flex justify-between  gap-2'>
                    <div className='w-[380px] space-y-5 '>
                        <h2 className='text-2xl font-bold '>ABOUT CAB HUB</h2>
                        <div className='border-b-8 border-yellow-400'></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing  <br /> Sapiente   corrupti aliquam corporis sunt. Iusto ipsam  <br />obcaecati quas veritatis consectetur exercitationem.</p>
                        <div className='flex  gap-3'>
                            <span className='text-2xl text-yellow-400'><FaFacebook /></span>
                            <span className='text-2xl text-yellow-400'><FaInstagram /></span>
                            <span className='text-2xl text-yellow-400'><FaGoogle /></span>
                            <span className='text-2xl text-yellow-400'><FaTwitter /></span>
                        </div>
                    </div>
                    <div className='w-[380px] space-y-5 '>
                        <h2 className='text-2xl font-bold '>DOWNLOAD</h2>
                        <div className='border-b-8 border-yellow-400'></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing  <br /> Sapiente   corrupti aliquam corporis sunt. Iusto ipsam .</p>
                        <div className='flex  gap-3'>
                            <h2 className='text-xl font-bold text-yellow-400 flex items-center gap-2'>Android user <span className='text-2xl text-black'><MdAndroid /></span></h2>
                            <h2 className='text-xl font-bold text-yellow-400 flex items-center gap-2'>IOS user <span className='text-2xl text-black'><FaAppStoreIos /></span></h2>
                        </div>
                    </div>

                    <div className='w-[380px] space-y-5  '>
                        <h2 className='text-2xl font-bold '>CONTACT</h2>
                        <div className='border-b-8 border-yellow-400'></div>
                        <p className='flex items-center gap-2'><span><FaLocationPin /></span>123 Street, New York, USA</p>
                        <p className='flex items-center gap-2'><span><FaPhoneAlt /></span>+123 4567 8900</p>
                        <p className='flex items-center gap-2'><span><MdEmail /></span>nGqo6@example.com</p>
                        <p className='flex items-center gap-2'><span><FaMousePointer /></span>www.cabhub-tcj.com</p>

                    </div>
                </div>
                <footer className="footer sm:footer-horizontal footer-center  text-base-content pt-14 pb-3 text-center">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} -  All rights reserved</p>
                    </aside>
                </footer>
            </div>
        </>
    );
};

export default Footer;