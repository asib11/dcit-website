import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import basisLogo from '../../../assets/basis-logo.svg'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
// import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    // useEffect(
    //     () => {
    //         AOS.init({ delay: 300, duration: 1000 });
    //     }, []
    // )

    const navbarItem = <>
        <li className='bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white rounded'><Link to={'/'}>Home</Link></li>
        <li className='bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white rounded'><Link to={'/about'}>About Us</Link></li>
        <li className="relative group flex px-2 justify-center mr-4 bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white rounded">
            {/* <details>
                <summary><Link>Courses</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details> */}
            Courses
            <ul className="absolute left-1/2 top-full hidden bg-white group-hover:block p-2 space-y-2 bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white rounded">
                <li><Link to='/python' className="block px-4 py-2 ">
                    Python Development
                </Link></li>
                <li><Link to='/python' className="block px-4 py-2">
                    Web Design
                </Link></li>
                <li><Link to='/python' className="block px-4 py-2">
                    Web Development
                </Link></li>
                <li><Link to='/python' className="block px-4 py-2">
                    ReactJs
                </Link></li>
                <li><Link to='/python' className="block px-4 py-2">
                    NextJs
                </Link></li>
                <li><Link to='/python' className="block px-4 py-2">
                    MERN Stack Dev
                </Link></li>
                <li><Link to='/python' className="block px-4 py-2">
                    Networking
                </Link></li>
            </ul>
        </li>
        <li className=" rounded px-2 relative group flex justify-center bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white">
            {/* <details>
                <summary><Link>Success Stories</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details> */}
            Success Stories
            <ul className="rounded absolute left-1/2 top-full hidden group-hover:block bg-white p-2 space-y-2 bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white ">
                <li >
                <Link to='/student' className="block px-4 py-2 ">
                    Student's Success
                </Link>
                </li>
                <li><Link to='/job' className="block px-4 py-2">
                Professional Expert Opinion
                </Link></li>
                <li><Link to='/job' className="block px-4 py-2">
                Video Feedback
                </Link></li>
                <li><Link to='/job' className="block px-4 py-2">
                Job Placement Organization
                </Link></li>
            </ul>
        </li>
        <li className='rounded bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white'><Link to={'/event'}>Events</Link></li>
        {/* <li className="relative group">
            <details>
                <summary><Link>Gallery</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>


            Gallery
            <div className="absolute left-3/4 top-full hidden group-hover:block bg-gray-700 p-2">
                <Link to='' className="block px-4 py-2">
                    Web Development
                </Link>
                <Link to='' className="block px-4 py-2 text-white hover:bg-gray-600">
                    App Development
                </Link>
                <Link to='' className="block px-4 py-2 text-white hover:bg-gray-600">
                    SEO Optimization
                </Link>
            </div>
        </li> */}
        <li className='rounded bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white'><Link to={'/gallery'}>Gallery</Link></li>
        <li className='rounded bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white'><Link to={'/rpl'}>RPL</Link></li>
        <li className='rounded bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white'><Link to={'/news'}>News</Link></li>
        {/* <li><Link>Reviews</Link></li> */}
        <li className='rounded bg-gradient-to-r hover:from-red-500 hover:to-green-500 hover:text-white'><Link to='/contact'>Contact Us</Link></li>
    </>
    return (

        <div className='max-w-7xl mx-auto sticky top-0 z-10 bg-white'>
            <div className='text-[18px] flex justify-between items-center '>
                <div className='w-20'><img src={logo} alt="" /></div>
                <div className='navbar-center hidden lg:flex'>
                    <div className="p-4 flex items-center font-semibold" >
                        <DevicePhoneMobileIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <div >
                            <p className='hover:text-[#399918]'>+8801710-822207</p>
                            <p className='hover:text-[#399918]'>+8801872-884988</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center font-semibold" >
                        <EnvelopeIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <div >
                            <p className='hover:text-[#399918]'>dcitltd2022@gmail.com</p>
                            {/* <p className='hover:text-[#399918]'>asib.bubt@gmail.com</p> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-24'><img src={basisLogo} alt="" /></div>
                    <p className='text-[#399918] mt-2 font-bold text-xl'>sitemap</p>
                </div>
            </div>
            <div className='shadow-2xl p-4 '>
                <div className="navbar bg-base-100" >
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                                {navbarItem}
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 text-lg font-bold">
                            {/* <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                            {navbarItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to={'/contact'} className="btn bg-[#399918] ml-8 text-white bg-gradient-to-r hover:from-red-500 hover:to-green-500">Admisssion Now </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;