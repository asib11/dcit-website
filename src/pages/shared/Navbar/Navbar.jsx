import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../../assets/logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky inset-x-0 top-0 z-10 ">
            <nav className="bg-white max-w-7xl mx-auto shadow-xl shadow-gray-700">
                <div className="flex items-center justify-around">
                    <div className="z-50 max-lg:py-2 lg:p-5 md:w-auto w-[90%] flex justify-end">
                        {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
                        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                    </div>
                    <ul className="md:flex hidden font-semibold items-center lg:gap-4">
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="py-2 px-3 inline-block">
                                About Us
                            </Link>
                        </li>
                        <NavLinks />
                        <li>
                            <Link to="/event" className="py-7 px-3 inline-block">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="py-7 px-3 inline-block">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/rpl" className="py-7 px-3 inline-block">
                                RPL
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="py-7 px-3 inline-block">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="py-7 px-3 inline-block">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="md:block hidden">
                        <Button />
                    </div>
                    {/* Mobile nav */}
                    <ul
                        className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                    >
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="py-7 px-3 inline-block">
                                About Us
                            </Link>
                        </li>
                        <NavLinks />
                        <li>
                            <Link to="/event" className="py-7 px-3 inline-block">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="py-7 px-3 inline-block">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/rpl" className="py-7 px-3 inline-block">
                                RPL
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="py-7 px-3 inline-block">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="py-7 px-3 inline-block">
                                Contact Us
                            </Link>
                        </li>
                        <div className="py-5">
                            <Button />
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;