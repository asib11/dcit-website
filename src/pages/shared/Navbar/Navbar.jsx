import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
import Seo from "../../Seo/Seo";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky inset-x-0 top-0 z-10 ">
            <Seo title={`navbar`} content='Beginner friendly page for learning React Helmet.'/>
            <nav className="bg-green-600 max-w-7xl mx-auto shadow-lg rounded-[10px] text-white">
                <div className="lg:flex lg:items-center lg:justify-between max-lg:px-3 lg:px-5">
                    <div className="flex items-center max-lg:justify-between lg:justify-around">
                        <div className={`z-50 max-lg:py-2 lg:py-5 md:w-auto w-full flex justify-end`}>
                            {/* <img src={Logo} alt="logo" className={`${open ? 'max-md:hidden' : 'max-md:block'} md:cursor-pointer h-9 max-md:block hidden`} /> */}
                            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                            </div>
                        </div>
                        <ul className="md:flex hidden font-semibold items-center lg:gap-4">
                            <li>
                                <Link to="/" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1">
                                    Home
                                </Link>
                            </li>

                            <NavLinks />
                            <li>
                                <Link to="/event" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1">
                                    Event
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="py-7 px-1 inline-block transition-all duration-300 hover:translate-x-1">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/ourClient" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1">
                                    Our Clinets
                                </Link>
                            </li>
                            <li>
                                <Link to="/dcitinstitue" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1">
                                    DCIT institue
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="py-2 px-3 inline-block transition-all duration-300 hover:translate-x-1">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:block hidden">
                        <Link to={'/contact'}><Button /></Link>
                    </div>
                    {/* Mobile nav */}
                    <ul
                        className={`md:hidden bg-green-600 fixed w-[80%] top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                    >
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <NavLinks closeMobileMenu={() => setOpen(false)}/>
                        <li>
                            <Link to="/event" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/ourClient" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                Our Clinets
                            </Link>
                        </li>
                        <li>
                            <Link to="/dcitinstitue" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                DCIT institue
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="py-2 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="py-7 px-3 inline-block transition-all duration-300 hover:translate-x-1" onClick={() => setOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <div className="py-5">
                            <Link to={'/contact'} onClick={() => setOpen(false)}><Button /></Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;