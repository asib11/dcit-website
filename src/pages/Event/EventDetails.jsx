import React from 'react';
import img from '../../assets/img2.jpg'
import { Link } from 'react-router-dom';
import {  FaArrowLeft} from "react-icons/fa";
import Seo from '../Seo/Seo';

const EventDetails = () => {
    return (
        <div className='max-w-7xl mx-auto pt-16 max-xl:p-4'>
            <Link to={'/event'}><p className='flex max-xl:p-4 items-center gap-2 max-lg:text-xl lg:text-3xl font-bold mb-6 hover:text-red-500'> <FaArrowLeft/> All Event</p></Link>
            <p className='max-lg:text-lg lg:text-2xl max-xl:p-4 mb-4'>This event has passed.</p>
            <hr className='divide-y divide-gray-400 border-2' />
            <div className='max-xl:p-4'>
                <h2 className='max-lg:text-3xl lg:text-5xl font-bold  my-10'>Orientation Programme 2024</h2>
                <p className='mb-10 text-lg text-gray-500'>June 23/10:00 AM - 5:00 PM</p>
                <div className=''>
                    <img src={img} className='w-full' alt="event details" />
                </div>
                <p className='my-12 text-xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas totam itaque dolorem explicabo reiciendis quod facilis enim, at et natus adipisci omnis quia repudiandae consequuntur amet maiores laborum alias?</p>
            </div>
            <hr className='divide-y divide-gray-400 border-2' />
            <div className='flex py-12 max-xl:p-4'>
                <div className='flex flex-col max-lg:gap-3 lg:gap-6'>
                    <h4 className='text-xl uppercase'><strong>Organizer</strong></h4>
                    <div>
                        <p> <strong>Date:</strong> </p>
                        <p>July 11</p>
                    </div>
                    <div>
                        <p> <strong>Time:</strong> </p>
                        <p>10:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                        <p> <strong>Event Category:</strong> </p>
                        <p> <Link className='text-lime-500' to='/event'>Orientation Programme</Link> </p>
                    </div>
                    <div>
                        <p> <strong>Event Tags:</strong> </p>
                        <p><Link className='text-lime-500' to='/event'>Orientation_Programme;</Link></p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-6 mr-10'>
                        <h4 className='text-xl uppercase'><strong>Organizer</strong></h4>
                        <div>
                            <p>Dhaka CentreNIC IT Ltd</p>
                        </div>
                        <div>
                            <p> <strong>Phone</strong> </p>
                            <Link to={'tel:+8801710822207'}><p>+8801710-822207</p></Link>
                            <Link to={'tel:+8801872884988'}><p>+8801872-884988</p></Link>
                            
                        </div>
                        <div>
                            <p> <strong>Email</strong> </p>
                            <p className='pb-6'> <Link to='mailto:dcitltd2022@gmail.com'>dcitltd2022@gmail.com</Link> </p>
                            <Link className='text-lime-500' to={'/'}><p>View Organizer Website</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;