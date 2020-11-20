import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import image from "../../athena-design-resources/Illustration/16 [Converted]@2x.png";



const useStyles = makeStyles({
    root: {
        padding: "80px 0"
    },
    introHeading: {
        font: "normal normal normal 70px/70px Yeseva One",
        letterSpacing: "0px",
        color: "#0D052E",
        marginBottom: "35px",
    },
    introText: {
        font: "normal normal normal 16px/30px Montserrat",
        letterSpacing: "0px",
        color: "#8D8D8D",
        width: "543px",
        marginBottom: "25px",
    },
    button: {
        background: "transparent linear-gradient(128deg, #2AF598 0%, #009EFD 100%) 0% 0% no-repeat padding-box",
        font: "normal normal medium 18px/22px Montserrat",
        letterSpacing: "0px",
        color: "#FFFFFF",
        borderRadius: "30px 0",
        padding: "16px 60px",
        // width: "178px",
        // height: "60px",
        border: "none",
        transition: ".2s",
        display: "inline-block",
        textAlign: "center",

        "&:hover": {
            borderRadius: "0 30px",
            background: "transparent linear-gradient(237deg, #2AF598 0%, #009EFD 100%, #000000 100%) 0% 0% no-repeat padding-box",        
            textDecoration: "none",
            color: "white",
        }
    },
    
    image: {
        width: "100%",
    }






});

const Intro = () => {


    const classes = useStyles();
    return (
            <Box className={classes.root}>
                <Container>
                    <Grid container>
                        <Grid item mx="auto" sm={12} md={7}>
                            <h1 className={classes.introHeading}>Florence <br/> agency</h1>
                            <p className={classes.introText}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            
                            <a className={classes.button} href="#pricing">See Pricing</a>
                        </Grid>
                        <Grid item sm={12} md={5}>
                            <Box>
                                <img className={classes.image} src={image} alt=""/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container> 
            </Box>
    );
};

export default Intro;