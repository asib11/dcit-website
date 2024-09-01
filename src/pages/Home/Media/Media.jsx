import React from 'react';

const Media = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <h2 className='text-5xl font-extrabold flex mb-14 items-center justify-center'>Media Coverage</h2>
            <div className='flex justify-between mb-14 flex-wrap max-[992px]:p-6'>
                <iframe className='rounded-xl max-[992px]:pb-6' width="620" height="315" src="https://www.youtube.com/embed/i_OKQ7j7zP0?si=72QJ3UxseMZhsCSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
                <iframe className='rounded-xl' width="620" height="315" src="https://www.youtube.com/embed/P7R1WAR70jU?si=yy_f5MIwLaFG1Tux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Media;