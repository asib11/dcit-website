import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img2.jpg'
import { FaBookmark } from "react-icons/fa";

const Event = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold mt-10 mb-6'>Latest Past Events</h1>
            <div className='flex py-16 '>
                <time datetime="" className='flex flex-col w-1/6  text-center'>
                    <span>July</span>
                    <strong className='text-2xl'>11</strong>
                    <span>2024</span>
                </time>
                <div className='flex w-5/6 border-l-[6px] border-lime-400 pl-4'>
                    <div className='w-2/3'>
                        <div className='flex items-center'>
                            <span className='mr-2 text-lime-500'><FaBookmark /></span>
                            <span className='mr-4 font-semibold text-lime-800 '>Featured</span>
                            <time datetime="">
                                <span>July 11/10:00 AM - 5:00 PM</span>
                            </time>
                        </div>
                        <h3 className='text-2xl font-bold hover:underline my-4'> <Link to='/newsdetails'>Orientation Programme 2024</Link> </h3>
                        <p>Welcome to the European IT Institute, where your journey toward excellence in technology and innovation ... <Link to='/newsdetails'>Read more</Link></p>
                    </div>
                    <div className='w-1/3'>
                        <Link to='/newsdetails'><img src={img} className='w-full h-56' alt="" /></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;