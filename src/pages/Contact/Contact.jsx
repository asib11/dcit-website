import React from 'react';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';

const Contact = () => {

    const contactInfo = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const courseData = form.courseData.value;
        const textArea = form.textArea.value;
        const user = { name, email, phone, courseData, textArea }

        fetch('https://dcit-server.vercel.app/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(
                data => {
                    console.log(data)
                    if(data.insertedId){
                        
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Your message has been sent successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          form.reset()
                    }
                    
                })
    }

    return (
        <div className='max-w-7xl mx-auto my-16'>
            <h2 className=' text-5xl text-center font-extrabold my-16' data-aos="zoom-in-up">Contact Us</h2>
            <div className='flex'>
                <div className='columns-5 flex flex-col' >
                    <form onSubmit={contactInfo}>
                        <div className='flex gap-4'>
                            <div className=''>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Name"
                                    className="input input-bordered w-full mb-6 mr-6 border-[#399918]" required />

                                <input
                                    type="Email"
                                    name='email'
                                    placeholder="Email"
                                    className="input input-bordered w-full mb-6 mr-6 border-[#399918]" required />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder="Phone"
                                    className="input input-bordered w-full mb-6 mr-6 border-[#399918]" required />

                                <select className="select select-bordered w-full border-[#399918]" name='courseData' required>
                                    <option disabled selected>Please Select One course</option>
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
                            <textarea className="textarea textarea-bordered border-[#399918] w-full h-48" placeholder="Write Here..." name='textArea' required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn  bg-gradient-to-r bg-[#399918] hover:from-red-500 hover:to-green-500 text-white' type="submit" value="Send" />
                        </div>
                    </form>

                </div>
                <div className='columns-1'>
                <div className='pl-12 flex flex-col gap-8'>
                    <div>
                        <MapPinIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <h3 className='font-extrabold text-3xl my-2'>Address</h3>
                        <p className='text-lg'>
                            Doyel S.A. Tower 220/A/1, <br />
                            South Pirerbag, Amtola, 60 feet,<br />
                            Mirpur - 2, Dhaka-1216
                        </p>
                    </div>
                    <div>
                        <DevicePhoneMobileIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <h3 className='font-extrabold text-3xl my-2' >Call Us</h3>
                        <p className='hover:text-[#399918] text-lg'>+8801710-822207</p>
                        <p className='hover:text-[#399918] text-lg'>+8801872-884988</p>
                    </div>
                    <div>
                        <EnvelopeIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <h3 className='font-extrabold text-3xl my-2'>Email</h3>
                        <p className='hover:text-[#399918] text-lg'>dcitltd2022@gmail.com</p>
                    </div>
                    <div>
                        <ClockIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <h3 className='font-extrabold text-3xl my-2'>Work Hours</h3>
                        <p className='text-lg'>
                            Monday - Sunday <br />
                            10AM - 09PM
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;