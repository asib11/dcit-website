import React, { useEffect, useState } from 'react';
// import graphics1 from '../../../assets/approved-by/graphics.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Recommed = () => {
    const [courses, setCurses] = useState([])
    useEffect(
        () => {
            AOS.init({ delay: 300, duration: 1000 });
        }, []
    )

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCurses(data))
            .catch(error => console.error(error))
    }
        , [])

    const recommand = courses.filter(item => item.type.includes('recommand') === true)
    const fourth = courses.filter(item => item.type.includes('fourth') === true)
    const regular = courses.filter(item => item.type.includes('regular') === true)

    return (
        <div className=''>
            <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16 ' data-aos="zoom-in-down">RECOMMENDED</h3>
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6' data-aos="zoom-in-up"> Course Programs </h2>

            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20' >
                {
                    recommand.map((course, index) => (
                        <div key={index} data-aos="fade-down" className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                            <figure>
                                <img
                                    src={course.img}
                                    alt="Shoes" />
                            </figure>
                            <div className="flex mt-6 p-4 justify-between items-center">
                                <div>
                                    <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                    <p className='font-bold text-xl'>{course.name}</p>
                                </div>
                                <div className="">
                                    <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='bg-[#e6e7e7]'>
                <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16' data-aos="zoom-in-down">4<sup>TH</sup> INDUSTRIAL REVOLUTION</h3>
                <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6' data-aos="zoom-in-up">Course Programs</h2>
                <div className='grid grid-cols-1 justify-items-center gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20'>
                    {
                        fourth.map((course, index) => (
                            <div key={index} data-aos="fade-down" className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                                <figure>
                                    <img
                                        src={course.img}
                                        alt="Shoes" />
                                </figure>
                                <div className="flex mt-6 p-4 justify-between items-center">
                                    <div>
                                        <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                        <p className='font-bold text-xl'>{course.name}</p>
                                    </div>
                                    <div className="">
                                        <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

            <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold pt-16' data-aos="zoom-in-down">REGULAR</h3>
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold my-6' data-aos="zoom-in-up">Course Programs</h2>
            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20' >
                {
                    regular.map((course, index) => (
                        <div key={index} data-aos="fade-down" className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                            <figure>
                                <img
                                    src={course.img}
                                    alt="Shoes" />
                            </figure>
                            <div className="flex mt-6 p-4 justify-between items-center">
                                <div>
                                    <p className='text-[#f58d5d] font-bold max-lg:text-[16px] lg:text-lg'>{course.price}</p>
                                    <p className='font-bold text-xl'>{course.name}</p>
                                </div>
                                <div className="">
                                    <Link to={'/python'} onClick={course.details} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Recommed;