import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { GrPaint } from "react-icons/gr";
import { GrCloudSoftware } from "react-icons/gr";
import { ImVideoCamera } from "react-icons/im";
import { TbSeo } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import { IoLogoAndroid, IoLogoPython, IoLogoWordpress } from "react-icons/io";
import { Link } from 'react-router-dom';

const CourseDepartment = () => {
    const data = [
        {
            "name": "Graphic Design",
            "icon": <GrPaint className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "Responsive Web Design",
            "icon": <GrCloudSoftware className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "Video Editing",
            "icon": <ImVideoCamera className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "Digital marketing (SEO)",
            "icon": <TbSeo className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "Networking",
            "icon": <LuNetwork className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "Python Developemnt",
            "icon": <IoLogoPython className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "App Development",
            "icon": <IoLogoAndroid className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
        {
            "name": "Wordpress Development",
            "icon": <IoLogoWordpress className='size-8 text-green-600' />,
            "link": "dcitinstitue"
        },
    ]
    return (
        <div className='pt-16 max-w-7xl mx-auto max-lg:m-4'>
            {/* <Seo title={''} content='Beginner friendly page for learning React Helmet.'/> */}
            <Swiper
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 10
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 30
                    }
                  }}
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
                {
                    data.map((item, idx) => (
                            <SwiperSlide >
                               <Link  to={`/${item.link}`} key={idx}>
                               <div className='card bg-white p-4 w-full shadow-md h-[90%]'>
                                    <div className=' font-bold max-lg:text-[90%] max-lg:p-1 lg:text-2xl w-full h-full text-center flex flex-col justify-center items-center'>
                                        <p>{item.icon}</p>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                               </Link>
                            </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CourseDepartment;