import React from 'react';
import Seo from '../../Seo/Seo';

const Jobplace = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Seo title={`Job Placement Organization - DCIT LTD`} content='Beginner friendly page for learning React Helmet.'/>
            <h3 className='max-lg:text-3xl lg:text-5xl text-center font-bold pt-16 mb-6'>Job Placement Organization</h3>
            <div className="overflow-x-auto my-16 ">
                <table className="table border-collapse border border-green-400">
                    {/* head */}
                    <thead className='bg-green-500 max-lg:text-xl lg:text-5xl text-white'>
                        <tr className=''>
                            <th className='border-2 border-green-400'>SL#</th>
                            <th className='border-2 border-green-400'>Name Of Industries</th>
                            <th className='border-2 border-green-400'>Address & Contact Details</th>
                        </tr>
                    </thead>
                    <tbody className='max-lg:text-lg lg:text-3xl text-justify'>
                        {/* row 1 */}
                        <tr className=''>
                            <th className='border-2 border-green-400'>1</th>
                            <td className='border-2 border-green-400'>Techknowgram Limited</td>
                            <td className='border-2 border-green-400'>Suite B1, 5/9 Block #B, Dhaka 1207</td>

                        </tr>
                        {/* row 2 */}
                        <tr className=''>
                            <th className='border-2 border-green-400'>2</th>
                            <td className='border-2 border-green-400'>ADDIE Soft Ltd</td>
                            <td className='border-2 border-green-400'>2nd Floor, House #23(Old-660), Road #11, Old-32 Dhaka - 1209</td>
                        </tr>

                        <tr className=''>
                            <th className='border-2 border-green-400'>3</th>
                            <td className='border-2 border-green-400'>Dhaka CenterNIC IT LTD (DCITLtd)</td>
                            <td className='border-2 border-green-400'>Doyel S.A. Tower 220/A/1, South Pirerbag, Amtola, 60 feet, Mirpur - 2, Dhaka-1216</td>
                        </tr>

                        <tr className=''>
                            <th className='border-2 border-green-400'>4</th>
                            <td className='border-2 border-green-400'>Spinoff Studio</td>
                            <td className='border-2 border-green-400'>House 1, Road 3, Uttara 11, Dhaka 1230</td>
                        </tr>

                        <tr className=''>
                            <th className='border-2 border-green-400'>5</th>
                            <td className='border-2 border-green-400'>Cyber Communications, Techno Outsource & Classic
                            Tourism</td>
                            <td className='border-2 border-green-400'>KingShuk Tower, 1st Floor, Plot #10/C, Road #1/1, Block #Ka/Kha, Section #6 (Near Mirpur Bus stand),
                            Dhaka 1216</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Jobplace;