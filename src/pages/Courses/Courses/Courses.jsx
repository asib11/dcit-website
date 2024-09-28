import React from 'react';
import { Link } from 'react-router-dom';
import graphics1 from '../../../assets/approved-by/graphics.jpeg'
import { FaRegChartBar, FaCalendarDay, FaTag, FaCertificate, FaVideo, FaLanguage } from "react-icons/fa";
import { TbTimeDuration10 } from "react-icons/tb";

const Courses = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h3 className='max-lg:text-3xl lg:text-5xl text-center font-bold max-lg:py-8 lg:py-16'>Python Development with Django</h3>
            <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row lg:justify-between gap-6 lg:p-14 m-6 lg:m-0'>
                <div className='lg:w-2/3 text-justify '>
                    <h4 className='text-2xl lg:my-6 font-semibold'>Overview:</h4>
                    <p className='text-xl'>
                        Python has become very popular because it’s easy to understand, has easy syntax, and portability, and is easy to learn. Python is used for multiple purposes ranging from web development to data science to DevOps. Python can be used for data analysis, Machine Learning. Web Development, Automation, Scripting, Software Testing, and everyday tasks. Companies like Instagram, Youtube, and Spotify are built with Python.
                    </p>
                    <h4 className='text-2xl my-6 font-semibold'>What you will learn from this course?</h4>
                    <p className='text-xl'>
                        In this course, you will learn Python Development from zero to hero. Master the basics, intermediate and advanced
                        topics, and programming skills. You will also learn how to build applications. <br />

                        So, join our Python Development course and build yourself as a Python developer by taking a professional course from
                        European IT, One of the best international quality computer training institutes. Our expert trainers will teach our
                        students the most modern and up-to-date techniques here.
                    </p>
                    <h4 className='text-2xl my-6 font-semibold'>Certification:</h4>
                    <p className='text-xl'>
                        After completing this course you will get your certificate and you can call yourself a certified Python developer.
                    </p>
                    <h4 className='text-2xl my-6 font-semibold'>
                        Modules
                    </h4>
                    <ul className='text-xl list-disc pl-4'>
                        <li>Python Basic</li>
                        <li>Python Data Structure</li>
                        <li>Online Task</li>
                        <li>Python Conditional Statements</li>
                        <li>Python loops</li>
                        <li>Python String</li>
                        <li>Python function</li>
                        <li>Online Task</li>
                        <li>Python OOP</li>
                        <li>Introduction to Software Development</li>
                        <li>Types Of SDLC Method</li>
                        <li>Introduction to Database Design</li>
                        <li>Online Task</li>
                        <li>Database normalization</li>
                        <li>Introduction to SQL</li>
                        <li>SQL Advance</li>
                        <li>Online Task</li>
                        <li>Introduction to E-commerce</li>
                        <li>Project</li>
                        <li>ERD design of E-commerce Project</li>
                        <li>ERD design of E-commerce</li>
                        <li>Project-part-2</li>
                        <li>Introduction to Django</li>
                        <li>Django continues</li>
                        <li>Django with MySQL</li>
                        <li>Final Exam-1</li>
                        <li>Final Exam-2</li>
                        <li>Final Exam-3</li>
                        <li>Final Project &amp; Viva</li>
                    </ul>
                    <h4 className='text-2xl my-6 font-semibold'>Highlight</h4>
                    <ul className='text-xl list-disc pl-4'>
                        <li>Dynamic Website Development</li>
                        <li>Web Application Development</li>
                        <li>Web Security</li>
                        <li>Hands-on training using the latest tools &amp; techniques</li>
                        <li>Specialization &amp; creating a portfolio in the area of interest</li>
                        <li>Industry-relevant curriculum</li>
                        <li>E-commerce solution</li>
                        <li>Project</li>
                        <li>Online Market Place Strategy</li>
                    </ul>
                    <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row gap-8'>
                        <div>
                            <h4 className='text-2xl my-6 font-semibold'>Software Taught</h4>
                            <ul className='text-xl list-disc pl-4'>
                                <li>Notepad/ Notepad++/ NetBeans/ Sublime/ VS Code/ Brackets</li><li>Firebug ( Browser Inspect Element)</li><li>Web Browsers ( Chrome, Firefox, Safari, Edge)</li><li>Web Server (Apache, Xampp, Wamp)</li><li>Pycharm</li><li>Sublime</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-2xl my-6 font-semibold'>Career Opportunity:</h4>
                            <p className='text-xl'>After course completion, students can get jobs as:</p>
                            <ul className='text-xl list-disc pl-4'><li>Python Developer</li><li>Django Web Developer</li><li>Web Scraper</li><li>Machine Learning Developer</li><li>Research Assistant</li><li>Data Analyst</li></ul>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/3 flex flex-col  gap-6'>
                    {/* <img src={img} alt="" /> */}
                    <div className="card w-full shadow-xl rounded-sm">
                        <figure>
                            <img
                                src={graphics1}
                                alt="Shoes" />
                        </figure>
                        {/* <div className="flex mt-6 p-4 justify-between items-center">
                            <div>
                                <p className='text-[#f58d5d] font-bold text-lg'>৳ 10,000.00 – ৳ 12,500.00</p>
                                <p className='font-bold text-xl'>Graphics Design</p>
                            </div>
                            <div className="">
                                <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-lime-500">View Details</Link>
                            </div>
                        </div> */}
                        <div className='px-4 py-3 '>
                            <h2 className='border-[2px] shadow-sm shadow-lime-600 border-lime-600 lg:text-2xl px-2 py-3 mb-2 text-lime-600 rounded-md font-bold'>Offline Course Fee</h2>
                            <div className='max-lg:text-sm lg:text-xl font-semibold  text-lime-600'>
                                <p>Regular Fee : BDT 30,000</p>
                                <p>Discount Fee: BDT 20,000</p>
                            </div>
                        </div>
                        <div className='px-4 py-3'>
                            <h2 className='border-[2px] shadow-sm shadow-lime-600 border-lime-600 lg:text-2xl px-2 py-3 mb-2 text-lime-600 rounded-md font-bold'>Online Course Fee</h2>
                            <div className='max-lg:text-sm lg:text-xl font-semibold  text-lime-600'>
                                <p>Regular Fee : BDT 30,000</p>
                                <p>Discount Fee: BDT 20,000</p>
                            </div>
                        </div>
                        <div>
                            <form action="" className='px-4 py-3'>
                                <label className='mr-2 lg:text-xl font-semibold'>Course Type</label>
                                <select className="border-2 border-lime-500 px-3 py-4 w-sm rounded-none max-lg:text-sm lg:text-xl">
                                    <option disabled selected className=''>Choose an option</option>
                                    <option>Offline</option>
                                    <option>Online</option>
                                </select>
                                <div className="form-control mt-6">
                                    <input className='btn bg-[#399918]  hover:bg-lime-600 text-white font-bold lg:text-xl' type="submit" value="Add to Card" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <ul className='px-6 pt-3 pb-10 max-lg:text-[10px] lg:text-xl mt-6 flex flex-col gap-4 '>
                                <li className='flex items-center '>
                                    <span className='mr-2'><FaRegChartBar className='text-[#399918]'/></span>
                                    <span> Skill Level: Beginners</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'><TbTimeDuration10 className='text-[#399918]' /></span>
                                    <span> Duration: 4 Months</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'><FaCalendarDay className='text-[#399918]'/></span>
                                    <span> Class Per Week: 2 Day</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'><FaTag className='text-[#399918]' /></span>
                                    <span> Total: 32 Classes</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'><FaCertificate className='text-[#399918]'/></span>
                                    <span>Certificate: Yes</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'><FaVideo className='text-[#399918]'/></span>
                                    <span> Provide Class Video</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'><FaLanguage className='text-[#399918]'/></span>
                                    <span> Language: Bangla & English</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='bt-card w-full shadow-2xl rounded-md max-lg:py-10 lg:py-16 flex flex-col justify-center items-center'>
                        <h3 className='max-lg:text-xl lg:text-3xl text-center font-bold max-lg:mb-3 lg:mb-6'>Working Hours</h3>
                        <table className='lg:text-xl border-none'>
                            <tbody className='table border-none flex max-lg:gap-2 lg:gap-4 max-lg:text-[10px] lg:text-xl'>
                                <tr>
                                    <td>Monday</td>
                                    <td class="box"> 10:00 am – 9.00 pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td class="box"> 10:00 am – 9.00 pm</td>
                                </tr>
                                <tr><td>Wednesday</td><td class="box"> 10:00 am – 9.00 pm</td></tr><tr><td>Thursday</td><td class="box"> 10:00 am – 9.00 pm</td></tr><tr><td>Friday</td><td class="box"> 10:00 am – 9.00pm</td></tr><tr><td>Saturday</td><td class="box"> 10:00 am – 9.00 pm</td></tr><tr><td class="box2">Sunday</td><td class="box box2"> 10:00 am – 9.00 pm</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;