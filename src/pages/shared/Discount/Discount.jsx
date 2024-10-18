import React, { useEffect, useState } from 'react';

const Discount = () => {
    const [option, setOption] = useState([]);
    useEffect(()=>{
        fetch('/course.json')
        .then(response=>response.json())
        .then(data=>setOption(data))
    },[])
    return (
        <>
            <div className='fixed top-[60%] transform -translate-y-1/2'>
                <button className="px-4 py-2 bg-red-500 rounded-lg ml-4 hover:bg-red-700 z-10 text-white font-bold -rotate-90 origin-left uppercase" onClick={() => document.getElementById('my_modal_3').showModal()}>get Discount</button>
                <dialog id="my_modal_3" className="p-6 rounded-md">
                    <div className="p-6">
                        <div className='mb-4'>
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost hover:bg-red-500 hover:text-white absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                        <form onSubmit={''}>
                            <h2 className='text-xl font-bold mb-2'>To know more about the offers, please fill up the form given below. Our representative will get back to you soon.</h2>
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

                        <p className="py-4 text-[14px]"><span className='font-bold'>If Necessary: </span> +8801710-822207,+8801872-884988 or support@dcitltd.com.bd, contact@dcitltd.com.bd</p>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default Discount;