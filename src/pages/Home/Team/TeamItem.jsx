import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import team from "./team.json";

const TeamItem = () => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwipe"
    >
      {team.map((item, index) => (
        <SwiperSlide className="card bg-white p-5" key={index}>
          <div className="flex flex-col h-[400px]">
            <div className="w-56 h-64 mb-4 mx-auto overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover object-center"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                <p>{item.position}</p>
              </div>
              <div className="flex justify-center space-x-3 mt-auto">
                <a
                  href={item.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white size-6 w-10 h-10 flex justify-center items-center rounded-full bg-blue-400 hover:bg-blue-500"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href={item.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white size-6 w-10 h-10 flex justify-center items-center rounded-full bg-gray-500 hover:bg-black"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href={item.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white size-6 w-10 h-10 flex justify-center items-center rounded-full bg-[#0077B5] hover:bg-[#255e7d]"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamItem;
