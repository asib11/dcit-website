import React from 'react';

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

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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
                            <input className='btn  bg-[#399918] text-white' type="submit" value="Send" />
                        </div>
                    </form>

                </div>
                <div className='columns-2'>
                    <p>contacct info</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;