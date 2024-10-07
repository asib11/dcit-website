import React from 'react';
import Bannar from '../Bannar/Bannar';
import Media from '../Media/Media';
import Approve from '../Approved/Approve';
// import Recommed from '../Recommend/Recommed';
// import Forth from '../Forth/Forth';
// import Regular from '../Regular/Regular';
import Facilities from '../Facilities/Facilities';
import Team from '../Team/Team';
import Partner from '../Partner/Partner';
import OurClient from '../OurClient/OurClient';
import Header from '../Header/Header';
import CourseDepartment from '../CourseDepartment/CourseDepartment';


const Home = () => {
    return (
        <div className=''>
            <Header/>
            <CourseDepartment/>
            {/* <Bannar></Bannar> */}
            {/* <Media></Media> */}
            <Approve/>
            {/* <Recommed></Recommed>
            <Forth></Forth>
            <Regular></Regular> */}
            <OurClient/>
            <Facilities/>
            <Team/>
            <Partner/>
        </div>
    );
};

export default Home;