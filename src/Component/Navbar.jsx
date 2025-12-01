
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false)
    const [open, setopren] = useState(false)
    return (
        <div>
            <div className='relative  z-10 shadow-md duration-300'>
                <div className='container max-w-7xl mx-auto py-4 overflow-hidden'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-4xl font-bold'>Cap<span className='text-amber-400'>Hub</span></h2>
                        <div  >
                            <ul className='hidden md:flex justify-center items-center gap-8'>
                                <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/'}>Home</Link> </li>
                                <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/about'}>About</Link> </li>
                                <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/feature'}>Features</Link> </li>
                                <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/blog'}>Blog</Link> </li>
                                <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/contact'}>Contact</Link> </li>

                            </ul>
                        </div>

                        <button className="px-5 md:hidden" onClick={() => setopren(!open)}>
                            {
                                open ?
                                    <button onClick={() => setShowmenu(true)}><span><GiHamburgerMenu className='text-2xl' /></span></button>
                                    :
                                    <button onClick={() => setShowmenu(false)}><span><AiOutlineClose className='text-2xl' /></span></button>
                            }
                        </button>

                    </div>
                </div>

            </div>
            <div className={`md:hidden ${showmenu ? '':'w-0 h-0' } overflow-hidden duration-300`}>
                <ul className=' flex flex-col justify-center items-center gap-8'>
                    <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/'}>Home</Link> </li>
                    <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/about'}>About</Link> </li>
                    <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/feature'}>Features</Link> </li>
                    <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/blog'}>Blog</Link> </li>
                    <li className='text-black text-xl cursor-pointer  hover:bg-amber-400 duration-300 py-1 px-3 rounded-4xl font-semibold'><Link to={'/contact'}>Contact</Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;