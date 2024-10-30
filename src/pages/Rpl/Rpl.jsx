import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import img from '../../assets/approved-by/Social Media Design Project 5-01.png';

const Rpl = () => {
    const [rplCourse, setRplCourse] = useState([]);

    useEffect(() => {
        fetch('rpl.json')
            .then(res => res.json())
            .then(data => setRplCourse(data))
            .catch(error => console.error(error))
    }
        , [])


    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h1 className='text-5xl text-center font-bold pt-16 mb-6'>RPL Certification</h1>
            <div className='flex flex-col gap-8 m-6 lg:m-0'>
                <div className=' text-justify'>
                    <h4 className='text-3xl my-6 font-semibold'>Government Certification for IT Skills</h4>
                    <p className='text-xl'>
                        <span className='font-semibold'>Don't Miss Out! Get Your Skills Certified by the Government</span>
                        In an exceptional opportunity, you can now obtain the government certification for your IT skills, free of charge, in short time. <br />
                        This unique initiative allows you to attain Level-3 certification for your skills, gain recognition for your experience, and become an accredited IT professional. <br />
                        The National Skills Development Authority, Bangladesh (NSDA), generously funded by the ASSET Project, has introduced this program to evaluate the proficiency of youths in <span className="font-semibold">Web Design & Development for Freelancing , Graphic Design for Freelancing,</span> and <span className="font-semibold">Digital Marketing for Freelancing</span> and to acknowledge their talents. <br />
                        Having accredited, youths will enhance their competitiveness in both domestic and international job markets, equipped with prestigious certificates and newfound confidence. <br />
                        For those proficient in web development, graphic design, and digital marketing but lacking official certification, the “European IT Institute” offers an opportunity to obtain a <span className="font-semibold">government-issued certificate</span>.
                        Don’t hesitate—register now, <span className="font-semibold">free of charge</span>, to seize this invaluable opportunity.
                    </p>


                </div>
                <div className=''>
                    <h4 className='text-2xl my-6 font-semibold'>Certification is available in the following subjects:</h4>
                    {/* <img src={img} alt="" /> */}
                    <div className='grid max-md:grid-cols-1 justify-items-center gap-1 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto' >
                        {
                            rplCourse.map((course) => (
                                <div key={course.id} className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                                    <figure className='h-[370px] w-full overflow-hidden'>
                                        <img
                                            className="w-full h-full object-cover object-center"
                                            src={course.img}
                                            // src={img}
                                            alt={course.name} />
                                    </figure>
                                    <p className='font-bold text-[16px] pt-4 px-4'>{course.name}</p>
                                    <div className="flex mt-auto p-4 justify-between items-center">
                                        <div>
                                            <p className='text-gray-400 font-bold max-lg:text-[16px] lg:text-md'>Certification Fee: <span className='text-[#f58d5d]'>{course.courseFee}</span></p>
                                            
                                        </div>
                                        <div className="">
                                            <Link to={`${course.link}`} className="btn bg-[#399918] text-white hover:bg-lime-500">Registration Now</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rpl;