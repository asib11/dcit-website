import React, { useEffect } from 'react';
import graphics1 from '../../../assets/approved-by/graphics.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Forth = () => {
    useEffect(
        () => {
            AOS.init({ delay: 300, duration: 1000 });
        }, []
    )

    return (
        <div className='bg-[#e6e7e7]'>
            <h3 className='text-3xl text-center font-bold pt-16' data-aos="zoom-in-down">4<sup>TH</sup> INDUSTRIAL REVOLUTION</h3>
            <h2 className=' text-5xl text-center font-extrabold my-6' data-aos="zoom-in-up">Course Programs</h2>
            <div className='grid grid-cols-1 justify-items-center gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20'>
                <div data-aos="fade-up" className="card bg-base-100 w-96 shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card bg-base-100 w-96 shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card bg-base-100 w-96 shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card bg-base-100 w-96 shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card bg-base-100 w-96 shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="card bg-base-100 w-96 shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Forth;