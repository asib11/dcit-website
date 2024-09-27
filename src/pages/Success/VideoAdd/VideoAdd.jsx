import React from 'react';

const VideoAdd = () => {
    return (
        <div>
            <h3 className='text-5xl font-bold  py-16 max-w-7xl mx-auto bg-white'>Video Feedback</h3>
            <div className=' bg-gray-200'>
                <div className='max-w-7xl mx-auto pb-16'>
                    <h3 className='text-5xl text-center font-bold py-16'>Our Student's Video Feedback</h3>
                    <div className='grid grid-cols-2 justify-items-center gap-y-16'>
                        <div className=''>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kjx_8jE6jJc?si=_p20n-CHoITtoxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kjx_8jE6jJc?si=_p20n-CHoITtoxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className=''>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kjx_8jE6jJc?si=_p20n-CHoITtoxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/kjx_8jE6jJc?si=_p20n-CHoITtoxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoAdd;