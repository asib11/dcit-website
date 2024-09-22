import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/team/asib.jpeg'
import img2 from '../../../assets/team/img1.jpg'
import img3 from '../../../assets/team/file.jpg'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Team = () => {
    return (
        <div className='max-w-7xl mx-auto py-20'>
            <h2 className=' text-5xl text-center font-extrabold pt-6 pb-20'>Our Support Team</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className=' flex flex-col justify-center items-center p-6'>
                        <img className='mb-4 rounded-full' src={img2} alt="" />
                        <h3 className='text-3xl font-bold uppercase'>Raizul Islam Khan</h3>
                        <p>Managing Director</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=' flex flex-col justify-center items-center p-6'>
                        <img className='mb-4 rounded-full' src={img3} alt="" />
                        <h3 className='text-3xl font-bold'>MD ANWAR HOSSAIN</h3>
                        <p>Software Engineer</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' flex flex-col justify-center items-center p-6 '>
                        <img className='rounded-full mb-4' src={img1} alt="" />
                        <h3 className='text-3xl font-bold'>ASIB AHMED</h3>
                        <p>Junior Software Engineer</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Team;