import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Media = () => {
    useEffect(
        () => {
            AOS.init({ delay: 300, duration: 1000 });
        }, []
    )

    return (
        <div className='max-w-7xl mx-auto '>
            <h2 className='max-md:text-3xl lg:text-5xl font-extrabold flex mb-14 items-center justify-center mt-14' data-aos="zoom-in-down">Media Coverage</h2>
            <div className='flex max-sm:gap-6 max-lg:gap-10 lg:gap-16 max-sm:px-4 max-lg:px-6 lg:px-8 pb-16'>
                <div className='w-1/2 md:h-[200px] lg:h-[300px]'>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/kjx_8jE6jJc?si=_p20n-CHoITtoxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='w-1/2 md:h-[200px] lg:h-[300px]'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/kjx_8jE6jJc?si=_p20n-CHoITtoxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    );
};

export default Media;