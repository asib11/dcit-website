import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Hosting = () => {
    const [hosting, setHosting] = useState([]);
    const { hostingId } = useParams()

    useEffect(
        () => {
            fetch('/hosting.json')
                .then(res => res.json())
                .then(data => setHosting(data))
                .catch(error => console.log(error))
        }
        , []);


    const dataHosting = hosting.find(item => item.link === hostingId)

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='max-lg:text-3xl lg:text-5xl text-center font-bold mt-10 text-green-600'>{dataHosting?.name}</h1>
            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-4 py-20' >
                {
                    dataHosting?.content?.map((host, index) => (
                        <div key={index} className="card bg-base-100 w-[90%] shadow-xl rounded-md" >
                            <h2 className='font-bold text-2xl text-center bg-red-600 text-white p-10'>{host.name}</h2>
                            <ul className='text-xl p-4 space-y-4'>
                                {
                                    host?.details?.map((item, idx) =>
                                        (<li key={idx}>{item}</li>)
                                    )
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Hosting;