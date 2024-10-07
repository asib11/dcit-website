import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Software = () => {
    const { softwareId } = useParams();
    const [softwareData, setSoftwareData] = useState([]);

    useEffect(() => {
        fetch('/software.json')
            .then(res => res.json())
            .then(data => setSoftwareData(data))
            .catch(error => console.log(error))
    }
        , [])


    const data = softwareData.find(item => item.link === softwareId)

    return (
        <div className='max-w-7xl mx-auto space-y-6 pb-10'>
            <h1 className='max-lg:text-2xl lg:text-3xl font-bold max-lg:py-8 lg:pt-16'>Get the Best <span className='text-green-600'>{data?.name}</span> in Dhaka Bangladesh </h1>
            <p className='text-xl'>
                {data?.description}
            </p>
            <h1 className='max-lg:text-2xl lg:text-3xl font-bold '>Features Of Our <span className='text-green-600'>{data?.name}</span>:</h1>
            <ul className='text-xl list-disc pl-4'>

                {

                    data?.keypoint?.map((item) =>
                        (<li key={item.id}>{item.name}</li>)

                    )
                }
                </ul>
                <h1 className='max-lg:text-2xl lg:text-3xl text-center font-bold max-lg:py-8 lg:py-16'>For additional features or more details about <span className='text-green-600'>{data?.name}</span>. please call us : +8801710-822207, +8801872-884988 ( 08AM to 10PM )</h1>
        </div>
    );
};

export default Software;