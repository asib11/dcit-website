import React from 'react';
import graphics1 from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className='bg-[#e6e7e7]'>
            <h1 className='text-5xl text-center font-bold pt-16 mb-6 '>News</h1>
            <div className='grid grid-cols-1 justify-items-center gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto py-20'>
                <div onClick={''} className="card w-96 shadow-xl rounded-sm bg-white">
                    <figure>
                        <img
                            className='w-full p-1 rounded-sm'
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <Link to={'/news/newsDetails'} className='text-lime-500 font-semibold'>Read more...</Link>
                        <p className='text-[#f58d5d] font-bold text-lg'>🚨সতর্কতামূলক পোস্ট :</p>
                        {/* <p className='font-bold text-xl'>Graphics Design</p> */}

                    </div>
                    <p className='border-t-2 px-8 py-4'>11<sup>th</sup> July 2024</p>
                </div>
                <div onClick={''} className="card w-96 shadow-xl rounded-sm bg-white">
                    <figure>
                        <img
                            className='w-full p-1 rounded-sm'
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <Link to={'/news/newsDetails'} className='text-lime-500 font-semibold'>Read more...</Link>
                        <p className='text-[#f58d5d] font-bold text-lg'>🚨সতর্কতামূলক পোস্ট :</p>
                        {/* <p className='font-bold text-xl'>Graphics Design</p> */}

                    </div>
                    <p className='border-t-2 px-8 py-4'>11<sup>th</sup> July 2024</p>
                </div>
                <div onClick={''} className="card w-96 shadow-xl rounded-sm bg-white">
                    <figure>
                        <img
                            className='w-full p-1 rounded-sm'
                            src={graphics1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <Link to={'/newsDetails'} className='text-lime-500 font-semibold'>Read more...</Link>
                        <p className='text-[#f58d5d] font-bold text-lg'>🚨সতর্কতামূলক পোস্ট :</p>
                        {/* <p className='font-bold text-xl'>Graphics Design</p> */}

                    </div>
                    <p className='border-t-2 px-8 py-4'>11<sup>th</sup> July 2024</p>
                </div>
            </div>
        </div>
    );
};

export default News;