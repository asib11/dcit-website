import React from 'react';
import collaboration1 from '../../../assets/approved-by/VICTVS_log-1.png.webp'
import collaboration2 from '../../../assets/approved-by/European_IT_Solutions_Institute_BITM_Logo-400x210.png.webp'
import approve1 from '../../../assets/approved-by/NSDApng.png.webp'
import member1 from '../../../assets/approved-by/basis-logo.png.webp'
import member2 from '../../../assets/approved-by/bacco-image.jpg.webp'
import member3 from '../../../assets/approved-by/BCS-1.png.webp'

const Approve = () => {
    return (
        <div className='bg-[#e6e7e7] p-16'>
            <div className='flex justify-between max-w-7xl mx-auto flex-wrap max-[992px]:gap-6'>
                <div className='shadow-md border-4 border-[#399918] shadow-[#399918] p-10 rounded-lg w-96 bg-white'>
                    <h3 className='text-3xl font-bold mb-6 text-center'>Collaboration with</h3>
                    <div className='flex flex-col justify-center items-center'><img src={collaboration2} alt="" />
                        <img src={collaboration1} alt="" />
                    </div>
                </div>
                <div className='shadow-md border-4 border-[#399918] shadow-[#399918] p-10 rounded-lg w-96 h-[436px] bg-white'>
                    <h3 className='text-3xl font-bold mb-6 text-center'>Approved by</h3>
                    <div className='flex justify-center items-center'>
                        <img src={approve1} alt="" />
                    </div>
                </div>
                <div className='shadow-md border-4 border-[#399918] shadow-[#399918]  p-10 rounded-lg w-96 bg-white'>
                    <h3 className='text-3xl font-bold mb-6 text-center'>Member of</h3>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={member1} alt="" />
                        <div className='w-80'><img src={member2} alt="" /></div>
                        <img src={member3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approve;