import React from 'react';
import { UserGroupIcon, BriefcaseIcon, MapPinIcon, ClockIcon, ComputerDesktopIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import { FaHeadset } from "react-icons/fa6";

const Facilities = () => {
    return (
        <div className='bg-[#e6e7e7] pb-20'>
            <h2 className=' text-5xl text-center font-extrabold  pt-6 pb-20'>Our Facilities</h2>
            <div className='grid grid-cols-1 md:gird md:grid-cols-2 lg:gird lg:grid-cols-3  gap-8 max-w-7xl mx-auto text-justify'>
                <div className='md:p-4 sm:p-6'>
                    <ClockIcon className='size-12 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6' />
                    <h3 className='text-2xl font-bold py-6'>24/7 Online Support</h3>
                    <p>Each time is very important to us. DCITLTD is giving 24/7 online support for the students for any information review and solving the problem.</p>
                </div>
                <div className='md:p-4 sm:p-6'>
                    <FaHeadset className='size-12 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6' />
                    <h3 className='text-2xl font-bold py-6'>Lifetime Support</h3>
                    <p>DCITLTD provides lifetime support to its students for solving real-life IT problems collaboratively.</p>
                </div>
                <div className='md:p-4 sm:p-6'>
                    <ComputerDesktopIcon className='size-12 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6' />
                    <h3 className='text-2xl font-bold py-6'>Practice Lab Support</h3>
                    <p>DCITLTD is giving students a practice lab at the end of classes or at any time to practice, where students will have the opportunity to practice for a long time.</p>
                </div>
                <div className='md:p-4 sm:p-6'>
                    <VideoCameraIcon className='size-12 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6' />
                    <h3 className='text-2xl font-bold py-6'>Class Video</h3>
                    <p>Video for each class of DCITLTD Institute is stored and provided to students. This will allow students to better understand the contents of the class.</p>
                </div>
                <div className='md:p-4 sm:p-6'>
                    <UserGroupIcon className='size-12 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6' />
                    <h3 className='text-2xl font-bold py-6'>Review Class</h3>
                    <p>DCITLTD Institute has a review class system for improving the quality and skills of students.</p>
                </div>
                <div className='md:p-4 sm:p-6'>
                    <BriefcaseIcon className='size-12 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6' />
                    <h3 className='text-2xl font-bold py-6'>Job Placement</h3>
                    <p>DCIT LTD manage job for talented students through their job placement cell at DCITLTD's own firm as well as other firms.</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;