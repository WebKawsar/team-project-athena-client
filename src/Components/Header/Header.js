import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../../athena-design-resources/Illustration/Group 86.png";
import back from "../../athena-design-resources/Illustration/Group 45@2x.png";

const useStyles = makeStyles({
    header: {
        padding: "20px 0",

        backgroundImage: `url('${back}')`,
        backgroundSize: "546px 236px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-264px -117px",
        // backgroundColor: "red",

    },
    link: {
        color: "grey",
        textDecoration: "none",
        padding: "15px 20px",
        "&:hover": {
            textDecoration: "none",
            color: "black",
            
        }
    },
    image: {
        width: "130px",
    },
    active: {
        background: "transparent linear-gradient(128deg, #2AF598 0%, #009EFD 100%) 0% 0% no-repeat padding-box",
        font: "normal normal medium 18px/22px Montserrat",
        letterSpacing: "0px",
        color: "#FFFFFF",
        borderRadius: "30px 0",
        padding: "16px 40px",
        width: "178px",
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
    
   
  });

  


const Header = () => {

    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img className={classes.image} src={logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {/* <Nav.Link to="#home">Home</Nav.Link> */}
                            {/* <Nav.Link className={classes.active} href="#services">Services</Nav.Link> */}

                            <Link className={classes.link} to="/">Home</Link>
                            <Link className={classes.link} to="/">About</Link>
                            <Link className={classes.link} to="/">Services</Link>
                            <Link className={classes.link} to="/">Pricing</Link>
                            <Link className={classes.link} to="/">Our Team</Link>
                            <Link className={classes.active} to="/">Contact Us</Link> 
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </Container>  
        </Box>
    );
};

export default Header;