import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import collaboration1 from '../../../assets/approved-by/VICTVS_log-1.png.webp'
import collaboration2 from '../../../assets/approved-by/European_IT_Solutions_Institute_BITM_Logo-400x210.png.webp'
import approve1 from '../../../assets/approved-by/NSDApng.png.webp'
import member1 from '../../../assets/approved-by/basis-logo.png.webp'
import member2 from '../../../assets/approved-by/bacco-image.jpg.webp'
import member3 from '../../../assets/approved-by/BCS-1.png.webp'
import ecab from '../../../assets/approved-by/ecab.png'

const Approve = () => {
    useEffect(
        () => {
            AOS.init({ delay: 300, duration: 1000 });
        }, []
    )
    return (
        <div className='bg-[#e6e7e7] px-4 py-16'>
            <div className='flex max-md:flex-col justify-center max-lg:gap-8 lg:gap-16 max-w-7xl mx-auto'>
                <div className='md:w-1/3 rounded-md bg-white p-1' data-aos="flip-left">
                    <div className='w-full rounded-md bg-white p-5 font-bold h-full flex flex-col justify-center items-center'>
                        <h3 className='max-lg:text-2xl lg:text-3xl font-bold mb-6 text-center'>Collaboration with</h3>
                        <div className='flex flex-col justify-center items-center h-full space-y-5'>
                            <img src={collaboration2} alt="BITM" />
                            <img src={collaboration1} alt="VICTVS" />
                        </div>
                    </div>
                </div>
                {/* <div className='shadow-md border-4 border-[#399918] shadow-[#399918] p-10 rounded-lg w-96 h-[436px] bg-white'       data-aos="flip-up">
                    
                    <h3 className='text-3xl font-bold mb-6 text-center'>Approved by</h3>
                    <div className='flex justify-center items-center'>
                        <img src={approve1} alt="" />
                    </div>
                </div> */}
                <div className='md:w-1/3 rounded-md bg-white p-1' data-aos="flip-left">
                    <div className='w-full rounded-md bg-white p-5 font-bold h-full flex flex-col justify-center items-center'>
                        <h3 className='max-lg:text-2xl lg:text-3xl font-bold mb-6  text-center'>Approved by</h3>
                        <div className='flex justify-center items-center h-full'>
                            <img  src={approve1} alt="BITM" className='w-full' />
                            {/* <img src={collaboration1} alt="" /> */}
                        </div>
                    </div>
                </div>
                {/* <div className='shadow-md border-4 border-[#399918] shadow-[#399918]  p-10 rounded-lg w-96 bg-white' data-aos="flip-right">
                    <h3 className='text-3xl font-bold mb-6 text-center'>Member of</h3>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={member1} alt="" />
                        <div className='w-80'><img src={member2} alt="" /></div>
                        <img src={member3} alt="" />
                    </div>
                </div> */}
                <div className='md:w-1/3 rounded-md bg-white p-1' data-aos="flip-left">
                    <div className='w-full rounded-md bg-white p-5 font-bold h-full flex flex-col justify-center items-center'>
                        <h3 className='max-lg:text-2xl lg:text-3xl font-bold mb-6 text-center'>Member of</h3>
                        <div className='flex flex-col justify-center items-center h-full space-y-2'>
                            <img src={member1} alt="BASIS" />
                            <img src={member2} alt="BACCO" />
                            <img src={member3} alt="BCS" />
                            <img src={ecab} alt="ECAB" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approve;