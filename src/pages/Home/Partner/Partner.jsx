import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/partner/adb-logo.png.webp'
import img2 from '../../../assets/partner/amar-porikha.webp'
import img3 from '../../../assets/partner/basis-logo.png.webp'
import img4 from '../../../assets/partner/bing-logo.webp'
import img5 from '../../../assets/partner/Euitsols.webp'
import img6 from '../../../assets/partner/gov-logo.png.webp'
import img7 from '../../../assets/partner/KPI.png.webp'
import img8 from '../../../assets/partner/microsoft-logo.webp'
import img9 from '../../../assets/partner/midas-logo.webp'
import img10 from '../../../assets/partner/pamt-logo.webp'
import img11 from '../../../assets/partner/sunshine-logo.webp'
import img12 from '../../../assets/partner/tech-pro-logo.webp'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Partner = () => {
    return (
        <div className='max-w-7xl mx-auto py-20'>
            <h2 className=' text-5xl text-center font-extrabold pt-6 pb-20'>Our Partner </h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='mb-4' src={img1} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mb-4' src={img12} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Partner;