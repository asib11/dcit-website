import React from 'react';
import Bannar from '../Bannar/Bannar';
import Media from '../Media/Media';
import Approve from '../Approved/Approve';
import Recommed from '../Recommend/Recommed';
import Forth from '../Forth/Forth';
import Regular from '../Regular/Regular';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Media></Media>
            <Approve></Approve>
            <Recommed></Recommed>
            <Forth></Forth>
            <Regular></Regular>
        </div>
    );
};

export default Home;