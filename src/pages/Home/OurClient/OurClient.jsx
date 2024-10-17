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
import Seo from '../../Seo/Seo';
import { Link } from 'react-router-dom';

const OurClient = () => {
    return (
        <div className=''>
            {/* <Seo title={'Our Collaboration With'} content='Beginner friendly page for learning React Helmet.'/> */}
            <div className='max-w-7xl mx-auto max-lg:py-10 lg:py-20 max-lg:m-4' >
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
                        <Link to={''} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img2} alt="img 3" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'https://www.pbghs.edu.bd/content/3.html'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img3} alt="pbghs" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img4} alt="img 4" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img10} alt="img 5" width="125" height="89" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'https://step-dte.gov.bd/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img5} alt="STEP" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'https://deb132618.dhakaeducationboard.gov.bd/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img6} alt="deb132618" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'https://www.shergmc.edu.bd/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img7} alt="shergmc" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'https://nhrc.org.bd/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img8} alt="nhrc" width="400" height="200" /></Link>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[60%]'>
                            <Link to={'https://www.chewyjunior.com.sg/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img9} alt="chewyjunior" width="400" height="200" /></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={'https://cosmosholiday.com/'} target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img11} alt="cosmosholiday" width="490" height="221" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link target="_blank" rel="noopener noreferrer"><img className='mb-4' src={img12} alt="img 12" width="400" height="200" /></Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurClient;