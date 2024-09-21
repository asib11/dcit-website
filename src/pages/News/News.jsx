import React from 'react';
import graphics1 from '../../assets/logo.png'

const News = () => {
    return (
        <div>
            <div className='grid grid-cols-1 justify-items-center gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20'>
                <div onClick={''} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#f58d5d] font-bold text-lg'>🚨সতর্কতামূলক পোস্ট :</p>
                        {/* <p className='font-bold text-xl'>Graphics Design</p> */}

                    </div>
                </div>
                <div onClick={''} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#f58d5d] font-bold text-lg'>🚨সতর্কতামূলক পোস্ট :</p>
                        {/* <p className='font-bold text-xl'>Graphics Design</p> */}

                    </div>
                </div>
                <div onClick={''} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className='text-[#f58d5d] font-bold text-lg'>🚨সতর্কতামূলক পোস্ট :</p>
                        {/* <p className='font-bold text-xl'>Graphics Design</p> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;