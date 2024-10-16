import React from 'react';
import collaboration1 from '../../../assets/approved-by/VICTVS_log-1.png.webp'
import collaboration2 from '../../../assets/approved-by/European_IT_Solutions_Institute_BITM_Logo-400x210.png.webp'
import approve1 from '../../../assets/approved-by/NSDApng.png.webp'
import member1 from '../../../assets/approved-by/basis-logo.png.webp'
import member2 from '../../../assets/approved-by/bacco-image.jpg.webp'
import ecab from '../../../assets/approved-by/ecab.png'
import bwcci from '../../../assets/approved-by/bwcci-logo.png'
import nsda from '../../../assets/STP-DHA-002201 (1).pdf'
import Seo from '../../Seo/Seo';
import { Link } from 'react-router-dom';

const Approve = () => {

    return (
        <div className='bg-[#e6e7e7] px-4 py-16'>
            {/* <Seo title={`approve`} content='Beginner friendly page for learning React Helmet.'/> */}
            <div className='flex max-md:flex-col justify-center max-lg:gap-8 lg:gap-16 max-w-7xl mx-auto'>
                <div className='md:w-1/3 rounded-md bg-white p-1'>
                    <div className='w-full rounded-md bg-white p-5 font-bold h-full flex flex-col justify-center items-center'>
                        <h2 className='max-lg:text-2xl lg:text-3xl font-bold mb-6 text-center'>Collaboration with</h2>
                        <div className='flex flex-col justify-center items-center h-full space-y-5'>
                            <div className='w-[80%]'>
                                <Link to={'https://www.bitm.org.bd/'} target="_blank" rel="noopener noreferrer"><img src={collaboration2} alt="BITM" width="400" height="210" className='hover:scale-110'/></Link>
                            </div>
                            <Link to={'https://www.victvs.co.uk/'} target="_blank" rel="noopener noreferrer"><img src={collaboration1} alt="VICTVS" className='hover:scale-110' width="300" height="89" /></Link>
                        </div>
                    </div>
                </div>
                {/* <div className='shadow-md border-4 border-[#399918] shadow-[#399918] p-10 rounded-lg w-96 h-[436px] bg-white'       >
                    
                    <h2 className='text-3xl font-bold mb-6 text-center'>Approved by</h2>
                    <div className='flex justify-center items-center'>
                        <img src={approve1} alt="" />
                    </div>
                </div> */}
                <div className='md:w-1/3 rounded-md bg-white p-1'>
                    <div className='w-full rounded-md bg-white p-5 font-bold h-full flex flex-col justify-center items-center'>
                        <h2 className='max-lg:text-2xl lg:text-3xl font-bold mb-6  text-center'>Approved by</h2>
                        <div className='flex justify-center items-center h-full' onClick={() => window.open(nsda, "_blank")}>
                            <img src={approve1} alt="NSDA" className='w-full hover:scale-110' width="150" height="151" />
                            {/* <img src={collaboration1} alt="" /> */}
                        </div>
                    </div>
                </div>
                {/* <div className='shadow-md border-4 border-[#399918] shadow-[#399918]  p-10 rounded-lg w-96 bg-white' >
                    <h2 className='text-3xl font-bold mb-6 text-center'>Member of</h2>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={member1} alt="" />
                        <div className='w-80'><img src={member2} alt="" /></div>
                        <img src={member3} alt="" />
                    </div>
                </div> */}
                <div className='md:w-1/3 rounded-md bg-white p-1'>
                    <div className='w-full rounded-md bg-white p-5 font-bold h-full flex flex-col justify-center items-center'>
                        <h2 className='max-lg:text-2xl lg:text-3xl font-bold mb-6 text-center'>Member of</h2>
                        <div className='flex flex-col justify-center items-center h-full w-full space-y-2'>
                            <div>
                                <Link to={'https://basis.org.bd/'} target="_blank" rel="noopener noreferrer"><img src={member1} alt="BASIS" width="234" height="120" className='hover:scale-110'/></Link>
                            </div>
                            <div className='w-[85%]'>
                                <Link to={'https://www.bacco.org.bd/'} target="_blank" rel="noopener noreferrer"><img src={member2} alt="BACCO" width="1325" height="421" className='hover:scale-110'/></Link>
                            </div>
                            <div className='w-1/2'>
                                <Link to={'https://bwcci-bd.org/'} target="_blank" rel="noopener noreferrer"><img src={bwcci} alt="BWCCI" width="400" height="400" className='hover:scale-110'/></Link>
                            </div>
                            <div className='hover:scale-110'>
                                <Link to={'https://e-cab.net/'} target="_blank" rel="noopener noreferrer"><img src={ecab} className='w-[99%]' alt="ECAB" width="400" height="400" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approve;