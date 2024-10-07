import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Services = () => {
    const { serviceId } = useParams();
    const [serviceData, setServiceData] = useState([]);
    useEffect(
        () => {
            fetch('/service.json')
                .then(res => res.json())
                .then(data => setServiceData(data))
                .catch(error => console.log(error))
        }
        , []);
        const data = serviceData.find(item => item.link === serviceId)
        {
            console.log(serviceId)
            console.log(data)
        }
    return (
        <div className='max-w-7xl mx-auto space-y-6 pb-10'>
            <h1 className='max-lg:text-2xl lg:text-3xl font-bold max-lg:py-8 lg:pt-16'>Get the Best <span className='text-green-600'>{data?.name}</span> in Dhaka Bangladesh </h1>
            <p className='text-xl'>
                {data?.description}
            </p>
            <h1 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title1} </h1>
            <p className='text-xl'>
                {data?.p1}
            </p>
            <h1 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title2} </h1>
            <ul className='text-xl list-disc pl-4'>

                {

                    data?.details?.map((item,idx) =>
                        (<li key={idx}>{item}</li>)

                    )
                }
            </ul>
            <h1 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title3} </h1>
            <p className='text-xl'>
                {data?.p2}
            </p>
            <ul className='text-xl list-disc pl-4'>

                {

                    data?.details2?.map((item,idx) =>
                        (<li key={idx}>{item}</li>)

                    )
                }
            </ul>
            <h1 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title4} </h1>
            <p className='text-xl'>
                {data?.p3}
            </p>
            <ul className='text-xl list-disc pl-4'>

                {

                    data?.details3?.map((item,idx) =>
                        (<li key={idx}>{item}</li>)

                    )
                }
            </ul>
            <h1 className='max-lg:text-2xl lg:text-3xl text-center font-bold max-lg:py-8 lg:py-16'>For additional features or more details about <span className='text-green-600'>{data?.name}</span>. please call us : +8801710-822207, +8801872-884988 ( 08AM to 10PM )</h1>
        </div>
    );
};

export default Services;