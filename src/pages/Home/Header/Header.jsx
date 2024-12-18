import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { IoIosBook } from "react-icons/io";
import Seo from '../../Seo/Seo';


const Header = () => {
    return (
        <div className='bg-green-50'>
            {/* <Seo title={'Unlock Your True Potential'} content='Beginner friendly page for learning React Helmet.'/> */}
            <div className='max-w-7xl mx-auto pt-16 pb-28 max-lg:m-4'>
                <div className='flex max-lg:flex-col gap-5'>
                    <div className='max-lg:w-full lg:w-2/5 space-y-6'>
                        <div className='flex items-center gap-2 font-semibold text-xl'>
                            <BsFillBookmarkCheckFill className='size-5 text-green-600' />
                            <h3>Unlock Your True Potential</h3>
                        </div>
                        <h1 className='text-5xl font-bold'>Empowering global web solutions with <span className='text-green-700'>innovation</span></h1>
                        <p className='font-semibold text-lg text-justify'>DCIT LTD is a leading software development company in Dhaka, Bangladesh, specializing in web development and solutions, with over 12 years of experience in delivering successful global projects. The company is renowned for its professional approach and commitment to innovative technology.</p>
                        <div className='flex gap-5'>
                            <Link to={'/dcitinstitue'}>
                                <button className='bg-gradient-to-r from-green-600 to-green-900 hover:from-green-900 hover:to-green-600 font-extrabold text-white px-3 py-4 max-lg:text-[14px] lg:text-xl text-bold rounded-lg flex items-center gap-2'> <IoIosBook />Browse Course</button>
                            </Link>
                            <Link to={'/dcitinstitue'}>
                                <button className='bg-gradient-to-r from-green-600 to-green-900 hover:from-green-900 hover:to-green-600 font-extrabold text-white px-3 py-4 max-lg:text-[14px] lg:text-xl text-bold mr-6 rounded-lg flex items-center gap-2'><IoIosBook />Join Free Seminar</button>
                            </Link>
                        </div>
                    </div>
                    <div className='max-lg:w-full lg:w-3/5 max-lg:h-[300px]'>
                        <div className='h-full shadow-lg'>
                            <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/N1iSHD6N6_c?si=xyjWXuNys7gFxfHp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;