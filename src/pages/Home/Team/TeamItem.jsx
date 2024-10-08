import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import team from "./team.json";

const TeamItem = () => {
  const [teamWithImages, setTeamWithImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const updatedTeam = await Promise.all(
        team.map(async (member) => {
          const imageModule = await import(`${member.image}`);
          return { ...member, imageUrl: imageModule.default };
        })
      );
      setTeamWithImages(updatedTeam);
    };

    loadImages();
  }, []);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwipe"
    >
      {teamWithImages.map((item, index) => (
        <SwiperSlide className="card bg-white p-5 min-h-[450px]" key={index}>
          <div className="flex flex-col justify-center items-center">
            <div className="w-56 h-64 mb-2 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover object-center"
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
            <div className="p-2 text-center flex flex-col justify-evenly items-center">
              <h3 className="max-lg:text-[16px] lg:text-xl font-bold uppercase">
                {item.name}
              </h3>
              <p className="mb-2">{item.position}</p>
              <div className="flex justify-center space-x-3 mt-4">
                <a
                  href={item.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white size-6 w-10 h-10 flex justify-center items-center rounded-full bg-gray-400 hover:bg-gray-500"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href={item.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white size-6 w-10 h-10 flex justify-center items-center rounded-full bg-gray-400 hover:bg-gray-500"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href={item.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white size-6 w-10 h-10 flex justify-center items-center rounded-full bg-gray-400 hover:bg-gray-500"
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
