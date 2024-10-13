import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const courseData = form.courseData.value;
    const textArea = form.textArea.value;
    const user = { name, email, phone, courseData, textArea };

    fetch("https://dcit-server.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your message has been sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className=" mt-16">
      <Seo title={'contact'} content='Beginner friendly page for learning React Helmet.'/>
      <h2
        className="max-lg:text-3xl lg:text-5xl text-center font-extrabold my-16"
      >
        Contact Us
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex lg:flex-row justify-center items-center">
        <div className="lg:w-3/4 flex flex-col p-6 lg:p-0">
          <form onSubmit={contactInfo}>
            <div className="flex gap-4">
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full mb-6 mr-6 border-[#399918]"
                  required
                />

                <input
                  type="Email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mb-6 mr-6 border-[#399918]"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered w-full mb-6 mr-6 border-[#399918]"
                  required
                />

                <select
                  className="select select-bordered w-full border-[#399918]"
                  name="courseData"
                  required
                >
                  <option disabled selected>
                    Please Select One course
                  </option>
                  <option>Python Development</option>
                  <option>Web Design</option>
                  <option>Web Design and Development</option>
                  <option>React Js</option>
                  <option>Next Js</option>
                  <option>MERN Stack Development</option>
                  <option>Networking</option>
                </select>
              </div>
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered border-[#399918] w-full h-48"
                placeholder="Write Here..."
                name="textArea"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-xl bg-[#399918] hover:bg-lime-600 text-white"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="lg:w-1/4">
          <div className="p-6 lg:pl-12 grid lg:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-4 lg:gap-8">
            <div className="flex ">
              <MapPinIcon className="max-lg:size-6 lg:size-8 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6" />
              <div className="flex flex-col">
                <h3 className="font-bold max-lg:text-[14px] lg:text-xl mb-2">
                  Address
                </h3>
                <p className="text-sm">
                  Doyel S.A. Tower 220/A/1, <br />
                  South Pirerbag, Amtola, 60 feet,
                  <br />
                  Mirpur - 2, Dhaka-1216
                </p>
              </div>
            </div>
            <div className="flex">
              <DevicePhoneMobileIcon className="max-lg:size-6 lg:size-8 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6" />
              <div className="flex flex-col">
                <h3 className="font-bold max-lg:text-[14px] lg:text-xl mb-2">
                  Call Us
                </h3>
                <Link to={"tel:+8801710822207"}>
                  <p className="hover:text-[#399918] text-sm">
                    +8801710-822207
                  </p>
                </Link>
                <Link to={"tel:+8801872884988"}>
                  <p className="hover:text-[#399918] text-sm">
                    +8801872-884988
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex">
              <EnvelopeIcon className="max-lg:size-4 lg:size-8 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6" />
              <div className="flex flex-col">
                <h3 className="font-bold max-lg:text-[14px] lg:text-xl mb-2">
                  Email
                </h3>
                <Link to="mailto:dcitltd2022@gmail.com">
                  <p className="hover:text-[#399918] text-sm">
                    dcitltd2022@gmail.com
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex">
              <ClockIcon className="max-lg:size-6 lg:size-8 rounded-full border-2 p-1 text-[#399918] border-[#399918] mr-6" />
              <div className="flex flex-col">
                <h3 className="font-bold max-lg:text-[14px] lg:text-xl mb-2">
                  Work Hours
                </h3>
                <p className="text-sm">
                  Monday - Sunday <br />
                  10AM - 09PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="w-full mt-16"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14603.495412285229!2d90.370296!3d23.787506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c100504c6233%3A0x507015786bd5545d!2sDCIT%20Ltd!5e0!3m2!1sen!2sbd!4v1727425309532!5m2!1sen!2sbd"
        width="800"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className=" px-[20px] py-[60px] max-w-7xl mx-auto">
        <div className="grid max-lg:grid-cols-2 lg:grid-flow-col max-lg:px-6 lg:justify-items-center max-lg:gap-6">
          <div>
            <div className="max-lg:flex max-lg:mb-3 max-lg:items-center">
              <MapPinIcon className="max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6" />
              <h3 className="font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2">
                Address
              </h3>
            </div>
            <p className="max-md:text-[12px] max-lg:text-sm lg:text-lg">
              Doyel S.A. Tower 220/A/1, <br />
              South Pirerbag, Amtola, 60 feet,
              <br />
              Mirpur - 2, Dhaka-1216
            </p>
          </div>
          <div>
            <div className="max-lg:flex max-lg:mb-3 max-lg:items-center">
              <DevicePhoneMobileIcon className="max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6" />
              <h3 className="font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2">
                Call Us
              </h3>
            </div>
            <Link to={"tel:+8801710822207"}>
              <p className="hover:text-[#399918] max-md:text-[12px] max-lg:text-sm lg:text-lg">
                +8801710-822207
              </p>
            </Link>
            <Link to={"tel:+8801872884988"}>
              <p className="hover:text-[#399918] max-md:text-[12px] max-lg:text-sm lg:text-lg">
                +8801872-884988
              </p>
            </Link>
          </div>
          <div>
            <div className="max-lg:flex max-lg:mb-3 max-lg:items-center">
              <EnvelopeIcon className="max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6" />
              <h3 className="font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2">
                Email
              </h3>
            </div>
            <Link to="mailto:dcitltd2022@gmail.com">
              <p className="hover:text-[#399918] max-md:text-[12px] max-lg:text-sm lg:text-lg">
                dcitltd2022@gmail.com
              </p>
            </Link>
          </div>
          <div>
            <div className="max-lg:flex max-lg:mb-3 max-lg:items-center">
              <ClockIcon className="max-lg:size-8 lg:size-12 rounded-full max-lg:border-2 lg:border-4 p-1 text-[#399918] border-[#399918] mr-6" />
              <h3 className="font-extrabold max-md:text-[16px] max-lg:text-xl lg:text-3xl my-2">
                Work Hours
              </h3>
            </div>
            <p className="max-md:text-[12px] max-lg:text-sm lg:text-lg">
              Monday - Sunday <br />
              10AM - 09PM
            </p>
          </div>
        </div>
        <div className="flex mt-6 justify-center">
          <Link
            to={"/contact"}
            className="btn bg-[#399918]  px-10 text-white hover:bg-lime-500"
          >
            Contact Us{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
