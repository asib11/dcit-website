import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarItem = <>
        <li><Link>Home</Link></li>
        <li><Link>About Us</Link></li>
        <li>
            <details>
                <summary><Link>Courses</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary><Link>Success Stories</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>
        <li><Link>Events</Link></li>
        <li>
            <details>
                <summary><Link>Gallery</Link></summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>
        <li><Link>RPL</Link></li>
        <li><Link>News</Link></li>
        <li><Link>Reviews</Link></li>
        <li><Link>Contact Us</Link></li>
    </>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navbarItem}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
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
                <a className="btn bg-sky-400 text-white">Admisssion Now </a>
            </div>
        </div>
    );
};

export default Navbar;