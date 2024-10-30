import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';
import Logo from '../pages/Home/Logo/Logo';
import ScrollToTop from '../pages/shared/ScrollToTop';
import Nsda from '../pages/shared/Nsda/Nsda';
import Discount from '../pages/shared/Discount/Discount';
import Whatsapp from '../pages/shared/Whatsapp/Whatsapp';
import MessageBar from '../pages/shared/MessageBar/MessageBar';

const Main = () => {
 


    return (
        <div >
            <MessageBar/>
            <Logo />
            <Navbar />
            <Discount />
            <Nsda />
            <Whatsapp
                phoneNumber="+8801710822207"
                message="Hello! I am interested in your services."
            />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;