import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhone, FaInfo, FaMailBulk } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import info from './../../../info.json'
import Seo from "../../Seo/Seo";
import logo from "../../../assets/logo.png";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);
  useEffect(() => {
    fetch("/footerLink.json")
      .then((response) => response.json())
      .then((data) => setFooterLinks(data));
  }, []);

  return (
    <div className="bg-[#f4f4f4]">
      {/* <Seo title={`footer`} content='Beginner friendly page for learning React Helmet.'/> */}
      <div className="bg-green-50 py-16 ">
        <footer className="footer p-6 max-w-7xl mx-auto text-base">
          <nav>
            <h3 className="footer-title text-xl text-green-700">Head Office</h3>
            <p className="">
              Doyel S.A. Tower 220/A/1, <br />
              South Pirerbag, Amtola, 60 feet,
              <br />
              Mirpur - 2, Dhaka-1216
            </p>

            <h3 className="footer-title text-xl  pt-4 text-green-700">Rangpur Office</h3>
            <p className="">
              House: #166 ( 1st Floor ) <br />
              Road #01, Aamtola Mor <br />
              Mulatol, Rangpur.
            </p>

            <h3 className="footer-title text-xl pt-4 text-green-700">Contact</h3>
            <p className="">
              <Link to={"tel:+8801710822207"}>
                <p className="hover:text-[#399918] flex items-center gap-2"><FaWhatsapp className="text-green-400" />+8801710-822207</p>
              </Link>
              <Link to={"tel:+8801872884988"}>
                <p className="hover:text-[#399918] flex items-center gap-2"><FaPhone className="text-yellow-600" />+8801872-884988</p>
              </Link>
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
            </p>

          </nav>


          {
            footerLinks.map((link) => (
              <nav>
                <h3 className="footer-title text-xl text-green-700">{link?.Head}</h3>
                {
                  link?.sublink?.map((sublink) => (
                    <Link to={sublink.link} className="link link-hover">
                      {sublink.name}
                    </Link>
                  ))
                }
              </nav>
            ))
          }

          <nav>
            <h3 className="footer-title text-xl text-green-700"> Follow us on</h3>

            <div className="flex gap-6">
              <p>
                <a href={info.social.facebook} className="link link-hover text-3xl text-blue-600" target="_blank">
                  <FaFacebookF />
                </a>
              </p>
              <p>
                <a href={info.social.twitter} className="link link-hover text-3xl text-gray-800" target="_blank"  >
                  <FaXTwitter />
                </a>
              </p>
              <p>
                <a href={info.social.linkedin} className="link link-hover text-3xl text-blue-600" target="_blank">
                  <FaLinkedinIn />
                </a>
              </p>
              <p>
                <a href={info.social.instagram} className="link link-hover text-3xl text-red-600" target="_blank">
                  <FaInstagram />
                </a>
              </p>
            </div>
            <div className="mt-4">
              <img src={logo} alt="DCIT Ltd" width="191" height="163" />
            </div>
          </nav>
        </footer>
      </div>
      <div className="flex px-8 py-5 text-sm justify-center font-semibold bg-[#b8dfb8] ">
        <div className="text-center">
          <p>
            {" "}
            Copyrights &copy; 2024. All Rights Reserved by Dhaka CentreNIC IT
            Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
