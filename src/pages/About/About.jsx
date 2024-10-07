import React from "react";
import logo from "../../assets/logo.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Team from "../Home/Team/Team";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import pdf from "../../assets/DCIT_Corporate_profile.pdf";

const About = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto text-justify mb-16 max-lg:p-4">
        <div className="flex justify-center mt-16 mb-5">
          <img src={logo} alt="" />
        </div>
        <h1 className="text-5xl mb-1 text-center font-bold font-sans italic">
          Dhaka Centre<span className="text-red-500">NIC</span> IT Limited
        </h1>
        <p className="text-xl text-center mb-4 text-green-500">
          Centre for National Intregration & Co-ordination Information
          Technology
        </p>
        <p>
          We're DCIT LTD, have the pleasure to express ourselves as an absolute
          Software Development company in Dhaka Bangladesh that is specialized
          for Web development and solution. It is situated in Bangladesh for
          more than 8 years. We have already achieved our reputation by the
          completion of numerous successful web projects worldwide. Moreover, we
          are very prominent by our professional approach to work with and
          meanwhile we have got certified & for our support and service. The
          organization is managed and operated by a great Management Board
          consist of highly professional executives under a operational
          guidelines. DCIT has grown with time and is being updating itself with
          the ever changing scenario of the technology enhancement and always
          keeps a focus on updated technology and tools. The growth of the
          organization followed the path of getting used to rising Web
          development needs and solution services in any arena of domestic
          corporate and International conglomerate which is the integral part of
          our development planning. DCIT, one of the first generation Web
          solution service house of Bangladesh, thus survived the test of time
          and earned experience, institutional strength and a management system
          which is perfect to understand and interact with any kind of client
          including government, bilateral even multilateral and also
          non-governmental bodies and agencies to understand the specific IT
          needs specially Web functionality and Management Information System
          (MIS) and contribute to development approaches, implementation and
          priorities through associating ourselves once and for all with the
          stages and method of need-driven spheres of IT innovation activities.
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Keep a copy of our <span className="text-red-600">Company</span>{" "}
          Profile, Click Download button to have it.
        </h2>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 flex items-center"
          onClick={() => window.open(pdf, "_blank")}
        >
          <ArrowDownTrayIcon className="size-6 mr-2" />
          Download
        </button>
      </div>
      <Team />
    </div>
  );
};

export default About;
