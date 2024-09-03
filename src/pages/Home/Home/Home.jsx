import React from 'react';
import Bannar from '../Bannar/Bannar';
import Media from '../Media/Media';
import Approve from '../Approved/Approve';
import Recommed from '../Recommend/Recommed';
import Forth from '../Forth/Forth';
import Regular from '../Regular/Regular';
import Facilities from '../Facilities/Facilities';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Media></Media>
            <Approve></Approve>
            <Recommed></Recommed>
            <Forth></Forth>
            <Regular></Regular>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;