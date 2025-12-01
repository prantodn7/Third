import React from 'react';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Contact/Footer';

const Mai = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default Mai;