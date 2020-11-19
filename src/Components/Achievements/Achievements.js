import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faMedal, faRocket, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import image from "../../athena-design-resources/Illustration/happy@2x.png";


const useStyles = makeStyles({
    root: {
        padding: "150px 0",
        backgroundColor: "#FAFFFD"
        // backgroundImage: "url('https://i.ibb.co/KhWmYCY/Group-45-2x.png')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "10% 10%",
        // backgroundPosition: "right",

    },
    icon: {
        // width: "65px",
        // height: "65px",
        margin: "0 20px 0 0",
        // backgroundColor: "#707070",
        // borderRadius: "50%",
        // border: "none",
        color: "#707070",
        fontSize: "65px",
        // "&:hover": {
        //     color: "white",
        // }
        
    },
    heading: {
        font: "normal normal normal 38px/90px Yeseva One",
        letterSpacing: "0px",
        color: "#0D052E",
        lineHeight: "50px"
    },
    projectDetails: {
        font: "normal normal normal 16px/30px Montserrat",
        letterSpacing: "0px",
        color: "#8D8D8D",
    },
    Achievement: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 6px 60px #3DE89926",


        // backgroundColor: "#FFFFFF",
        font: "normal normal medium 18px/22px Montserrat",
        letterSpacing: "0px",
        color: "#707070",
        borderRadius: "0 70px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        padding: "40px 0",
        // padding: "15px 40px",
        // width: "450px",
        // height: "200px",
        // transition: "3s",
        cursor: "pointer",
        "&:hover": {
            borderRadius: "0 70px",
            background: "transparent linear-gradient(128deg, #2AF598 0%, #009EFD 100%) 0% 0% no-repeat padding-box",
            color: "#FFFFFF",
        }
    },
    Achievement2: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 6px 60px #3DE89926",


        // background: "transparent linear-gradient(237deg, #2AF598 0%, #009EFD 100%, #000000 100%) 0% 0% no-repeat padding-box",
        font: "normal normal medium 18px/22px Montserrat",
        letterSpacing: "0px",
        color: "#707070",
        borderRadius: "70px 0",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        padding: "40px 0",
        // padding: "15px 40px",
        // width: "450px",
        // height: "200px",
        // transition: "3s",
        cursor: "pointer",
        "&:hover": {
            borderRadius: "70px 0",
            background: "transparent linear-gradient(128deg, #2AF598 0%, #009EFD 100%) 0% 0% no-repeat padding-box",
            color: "#FFFFFF",
        }
    },
    achieveHeading: {
        font: "normal normal bold 49px/40px Poppins",
        letterSpacing: "0.73px",
        // color: "#707070",
        margin: "0",
    },
    achieveText: {
        margin: "0",
        font: "normal normal 300 22px/38px Poppins",
        letterSpacing: "0px",
        // color: "#707070",
    }

   
  });

  


const Achievements = () => {

    const classes = useStyles();
    return (
        <>
           <Box className={classes.root}>
                <Container>
                    <Grid alignItems="center" container spacing={5}>
                        <Grid item xs={12} sm={12} md={5}>
                            <Box>
                                <h2 className={classes.heading}>Our Achievements</h2>
                                <p className={classes.projectDetails}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                                
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7}>
                            <Grid container spacing={4}>
                                <Grid item md={6}>
                                    <Box className={classes.Achievement}>
                                        <Box>
                                            <FontAwesomeIcon className={classes.icon} icon={faSmile} />
                                        </Box>
                                        <Box>
                                            <h4 className={classes.achieveHeading}>700+</h4>
                                            <p className={classes.achieveText}>Happy Clients</p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box className={classes.Achievement2}>
                                        <Box>
                                            <FontAwesomeIcon className={classes.icon} icon={faTrophy} />
                                        </Box>
                                        <Box>
                                            <h4 className={classes.achieveHeading}>140+</h4>
                                            <p className={classes.achieveText}>Projects Completed</p>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item md={6}>
                                    <Box className={classes.Achievement2}>
                                        <Box>
                                            <FontAwesomeIcon className={classes.icon} icon={faMedal} />
                                        </Box>
                                        <Box>
                                            <h4 className={classes.achieveHeading}>25+</h4>
                                            <p className={classes.achieveText}>Crazy Minds</p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box className={classes.Achievement}>
                                        <Box>
                                            <FontAwesomeIcon className={classes.icon} icon={faRocket} />
                                        </Box>
                                        <Box>
                                            <h4 className={classes.achieveHeading}>75+</h4>
                                            <p className={classes.achieveText}>Running Projects</p>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box> 
        </>
    );
};

export default Achievements;