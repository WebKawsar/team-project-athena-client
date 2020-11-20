import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import image from "../../athena-design-resources/Illustration/Group 65@2x.png";
import SingleService from '../SingleService/SingleService';



const useStyles = makeStyles({
    root: {
        background: "#FAFFFD 0% 0% no-repeat padding-box",
        padding: "30px 0 50px"
    },
    
    intro: {
        textAlign: "center",
        marginBottom: "45px"
    },
    serviceIntro: {
        font: "normal normal normal 40px/70px arial",
        letterSpacing: "0px",
        color: "#0D052E",
    },
    serviceIntroText: {
        font: "normal normal normal 16px/30px Montserrat",
        letterSpacing: "0px",
        color: "#8D8D8D",
        width: "416px",
        margin: "0 auto"
    }


  });

  const services = [
      {
        id: 101,
        serviceName: "Experience Design",
        serviceDetails: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
        serviceImg: "https://i.ibb.co/7nLqRnk/Group-72-2x.png"
      },
      {
        id: 102,
        serviceName: "Interface Design",
        serviceDetails: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
        serviceImg: "https://i.ibb.co/TLw6r7C/Group-69-2x.png"
      },
      {
        id: 103,
        serviceName: "Prototyping",
        serviceDetails: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
        serviceImg: "https://i.ibb.co/HFWymtr/Group-66-2x.png"
      },
      {
        id: 104,
        serviceName: "Illustration",
        serviceDetails: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
        serviceImg: "https://i.ibb.co/T2pLxY2/Group-65-2x.png"
      },
  ]

const Services = () => {

    const classes = useStyles();
    return (
        <Box id="services" className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item sm={12}>
                        <Box className={classes.intro}>
                            <h3 className={classes.serviceIntro}>What we do</h3>
                            <p className={classes.serviceIntroText}>Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
                        </Box>
                    </Grid>
                    {
                        services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                    }
                </Grid>
            </Container> 
        </Box>
    );
};

export default Services;