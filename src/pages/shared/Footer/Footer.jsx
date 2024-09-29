import React from 'react';
// import logo from '../../../assets/logo.png'
// import footImage from '../../../assets/SSLCOMMERZ-Pay-With-logo-All-Size_Aug-21-02-2048x240.png.webp'
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-[#f4f4f4]'>
            <div className=' px-[20px] py-[60px] max-w-7xl mx-auto'>
                <div className='grid max-lg:grid-cols-2 lg:grid-flow-col max-lg:px-6 lg:justify-items-center max-lg:gap-6'>
                    <div>
                        <div className='max-lg:flex max-lg:mb-3 max-lg:items-center'>
                            <MapPinIcon className='max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                            <h3 className='font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2'>Address</h3>
                        </div>
                        <p className='max-md:text-[12px] max-lg:text-sm lg:text-lg'>
                            Doyel S.A. Tower 220/A/1, <br />
                            South Pirerbag, Amtola, 60 feet,<br />
                            Mirpur - 2, Dhaka-1216
                        </p>
                    </div>
                    <div>
                        <div className='max-lg:flex max-lg:mb-3 max-lg:items-center'>
                            <DevicePhoneMobileIcon className='max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                            <h3 className='font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2'>Call Us</h3>
                        </div>
                        <Link to={'tel:+8801710822207'}><p className='hover:text-[#399918] max-md:text-[12px] max-lg:text-sm lg:text-lg'>+8801710-822207</p></Link>
                        <Link to={'tel:+8801872884988'}><p className='hover:text-[#399918] max-md:text-[12px] max-lg:text-sm lg:text-lg'>+8801872-884988</p></Link>
                    </div>
                    <div>
                        <div className='max-lg:flex max-lg:mb-3 max-lg:items-center'>
                            <EnvelopeIcon className='max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                            <h3 className='font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2'>Email</h3>
                        </div>
                        <Link to='mailto:dcitltd2022@gmail.com'><p className='hover:text-[#399918] max-md:text-[12px] max-lg:text-sm lg:text-lg'>dcitltd2022@gmail.com</p></Link>
                    </div>
                    <div>
                    <div className='max-lg:flex max-lg:mb-3 max-lg:items-center'>
                            <ClockIcon className='max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                            <h3 className='font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2'>Work Hours</h3>
                        </div>
                        <p className='max-md:text-[12px] max-lg:text-sm lg:text-lg'>
                            Monday - Sunday <br />
                            10AM - 09PM
                        </p>
                    </div>
                </div>
                <div className='flex mt-6 justify-center'>
                    <Link to={'/contact'} className="btn bg-[#399918]  px-10 text-white hover:bg-lime-500">Contact Us </Link>
                </div>
            </div>
            <div className='bg-[#d3e9d3] py-16 '>
                <footer className="footer p-6 max-w-7xl mx-auto text-base">
                    <nav>
                        <h6 className="footer-title text-xl">Head Office</h6>
                        <p className=''>
                            Doyel S.A. Tower 220/A/1, <br />
                            South Pirerbag, Amtola, 60 feet,<br />
                            Mirpur - 2, Dhaka-1216
                        </p>
                        <h6 className="footer-title text-xl pt-4">Contact</h6>
                        <p>
                            +8801710-822207 <br />
                            +8801872-884988 <br />
                            dcitltd2022@gmail.com
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl">Rangpur Office</h6>
                        <p className=''>
                            House: #166 ( 1st Floor ), Road #01,<br />
                            Aamtola Mor, Mulatol, Rangpur.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl">Softwares</h6>
                        <Link to={''} className="link link-hover">Restaurant Management Software</Link>
                        <Link to={''} className="link link-hover">Accounting Software</Link>
                        <Link to={''} className="link link-hover">Inventory Software</Link>
                        <Link to={''} className="link link-hover">Human Resource Management Software</Link>
                        <Link to={''} className="link link-hover">Medicine Store Application</Link>
                        <Link to={''} className="link link-hover">Billing Automation Software</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl">Services</h6>
                        <Link to={''} className="link link-hover">Website Development</Link>
                        <Link to={''} className="link link-hover">Android App Development</Link>
                        <Link to={''} className="link link-hover">Digital Marketing Service</Link>
                        <Link to={''} className="link link-hover">Search Engine Submission</Link>
                        <Link to={''} className="link link-hover">Logo Design Service</Link>
                        <Link to={''} className="link link-hover">Email Marketing Service</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-xl"> Follow us on</h6>
                        <div className='flex gap-6'>
                            <p><Link to={''} className="link link-hover"><FaFacebookF /></Link></p>
                            <p><Link to={''} className="link link-hover"><FaXTwitter /></Link></p>
                            <p><Link to={''} className="link link-hover"><FaLinkedinIn /></Link></p>
                            <p><Link to={''} className="link link-hover"><FaInstagram /></Link></p>
                        </div>
                    </nav>

                </footer>
            </div>
            <div className='flex px-8 py-5 text-sm justify-center font-semibold bg-[#b8dfb8] '>
                <div className='text-center'>
                    <p> Copyrights © 2024. All Rights Reserved by Dhaka CentreNIC IT Ltd</p>
                </div>
                {/* <div className='w-1/2 flex justify-around '>
                    <Link className='hover:text-[#399918]' to={''}>Terms & Conditions</Link>
                    <Link className='hover:text-[#399918]'>Refund and Returns Policy</Link>
                    <Link className='hover:text-[#399918]' to={'/about'}>About Us</Link>
                    <Link className='hover:text-[#399918]'>TIN: 000000</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;