import React from 'react';
import nsda from '../../../assets/nsda.pdf'
import approve1 from '../../../assets/approved-by/NSDA Logo-01.jpg'

const Nsda = () => {
    return (
        <>
            <div className='relative'>
                <div className='fixed right-10 bottom-28 z-10 w-[150px] cursor-pointer ' onClick={() => window.open(nsda, "_blank")}>
                    <img src={approve1} alt="NSDA" className='w-full hover:scale-110 ring-2 ring-green-200 rounded-lg' width="150" height="151" />
                </div>
            </div>
        </>
    );
};

export default Nsda;