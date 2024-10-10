import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import img2 from '../../../assets/client/1513163978c3.png'
import img3 from '../../../assets/client/1513163988c4.png'
import img4 from '../../../assets/client/1513163997c5.png'
import img5 from '../../../assets/client/1513164007c10.png'
import img6 from '../../../assets/client/1513164016c12.png'
import img7 from '../../../assets/client/1513164025c14.png'
import img8 from '../../../assets/client/1513164041c15.png'
import img9 from '../../../assets/client/1513164053c21.png'
import img10 from '../../../assets/client/1513164160c28.png'
import img11 from '../../../assets/client/1513164180c6.gif'
import img12 from '../../../assets/client/1513164196c8.png'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const OurClient = () => {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto py-20 max-lg:m-4' >
                <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold pt-6 pb-20'>Our Collaboration With</h2>
                <Swiper
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 3,
                          spaceBetween: 20
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 30
                        },
                        // when window width is >= 1024px
                        1024: {
                          slidesPerView: 6,
                          spaceBetween: 30
                        }
                      }}
                    
                    freeMode={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
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
        </div>
    );
};

export default OurClient;