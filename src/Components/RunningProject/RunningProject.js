import { Box, Container, Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import image from "../../athena-design-resources/Illustration/20 [Converted]@2x.png";





const useStyles = makeStyles({
    root: {
        padding: "50px 0",

    },
    image: {
        width: "80%",
        margin: "0 auto",
        display: "block"
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
    button: {
        background: "transparent linear-gradient(128deg, #2AF598 0%, #009EFD 100%) 0% 0% no-repeat padding-box",
        font: "normal normal medium 18px/22px Montserrat",
        letterSpacing: "0px",
        color: "#FFFFFF",
        borderRadius: "30px 0",
        // padding: "15px 40px",
        width: "178px",
        height: "60px",
        border: "none",
        transition: ".2s",
        "&:hover": {
            borderRadius: "0 30px",
            background: "transparent linear-gradient(237deg, #2AF598 0%, #009EFD 100%, #000000 100%) 0% 0% no-repeat padding-box",
        }
    }

   
  });



const RunningProject = () => {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Container>
                    <Grid alignItems="center" container spacing={5}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <img className={classes.image} src={image} alt=""/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <h2 className={classes.heading}>Stay Running & Project</h2>
                                <p className={classes.projectDetails}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                                <button className={classes.button}>Contact Us</button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box> 
        </>
    );
};

export default RunningProject;