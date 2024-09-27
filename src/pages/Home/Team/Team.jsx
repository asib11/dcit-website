import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/team/asib.jpeg'
import img2 from '../../../assets/team/img1.jpg'
import img3 from '../../../assets/team/file.jpg'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Team = () => {
    return (
        <div className='bg-[#e6e7e7]'>
            <div className='max-w-7xl mx-auto py-20 '>
                <h2 className=' text-5xl text-center font-extrabold pt-6 pb-20'>Our Support Team</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwipe "
                >
                    <SwiperSlide className='card bg-white p-1 '>

                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-2 rounded-lg' src={img2} alt="" />
                            <div className='p-2 text-center'>
                                <h3 className='text-xl font-bold uppercase'>Raizul Islam Khan</h3>
                                <p>Managing Director</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='card  bg-white p-1'>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-2 rounded-lg' src={img3} alt="" />
                            <div className='p-2 text-center'>
                                <h3 className='text-xl font-bold uppercase'>MD ANWAR HOSSAIN</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='card p-1 bg-white'>
                        <div className=' flex flex-col justify-center items-center'>
                            <img className='mb-2 rounded-lg' src={img1} alt="" />
                            <div className='p-2 text-center'>
                                <h3 className='text-xl font-bold uppercase'>ASIB AHMED</h3>
                                <p>Junior Software Engineer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='card bg-white p-1 '>

                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-2 rounded-lg' src={img2} alt="" />
                            <div className='p-2 text-center'>
                                <h3 className='text-xl font-bold uppercase'>Raizul Islam Khan</h3>
                                <p>Managing Director</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='card bg-white p-1'>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-2 rounded-lg' src={img3} alt="" />
                            <div className='p-2 text-center'>
                                <h3 className='text-xl font-bold uppercase'>MD ANWAR HOSSAIN</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='card p-1 bg-white'>
                        <div className=' flex flex-col justify-center items-center'>
                            <img className='mb-2 rounded-lg' src={img1} alt="" />
                            <div className='p-2 text-center'>
                                <h3 className='text-xl font-bold uppercase'>ASIB AHMED</h3>
                                <p>Junior Software Engineer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Team;