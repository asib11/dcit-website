import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

const DiscountForm = () => {
    const [option, setOption] = useState([]);
    useEffect(() => {
        fetch('/course.json')
            .then(response => response.json())
            .then(data => setOption(data))
    }, [])

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
        <div>
            <form onSubmit={contactInfo}>
                
                <div className="flex gap-4">
                    <div className="">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full mb-6 mr-6 border-[#399918] focus:ring-2 ring-green-600"
                            required
                        />

                        <input
                            type="Email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full mb-6 mr-6 border-[#399918] focus:ring-2 ring-green-600"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="input input-bordered w-full mb-6 mr-6 border-[#399918] focus:ring-2 ring-green-600"
                            required
                        />

                        <select
                            className="select select-bordered w-full border-[#399918] focus:ring-2 ring-green-600"
                            name="courseData"
                            required
                        >
                            <option disabled selected>
                                Please Select One course
                            </option>
                            {
                                option.map((item, idx) => (
                                    <option key={idx}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <textarea
                        className="textarea textarea-bordered border-[#399918] w-full h-48 focus:ring-2 ring-green-600"
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
    );
};

export default DiscountForm;