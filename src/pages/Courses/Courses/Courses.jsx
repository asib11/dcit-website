import React from 'react';
import img from '../../../assets/logo.png'
const Courses = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h3 className='text-3xl text-center font-bold pt-16 mb-6'>Python Development with Django</h3>
            <div className='flex justify-between gap-8'>
                <div className='w-3/4 text-justify'>
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
                <div className='w-1/4'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Courses;