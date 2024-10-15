import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import SEO from '../Seo/Seo';
import { Helmet } from 'react-helmet';
import Seo from '../Seo/Seo';


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
        <div>
            {/* <Helmet>
                <title>services</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet> */}
            <Seo title={data?.name} content='Beginner friendly page for learning React Helmet.'/>

            <div className='max-w-7xl mx-auto space-y-6 pb-10 text-justify max-lg:m-4'>
                {/* <SEO
                title='Learning React Helmet!'
                description='Beginner friendly page for learning React Helmet.'
                name='og'
                type='article' /> */}



                <h2 className='max-lg:text-2xl lg:text-3xl font-bold max-lg:py-8 lg:pt-16'>Best <span className='text-green-600'>{data?.name}</span> </h2>
                <h2 className='max-lg:text-2xl lg:text-3xl font-bold'><span className='text-green-600'>{data?.des1}</span> </h2>
                <p className='text-xl'>
                    {data?.description}
                </p>
                <h2 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title1} </h2>
                <p className='text-xl'>
                    {data?.p1}
                </p>
                <h2 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title2} </h2>
                <ul className='text-xl list-disc pl-4'>

                    {

                        data?.details?.map((item, idx) =>
                            (<li key={idx}>{item}</li>)

                        )
                    }
                </ul>
                <h2 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title3} </h2>
                <p className='text-xl'>
                    {data?.p2}
                </p>
                <ul className='text-xl list-disc pl-4'>

                    {

                        data?.details2?.map((item, idx) =>
                            (<li key={idx}>{item}</li>)

                        )
                    }
                </ul>
                <h2 className='max-lg:text-lg lg:text-xl font-bold '> {data?.title4} </h2>
                <p className='text-xl'>
                    {data?.p3}
                </p>
                <ul className='text-xl list-disc pl-4'>

                    {

                        data?.details3?.map((item, idx) =>
                            (<li key={idx}>{item}</li>)

                        )
                    }
                </ul>
                <h2 className='max-lg:text-2xl lg:text-3xl font-bold max-lg:py-8 lg:py-16 text-gray-500'>
                    For additional features or more details about <span className='text-green-600'>{data?.name}</span>. <br /> please call us : <br /> <span className='text-red-600 italic	'>+8801710-822207, +8801872-884988</span> <br /> ( 08AM to 10PM )
                </h2>
            </div>
        </div>
    );
};

export default Services;