import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';





const useStyles = makeStyles({
    service: {
        textAlign: "center"
    },
    link: {
        textDecoration: "none",
        display: "block",
        padding: "30px",
        
        "&:hover": {
            textDecoration: "none",
            backgroundColor: "white",
            borderRadius: "100px 0",
            boxShadow: "0px 30px 50px #20A86F1A",
            
        }

    },
    image: {
        width: "80px",
        height: "80px",
        background: "#684EFB 0% 0% no-repeat padding-box",
        borderRadius: "24px",
        opacity: "1",
        marginBottom: "20px"
    },
    serviceName: {
        
        font: "normal normal 600 24px/29px arial",
        letterSpacing: "0",
        color: "#34285C"
    },
    serviceDetails: {
        
        width: "220px",
        font: "normal normal normal 16px/30px arial",
        letterSpacing: "0",
        color: "#8D8D8D",
        margin: "0 auto",
        
    },
   
  });



const SingleService = (props) => {

    const {serviceName, serviceDetails, serviceImg} = props.service;
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box className={classes.service}>
                    <Link className={classes.link} to="/">
                        <Box>
                            <img className={classes.image} src={serviceImg} alt=""/>
                        </Box>
                        <Box>
                            <h4 className={classes.serviceName}>{serviceName}</h4>
                            <p className={classes.serviceDetails}>{serviceDetails}</p>
                        </Box>
                    </Link>
                </Box>
            </Grid>  
        </>
    );
};

export default SingleService;