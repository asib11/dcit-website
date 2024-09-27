import React from 'react';
import img from '../../../assets/partner/adb-logo.png.webp'

const Expart = () => {
    return (
        <div>
            <h3 className='text-5xl font-bold  py-16 max-w-7xl mx-auto bg-white'>Professional Expert Opinion</h3>
            <div className=' bg-gray-200'>
                <div className='max-w-7xl mx-auto pb-16'>
                    <h3 className='text-5xl text-center font-bold py-16'>What people say about us</h3>
                    <div className='flex flex-col gap-8'>
                        <div className='flex shadow-2xl odd:flex-row even:flex-row-reverse'>
                            <div className='text-center w-1/2 bg-white py-10 flex flex-col items-center justify-center'>
                                <h3 className='text-5xl font-bold pb-6'>Fazley Rabby</h3>
                                <p className='text-2xl pb-6'>
                                    <strong>CEO:</strong>Esposto
                                </p>
                                <button className='btn bg-[#399918] rounded-md text-white'>View on Facebook</button>
                            </div>
                            <div className='w-1/2 p-16 bg-[#baf2ac]'>
                                <div className='flex justify-center'>
                                    <img src={img} alt="" />
                                </div>
                                <p className='text-lg font-medium text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, animi adipisci! Asperiores animi ipsa commodi ducimus? Ea nam placeat vero veritatis. Vitae et aut repellendus. Assumenda ipsum itaque ipsa in.</p>
                            </div>
                        </div>
                        
                        <div className='flex shadow-2xl odd:flex-row even:flex-row-reverse'>
                            <div className='text-center w-1/2 bg-white py-10 flex flex-col items-center justify-center'>
                                <h3 className='text-5xl font-bold pb-6'>Fazley Rabby</h3>
                                <p className='text-2xl pb-6'>
                                    <strong>CEO:</strong>Esposto
                                </p>
                                <button className='btn bg-[#399918] rounded-md text-white'>View on Facebook</button>
                            </div>
                            <div className='w-1/2 p-16 bg-[#baf2ac]'>
                                <div className='flex justify-center'>
                                    <img src={img} alt="" />
                                </div>
                                <p className='text-lg font-medium text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, animi adipisci! Asperiores animi ipsa commodi ducimus? Ea nam placeat vero veritatis. Vitae et aut repellendus. Assumenda ipsum itaque ipsa in.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Expart;