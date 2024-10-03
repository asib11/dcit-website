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


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Media></Media>
            <Approve></Approve>
            {/* <Recommed></Recommed>
            <Forth></Forth>
            <Regular></Regular> */}
            <OurClient></OurClient>
            <Facilities></Facilities>
            <Team></Team>
            <Partner></Partner>
        </div>
    );
};

export default Home;