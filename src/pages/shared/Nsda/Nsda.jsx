import React from 'react';
import nsda from '../../../assets/nsda.pdf'
import approve1 from '../../../assets/approved-by/NSDApng.png.webp'

const Nsda = () => {
    return (
        <>
            <div className='relative'>
                <div className='fixed right-10 bottom-20 z-10 w-[100px] cursor-pointer' onClick={() => window.open(nsda, "_blank")}>
                    <img src={approve1} alt="NSDA" className='w-full hover:scale-110' width="150" height="151" />
                </div>
            </div>
        </>
    );
};

export default Nsda;