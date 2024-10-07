import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import img2 from '../../../assets/team/img1.jpg'
import { GrPaint } from "react-icons/gr";
import { GrCloudSoftware } from "react-icons/gr";
import { ImVideoCamera } from "react-icons/im";
import { TbSeo } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import { IoLogoPython } from "react-icons/io";

const CourseDepartment = () => {
    return (
        <div className='pt-16 max-w-7xl mx-auto'>
            <Swiper
                slidesPerView={5}
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
                className="mySwipe h-[157px] absolute -top-28"
            >
                <SwiperSlide >

                    <div className='card bg-white p-4 w-full shadow-md h-[90%]'>
                        <div className=' font-bold max-lg:text-[90%] max-lg:p-1 lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                            <p><GrPaint className='size-8 text-green-600' /></p>
                            <p>Graphic and Multimedia</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='card bg-white p-4 shadow-md h-[90%]'>
                        <div className=' font-bold max-lg:text-[90%] max-lg:p-1 lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                            <p><GrCloudSoftware className='size-8 text-green-600' /></p>
                            <p>Web and Software</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='card bg-white p-4 shadow-md h-[90%]'>
                        <div className=' font-bold max-lg:text-[90%] max-lg:p-1 lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                            <p><ImVideoCamera className='size-8 text-green-600' /></p>
                            <p>Video Editing</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='card bg-white p-4 shadow-md h-[90%]'>
                        <div className=' font-bold max-lg:text-[90%] max-lg:p-1 lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                            <p><TbSeo className='size-8 text-green-600' /></p>
                            <p>Digital marketing (SEO)</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='card bg-white p-4 shadow-md h-[90%]'>
                        <div className=' font-bold max-lg:text-[90%] lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                            <p><LuNetwork className='size-8 text-green-600' /></p>
                            <p>Networking</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='card bg-white p-4 shadow-md h-[90%]'>
                        <div className=' font-bold max-lg:text-[90%] max-lg:p-1 lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                            <p><IoLogoPython className='size-8 text-green-600' /></p>
                            <p>Python Developemnt</p>
                        </div>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default CourseDepartment;