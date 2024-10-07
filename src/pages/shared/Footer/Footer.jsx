import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="bg-[#d3e9d3] py-16 ">
        <footer className="footer p-6 max-w-7xl mx-auto text-base">
          <nav>
            <h6 className="footer-title text-xl">Head Office</h6>
            <p className="">
              Doyel S.A. Tower 220/A/1, <br />
              South Pirerbag, Amtola, 60 feet,
              <br />
              Mirpur - 2, Dhaka-1216
            </p>
            <h6 className="footer-title text-xl pt-4">Contact</h6>
            <p>
              +8801710-822207 <br />
              +8801872-884988 <br />
              dcitltd2022@gmail.com
            </p>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Rangpur Office</h6>
            <p className="">
              House: #166 ( 1st Floor ), Road #01,
              <br />
              Aamtola Mor, Mulatol, Rangpur.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Softwares</h6>
            <Link to={""} className="link link-hover">
              Restaurant Management Software
            </Link>
            <Link to={""} className="link link-hover">
              Accounting Software
            </Link>
            <Link to={""} className="link link-hover">
              Inventory Software
            </Link>
            <Link to={""} className="link link-hover">
              Human Resource Management Software
            </Link>
            <Link to={""} className="link link-hover">
              Medicine Store Application
            </Link>
            <Link to={""} className="link link-hover">
              Billing Automation Software
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Services</h6>
            <Link to={""} className="link link-hover">
              Website Development
            </Link>
            <Link to={""} className="link link-hover">
              Android App Development
            </Link>
            <Link to={""} className="link link-hover">
              Digital Marketing Service
            </Link>
            <Link to={""} className="link link-hover">
              Search Engine Submission
            </Link>
            <Link to={""} className="link link-hover">
              Logo Design Service
            </Link>
            <Link to={""} className="link link-hover">
              Email Marketing Service
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-xl"> Follow us on</h6>
            <div className="flex gap-6">
              <p>
                <Link to={""} className="link link-hover">
                  <FaFacebookF />
                </Link>
              </p>
              <p>
                <Link to={""} className="link link-hover">
                  <FaXTwitter />
                </Link>
              </p>
              <p>
                <Link to={""} className="link link-hover">
                  <FaLinkedinIn />
                </Link>
              </p>
              <p>
                <Link to={""} className="link link-hover">
                  <FaInstagram />
                </Link>
              </p>
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
