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
            <h2 className='text-5xl font-extrabold flex mb-14 items-center justify-center mt-14' data-aos="zoom-in-down">Media Coverage</h2>
            <div className='flex justify-between mb-14 flex-wrap max-[992px]:p-6'>
                <iframe className='rounded-xl max-[992px]:pb-6' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" width="620" height="315" src="https://www.youtube.com/embed/i_OKQ7j7zP0?si=72QJ3UxseMZhsCSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
                <iframe className='rounded-xl' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" width="620" height="315" src="https://www.youtube.com/embed/P7R1WAR70jU?si=yy_f5MIwLaFG1Tux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Media;