import React from 'react';
import Bannar from '../Bannar/Bannar';
import Media from '../Media/Media';
import Approve from '../Approved/Approve';
import Recommed from '../Recommend/Recommed';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Media></Media>
            <Approve></Approve>
            <Recommed></Recommed>
        </div>
    );
};

export default Home;