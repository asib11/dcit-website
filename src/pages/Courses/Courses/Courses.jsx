import React from 'react';
import img from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import graphics1 from '../../../assets/approved-by/graphics.jpeg'

const Courses = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h3 className='text-3xl text-center font-bold pt-16 mb-6'>Python Development with Django</h3>
            <div className='flex justify-between gap-6'>
                <div className='w-2/3 text-justify'>
                    <h4 className='text-2xl my-6 font-semibold'>Overview:</h4>
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
                    <ul className='text-xl list-disc'>
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
                    <ul className='text-xl list-disc'>
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
                    <div className='flex gap-8'>
                        <div>
                            <h4 className='text-2xl my-6 font-semibold'>Software Taught</h4>
                            <ul className='text-xl list-disc'>
                                <li>Notepad/ Notepad++/ NetBeans/ Sublime/ VS Code/ Brackets</li><li>Firebug ( Browser Inspect Element)</li><li>Web Browsers ( Chrome, Firefox, Safari, Edge)</li><li>Web Server (Apache, Xampp, Wamp)</li><li>Pycharm</li><li>Sublime</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-2xl my-6 font-semibold'>Career Opportunity:</h4>
                            <p className='text-xl'>After course completion, students can get jobs as:</p>
                            <ul className='text-xl list-disc'><li>Python Developer</li><li>Django Web Developer</li><li>Web Scraper</li><li>Machine Learning Developer</li><li>Research Assistant</li><li>Data Analyst</li></ul>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    {/* <img src={img} alt="" /> */}
                    <div  className="card  w-full shadow-xl">
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
                                <Link to={'/python'} className="btn bg-[#399918] text-white hover:bg-green-500">View Details</Link>
                            </div>
                        </div> */}
                        <div className='px-4 py-3'>
                            <h2 className='border-[2px] shadow-sm shadow-green-600 border-green-600 text-2xl px-2 py-3 mb-2 text-green-600 rounded-md font-bold'>Offline Course Fee</h2>
                            <div className='text-xl font-semibold  text-green-600'>
                                <p>Regular Fee   : BDT 30,000</p>
                                <p>Discount Fee : BDT 20,000</p>
                            </div>
                        </div>
                        <div className='px-4 py-3'>
                            <h2 className='border-[2px] shadow-sm shadow-green-600 border-green-600 text-2xl px-2 py-3 mb-2 text-green-600 rounded-md font-bold'>Online Course Fee</h2>
                            <div className='text-xl font-semibold  text-green-600'>
                                <p>Regular Fee   : BDT 30,000</p>
                                <p>Discount Fee : BDT 20,000</p>
                            </div>
                        </div>
                        <div>
                            <form action="">
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;