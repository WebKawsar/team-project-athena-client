import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Achievements from '../Achievements/Achievements';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import RunningProject from '../RunningProject/RunningProject';
import Services from '../Services/Services';

import image from "../../athena-design-resources/Illustration/16 [Converted]@2x.png";


const useStyles = makeStyles({
    root: {
        // backgroundImage: `url('${image}')`,
        // backgroundSize: "100% 100%",
        // backgroundColor: "red",
    },
    
    
   
  });

  
const Home = () => {

    const classes = useStyles();
    return (
            <>    
                <Box className={classes.root}>  
                    <Header></Header>
                    <Intro></Intro>
                    <Services></Services>
                    <RunningProject></RunningProject>
                    <Achievements></Achievements>
                </Box>
            </> 
    );
};

export default Home;