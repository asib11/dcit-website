import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import graphics1 from '../../../assets/approved-by/graphics.jpeg'
import { Link } from 'react-router-dom';

const Regular = () => {
    useEffect(
        () => {
            AOS.init({ delay: 300, duration: 1000 });
        }, []
    )
    return (
        <div className=''>
            <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16' data-aos="zoom-in-down">REGULAR</h3>
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6' data-aos="zoom-in-up">Course Programs</h2>
            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20'>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                
            
            
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-right" className="card bg-base-100 w-[90%] shadow-xl rounded-md">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="flex mt-6 p-4 justify-between items-center">
                        <div>
                            <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                            <p className='font-bold text-xl'>Graphics Design</p>
                        </div>
                        <div className="">
                            <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                        </div>
                    </div>
                </div>
            </div> 
            
        </div>
    );
};

export default Regular;