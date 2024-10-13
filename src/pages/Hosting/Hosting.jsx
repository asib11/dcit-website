import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GiSentryGun } from "react-icons/gi";
import Seo from '../Seo/Seo';


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
            <Seo title={dataHosting?.name} content='Beginner friendly page for learning React Helmet.'/>
            <h1 className='max-lg:text-3xl lg:text-5xl text-center font-bold mt-10 text-green-600 underline underline-offset-4 italic'>{dataHosting?.name}</h1>
            <div className='grid max-md:grid-cols-1 justify-items-center gap-6 max-lg:grid max-lg:grid-cols-2 lg:grid lg:grid-cols-4 py-20' >
                {
                    dataHosting?.content?.map((host, index) => (
                        <div key={index} className="card bg-base-100 w-[90%] shadow-xl ring-4 ring-red-600" >
                            <h2 className='font-bold text-2xl text-center bg-red-600 text-white px-3 py-10 rounded-t-lg'>{host.name}</h2>
                            <ul className='text-lg p-4 space-y-4'>
                                {
                                    host?.details?.map((item, idx) =>
                                    (<li key={idx} className='flex gap-2 justify-center items-center text-justify'>
                                        <div>
                                            <GiSentryGun className='size-6 text-green-600' />
                                        </div>
                                        {item}
                                    </li>)
                                    )
                                }
                            </ul>
                            <div className="mt-auto pb-4 flex justify-center">
                                <Link to={``} className="btn hover:bg-[#399918] w-1/2 text-white bg-green-600 ">Buy Now</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Hosting;