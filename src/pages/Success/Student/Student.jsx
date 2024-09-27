import React from 'react';
import img from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Student = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-5xl text-center font-bold py-16'>Student Success</h3>
            <div className='flex h-[400px]'>
                <div className='w-1/2 h-full p-16 bg-[#f2faf0]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea quas obcaecati, alias non quos et dolorum dignissimos tenetur quaerat maiores cumque nostrum eveniet facere in velit reiciendis ratione ad!
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div className=' flex flex-col justify-center items-center p-6'>
                        <img className='mb-4 rounded-full' src={img} alt="" />
                        <h3 className='text-3xl font-bold uppercase'>Raizul Islam Khan</h3>
                        <p className='text-xl'><strong>Course: </strong> Python Development</p>
                        <p className='text-xl'><strong>Batch: </strong> 00001</p>
                        <Link to={''} className="btn bg-[#399918] text-white ">Find on Facebook </Link>
                    </div>
                </div>
            </div>
            <div className='flex h-[400px]'>
                <div className='w-1/2 flex justify-center'>
                    <div className=' flex flex-col justify-center items-center p-6'>
                        <img className='mb-4 rounded-full' src={img} alt="" />
                        <h3 className='text-3xl font-bold uppercase'>Raizul Islam Khan</h3>
                        <p className='text-xl'><strong>Course: </strong> Python Development</p>
                        <p className='text-xl'><strong>Batch: </strong> 00001</p>
                        <Link to={''} className="btn bg-[#399918] text-white ">Find on Facebook </Link>
                    </div>
                </div>
                <div className='w-1/2 h-full p-16 bg-[#f2faf0]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea quas obcaecati, alias non quos et dolorum dignissimos tenetur quaerat maiores cumque nostrum eveniet facere in velit reiciendis ratione ad!
                </div>

            </div>
        </div>
    );
};

export default Student;