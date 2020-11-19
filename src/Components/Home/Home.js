import React from 'react';
import Achievements from '../Achievements/Achievements';
import RunningProject from '../RunningProject/RunningProject';
import Services from '../Services/Services';



const Home = () => {
    return (
        <>
           <Services></Services>
           <RunningProject></RunningProject>
           <Achievements></Achievements>
        </>
    );
};

export default Home;