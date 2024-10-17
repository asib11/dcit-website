import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img2.jpg'
import { FaBookmark } from "react-icons/fa";
import Seo from '../Seo/Seo';

const Event = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Seo title={`Latest Past Events - DCIT LTD`} content='Beginner friendly page for learning React Helmet.'/>
            <h1 className='max-lg:text-2xl lg:text-5xl font-bold lg:mt-10 lg:mb-6 max-lg:m-4'>Latest Past Events</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center max-lg:py-8 lg:py-16 '>
                <time datetime="" className='flex flex-col w-1/6  text-center'>
                    <span>July</span>
                    <strong className='text-2xl'>11</strong>
                    <span>2024</span>
                </time>
                <div className='flex max-lg:flex-col-reverse w-5/6 border-t-[6px] lg:border-t-0 mt-4 pt-4 lg:mt-0 lg:pt-0 lg:border-l-[6px] border-lime-400 lg:pl-4'>
                    <div className='lg:w-2/3 '>
                        <div className='flex items-center'>
                            <span className='mr-2 text-lime-500'><FaBookmark /></span>
                            <span className='mr-4 font-semibold text-lime-800 '>Featured</span>
                            <time datetime="">
                                <span>July 11/10:00 AM - 5:00 PM</span>
                            </time>
                        </div>
                        <h3 className='text-2xl font-bold hover:underline my-4'> <Link to='/eventdetails'>Orientation Programme 2024</Link> </h3>
                        <p>Welcome to the DCIT Ltd, where your journey toward excellence in technology and innovation <Link to='/eventdetails'><span className='text-red-600 font-bold'>...Read more</span></Link></p>
                    </div>
                    <div className='lg:w-1/3 max-lg:pb-4'>
                        <Link to='/eventdetails'><img src={img} className='w-full h-56' alt="event picture" /></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;