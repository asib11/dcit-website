import React from 'react';
import logo from '../../../assets/logo.png'
import basisLogo from '../../../assets/basis-logo.svg'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto text-[18px] flex justify-between items-center mb-6'>
                <div className='w-20  mt-4 ml-4'><img src={logo} alt="" /></div>
                <div className='navbar-center hidden lg:flex'>
                    <div className="p-4 flex items-center font-semibold" >
                        <DevicePhoneMobileIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <div >
                            <Link to={'tel:+8801710822207'}><p className='hover:text-[#399918]'>+8801710-822207</p></Link>
                            <Link to={'tel:+8801872884988'}><p className='hover:text-[#399918]'>+8801872-884988</p></Link>
                            
                        </div>
                    </div>
                    <div className="p-4 flex items-center font-semibold" >
                        <EnvelopeIcon className='size-12 rounded-full border-4 p-1 text-[#399918] border-[#399918] mr-6' />
                        <div >
                            <Link to='mailto:dcitltd2022@gmail.com'><p className='hover:text-[#399918]'>dcitltd2022@gmail.com</p></Link>
                            {/* <p className='hover:text-[#399918]'>asib.bubt@gmail.com</p> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-24 mt-4 mr-4'><img src={basisLogo} alt="" /></div>
                    <p className='text-[#399918] mt-2 font-bold text-xl'>sitemap</p>
                </div>
            </div>
        </div>
    );
};

export default Logo;