import React from 'react';

const Rpl = () => {
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
                </div>
            </div>
        </div>
    );
};

export default Rpl;