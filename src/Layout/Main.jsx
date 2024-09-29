import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import Logo from '../pages/Home/Logo/Logo';
import ScrollToTop from '../pages/shared/ScrollToTop';

const Main = () => {
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;