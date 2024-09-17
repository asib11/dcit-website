import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HomeIcon, } from '@heroicons/react/24/solid'
import { PiStudent } from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";
import img from '../assets/logo.png'

const Admin = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-[#baffa3] pl-6 pt-6'>
                <div className='pl-12 pb-10'>
                    <img src={img} className='w-24 p-2 border-2 border-red-600 ' alt="" />
                </div>
                <ul >
                    <li className='flex items-center pb-4'>
                        <HomeIcon className='size-6' />
                        <NavLink to='/admin'>Admin dashboard</NavLink>
                    </li>
                    <li className='flex items-center pb-4'>
                        <PiStudent className='size-6' />
                        <NavLink to='/admin'>Courses</NavLink>
                    </li>
                    <li className='flex items-center pb-4'>
                        <IoIosMailUnread className='size-6' />
                        <NavLink to='/admin/contact'>Contact us</NavLink>
                    </li>
                    <hr className='border-red-600 pb-4'/>
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 p-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;