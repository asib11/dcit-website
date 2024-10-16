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
import Seo from '../../Seo/Seo';
import { Link } from 'react-router-dom';

const Partner = () => {
    return (
        <div className='max-w-7xl mx-auto py-20 max-lg:m-4'>
            {/* <Seo title={'Our Partner'} content='Beginner friendly page for learning React Helmet.'/> */}
            <h2 className='max-lg:text-3xl lg:text-5xl text-center font-extrabold pt-6 pb-20'>Our Partner </h2>
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
                    <Link to={'https://www.adb.org/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img1} alt    ="adb" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.amarporikha.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img2} alt="amarporikha" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.basis.org.bd/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img3} alt="basis" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.bing.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img4} alt="bing" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.euitsols.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img5} alt="euitsols" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.gov.bd/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img6} 
                    alt="gov" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.kpi.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img7} alt="kpi" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.microsoft.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img8} alt="microsoft" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.midas.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img9} alt="midas" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.pamt.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img10} alt="pamt" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.sunshine.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img11} alt="sunshine" width="234" height="120" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'https://www.techpro.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img12} alt="techpro" width="234" height="120" /></Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Partner;