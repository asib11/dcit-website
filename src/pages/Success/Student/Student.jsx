import React from 'react';
import img from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Student = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex h-[530px]'>
                <div className='w-1/2 h-full bg-gradient-to-br text-white p-16 from-red-700 to-green-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea quas obcaecati, alias non quos et dolorum dignissimos tenetur quaerat maiores cumque nostrum eveniet facere in velit reiciendis ratione ad!
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div className=' flex flex-col justify-center items-center p-6'>
                        <img className='mb-4 rounded-full' src={img} alt="" />
                        <h3 className='text-3xl font-bold uppercase'>Raizul Islam Khan</h3>
                        <p className='text-xl'><strong>Course: </strong> Python Development</p>
                        <p className='text-xl'><strong>Batch: </strong> 00001</p>
                        <Link to={''} className="btn bg-[#399918] text-white bg-gradient-to-r hover:from-red-500 hover:to-green-500">Find on Facebook </Link>
                    </div>
                </div>
            </div>
            <div className='flex h-[530px]'>
                <div className='w-1/2 flex justify-center'>
                    <div className=' flex flex-col justify-center items-center p-6'>
                        <img className='mb-4 rounded-full' src={img} alt="" />
                        <h3 className='text-3xl font-bold uppercase'>Raizul Islam Khan</h3>
                        <p className='text-xl'><strong>Course: </strong> Python Development</p>
                        <p className='text-xl'><strong>Batch: </strong> 00001</p>
                        <Link to={''} className="btn bg-[#399918] text-white bg-gradient-to-r hover:from-red-500 hover:to-green-500">Find on Facebook </Link>
                    </div>
                </div>
                <div className='w-1/2 h-full bg-gradient-to-br text-white p-16 from-red-700 to-green-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea quas obcaecati, alias non quos et dolorum dignissimos tenetur quaerat maiores cumque nostrum eveniet facere in velit reiciendis ratione ad!
                </div>

            </div>
        </div>
    );
};

export default Student;