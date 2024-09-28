import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    // useEffect(
    //     () => {
    //         AOS.init({ delay: 300, duration: 1000 });
    //     }, []
    // )

    const navbarItem = <>
        <li className='hover:bg-lime-500 hover:text-white rounded p-2'><Link to={'/'}>Home</Link></li>
        <li className='hover:bg-lime-500 hover:text-white rounded p-2'><Link to={'/about'}>About Us</Link></li>
        <li className="relative group hover:bg-lime-500 hover:text-white rounded p-2">
            Courses
            <div className='rounded z-10 absolute top-5 lg:left-0 lg:top-full hidden group-hover:block bg-white text-black min-w-7xl '>
                <div className='flex bg-white p-10 gap-8 border-t-4 border-lime-400'>
                    <ul className="flex flex-col w-64 bg-white gap-2">
                        <p className='mb-5'>4 <sup>th</sup> Industrial Revolution</p>
                        <li><Link to='/python' className="block py-2 px-4 border-2 hover:bg-lime-500 hover:text-white">
                            Python Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 border-2 hover:bg-lime-500 hover:text-white">
                            Web Design
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            ReactJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            NextJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            MERN Stack Dev
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Networking
                        </Link></li>
                    </ul>
                    <ul className="flex flex-col w-64 gap-2">
                        <p className='mb-5'>Development</p>
                        <li><Link to='/python' className="block px-4 py-2 border-2 hover:bg-lime-500 hover:text-white">
                            Python Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Design
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            ReactJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            NextJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            MERN Stack Dev
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Networking
                        </Link></li>
                    </ul>
                    <ul className="flex flex-col w-64 gap-2">
                        <p className='mb-5'>Design</p>
                        <li><Link to='/python' className="block px-4 py-2 border-2 hover:bg-lime-500 hover:text-white">
                            Python Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Design
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            ReactJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            NextJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            MERN Stack Dev
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Networking
                        </Link></li>
                    </ul>
                    <ul className="flex flex-col w-64 gap-2">
                        <p className='mb-5'>Marketing & Others</p>
                        <li><Link to='/python' className="block px-4 py-2 border-2 hover:bg-lime-500 hover:text-white">
                            Python Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Design
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Web Development
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            ReactJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            NextJs
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            MERN Stack Dev
                        </Link></li>
                        <li><Link to='/python' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                            Networking
                        </Link></li>
                    </ul>

                </div>
            </div>

        </li>
        <li className="relative group justify-center hover:bg-lime-500 hover:text-white rounded p-2">
            {/* <details>
                <summary><Link>Success Stories</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details> */}
            Success Stories
            <ul className="rounded z-10 absolute top-5 lg:left-0 lg:top-full hidden group-hover:block bg-white p-2 space-y-2  text-black  w-96">
                <li >
                    <Link to='/student' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                        Student's Success
                    </Link>
                </li>
                <li><Link to='/expart' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                    Professional Expert Opinion
                </Link></li>
                <li><Link to='/videoadd' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                    Video Feedback
                </Link></li>
                <li><Link to='/job' className="block px-4 py-2 hover:bg-lime-500 border-2 hover:text-white">
                    Job Placement Organization
                </Link></li>
            </ul>

        </li>
        <li className='rounded hover:bg-lime-500 hover:text-white p-2'><Link to={'/event'}>Events</Link></li>
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
        <li className='rounded hover:bg-lime-500 hover:text-white p-2'><Link to={'/gallery'}>Gallery</Link></li>
        <li className='rounded hover:bg-lime-500 hover:text-white p-2'><Link to={'/rpl'}>RPL</Link></li>
        <li className='rounded hover:bg-lime-500 hover:text-white p-2'><Link to={'/news'}>News</Link></li>
        {/* <li><Link>Reviews</Link></li> */}
        <li className='rounded hover:bg-lime-500 hover:text-white p-2'><Link to='/contact'>Contact Us</Link></li>
    </>
    return (

        <div className='sticky inset-x-0 top-0 z-10 '>

            <div className='bg-white max-w-7xl mx-auto rounded-md sha shadow-2xl shadow-slate-600' >
                <div className="navbar flex justify-between p-4" >
                    <div className="">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                                {navbarItem}
                            </ul>
                        </div>

                    </div>
                    <div className="hidden lg:flex w-[90%]">
                        <ul className="flex gap-10 text-lg font-bold cursor-pointer">
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
                    <div className="">
                        <Link to={'/contact'} className="btn bg-[#399918] ml-8 text-white  hover:bg-lime-500">Admisssion Now </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;