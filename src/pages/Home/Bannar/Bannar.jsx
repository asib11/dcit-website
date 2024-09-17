import React from 'react';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Bannar = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><img className='w-full h-full' src={img6} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img2} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img1} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img3} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img4} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img5} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img6} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img6} /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full' src={img6} /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Bannar;