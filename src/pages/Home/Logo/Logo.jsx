import React from "react";
import logo from "../../../assets/logo.png";
import dcitInstitute from "../../../assets/dcit-institute.png";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import nsda from '../../../assets/approved-by/NSDApng.png.webp'
import Seo from "../../Seo/Seo";
import { FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="">
      {/* <Seo title={'DCIT'} content='Beginner friendly page for learning React Helmet.'/> */}
      <div className="max-w-7xl mx-auto text-[18px] flex justify-between items-center mb-6">
        <Link to="/" className="w-20 mt-4 ml-4">
          <div className="w-20 ml-4">
            <img src={logo} alt="DCIT Ltd" width="191" height="163" />
          </div>
        </Link>
        <div className="navbar-center hidden lg:flex">
          <div className="p-4 flex items-center font-semibold">
            {/* <DevicePhoneMobileIcon className="size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6" /> */}
            <div>
            <Link to={"tel:+8801710822207"}>
                <p className="hover:text-[#399918] flex items-center gap-2"><FaWhatsapp className="text-green-500" />+8801710-822207</p>
              </Link>
              <Link to={"tel:+8801872884988"}>
                <p className="hover:text-[#399918] flex items-center gap-2"><FaPhone className="text-red-400" />+8801872-884988</p>
              </Link>
            </div>
          </div>
          <div className="p-4 flex items-center font-semibold">
            {/* <EnvelopeIcon className="size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6" /> */}
            <div>
            <Link to="mailto:info@dcitltd.com.bd">
                <p className="hover:text-[#399918] flex items-center gap-2"><FaMailBulk className="text-red-600" />info@dcitltd.com.bd</p>
              </Link>
              <Link to="mailto:support@dcitltd.com.bd">
                <p className="hover:text-[#399918]  flex items-center gap-2"><FaMailBulk className="text-green-600" />support@dcitltd.com.bd</p>
              </Link>
              <Link to="mailto:contact@dcitltd.com.bd">
                <p className="hover:text-[#399918]  flex items-center gap-2"><FaMailBulk className="text-red-600" />contact@dcitltd.com.bd</p>
              </Link>
              <Link to="mailto:dcitltd2022@gmail.com">
                <p className="hover:text-[#399918]  flex items-center gap-2"><FaMailBulk className="text-green-600" />dcitltd2022@gmail.com</p>
              </Link>
              {/* <p className='hover:text-[#399918]'>asib.bubt@gmail.com</p> */}
            </div>
          </div>
        </div>

        <div className="flex">
          <div className='w-20 mt-4 mr-4' onClick={() => window.open(nsda, "_blank")}>
            <img src={nsda} alt="NSDA" className='w-full hover:scale-110' width="150" height="151" />
          </div>
          <Link to={"/dcitinstitue"}>
            <div className="w-20 mt-4 mr-4">
              <img src={dcitInstitute} alt="DCIT Institute" width="225" height="225" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
