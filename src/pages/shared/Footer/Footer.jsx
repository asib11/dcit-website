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
                {/* <h2 className='text-5xl font-extrabold flex mb-14 items-center justify-center'>Follow Us</h2>
                <div className='flex justify-between items-center max-w-7xl mx-auto flex-wrap max-[992px]:justify-center max-[992px]:gap-10'>
                    <div><img src={logo} alt="" /></div>
                    <div>
                        <div className='flex justify-around'>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <img className='w-[556px]' src={footImage} alt="" />
                        </div>
                    </div>
                    <div >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9599409943826!2d90.36527617484678!3d23.784440787469606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c100504c6233%3A0x507015786bd5545d!2sDCIT%20Ltd!5e0!3m2!1sen!2sbd!4v1725171268137!5m2!1sen!2sbd" width="350" height="225" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <Link to={'https://maps.app.goo.gl/86uan3GWN2QWzwqd7'} className='flex text-lg pt-5'><MapPinIcon className='size-6 p-1 text-[#399918] mr-2' /> Google Map</Link>
                    </div>
                </div> */}

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