import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Achievements from '../Achievements/Achievements';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import RunningProject from '../RunningProject/RunningProject';
import Services from '../Services/Services';

import image from "../../athena-design-resources/Illustration/Group 45@2x.png";
import rightBackgroundImage from "../../athena-design-resources/Illustration/Group 46@2x.png";
import Team from '../Team/Team';
import Footer from '../Footer/Footer';



const useStyles = makeStyles({
    root: {
        // backgroundImage: `url('${image}')`,
        // backgroundSize: "100% 100%",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "10px 10px"
        
    },
    rightBackground: {

        backgroundImage: `url('${rightBackgroundImage}')`,
        backgroundSize: "1544px 1229px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "647px -481px",

    },
    threeBg: {

        backgroundImage: `url('${rightBackgroundImage}')`,
        backgroundSize: "1156px 991px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "882px 287px",
        // zIndex: "555",
        // backgroundColor: "red"
        

    }
    
    
   
  });

  
const Home = () => {

    const classes = useStyles();
    return (
            <>    
                <Box className={classes.root}>  
                    <Box className={classes.rightBackground}>
                        <Header></Header>
                        <Intro></Intro>
                    </Box>
                    <Box className={classes.threeBg}>
                        <Services></Services>
                        <RunningProject></RunningProject>
                        <Achievements></Achievements>
                    </Box>
                    <Team></Team>
                    <Footer></Footer>
                </Box>
            </> 
    );
};

export default Home;