import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import TeamItem from "./TeamItem";
import Seo from "../../Seo/Seo";

const Team = () => {
  return (
    <div className="bg-[#e6e7e7]">
      {/* <Seo title={'Our Support Team'} content='Beginner friendly page for learning React Helmet.'/> */}
      <div className="max-w-7xl mx-auto py-20 ">
        <h2 className="max-lg:text-3xl lg:text-5xl text-center font-extrabold pt-6 pb-20">
          Our Support Team
        </h2>
        <TeamItem />
      </div>
    </div>
  );
};

export default Team;
