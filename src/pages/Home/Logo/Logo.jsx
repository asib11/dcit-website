import React from "react";
import logo from "../../../assets/logo.png";
import dcitInstitute from "../../../assets/dcit-institute.png";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Seo from "../../Seo/Seo";

const Logo = () => {
  return (
    <div className="">
      <Seo title={'DCIT'} content='Beginner friendly page for learning React Helmet.'/>
      <div className="max-w-7xl mx-auto text-[18px] flex justify-between items-center mb-6">
        <Link to="/" className="w-20 mt-4 ml-4">
          <div className="w-20  mt-4 ml-4">
            <img src={logo} alt="DCIT Ltd" />
          </div>
        </Link>
        <div className="navbar-center hidden lg:flex">
          <div className="p-4 flex items-center font-semibold">
            <DevicePhoneMobileIcon className="size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6" />
            <div>
              <Link to={"tel:+8801710822207"}>
                <p className="hover:text-[#399918]">+8801710-822207</p>
              </Link>
              <Link to={"tel:+8801872884988"}>
                <p className="hover:text-[#399918]">+8801872-884988</p>
              </Link>
            </div>
          </div>
          <div className="p-4 flex items-center font-semibold">
            <EnvelopeIcon className="size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6" />
            <div>
              <Link to="mailto:dcitltd2022@gmail.com">
                <p className="hover:text-[#399918]">dcitltd2022@gmail.com</p>
              </Link>
              {/* <p className='hover:text-[#399918]'>asib.bubt@gmail.com</p> */}
            </div>
          </div>
        </div>
        <div>
          <Link to={"/dcitinstitue"}>
            <div className="w-24 mt-4 mr-4">
              <img src={dcitInstitute} alt="DCIT Institute" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
