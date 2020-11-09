import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import FooterSubTitle from "./FooterSubTitle";
import FooterTitle from "./FooterTitle";

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: '#0f3d57',
        paddingTop: '14px',
        paddingBottom: '14px'
    },
    box: {
        backgroundColor: '#1b89ff',
    },
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Paper className={classes.paper} square>
            <Grid container className={classes.container}>
                <Grid item xs={3}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'EasyDeasy'}/>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'Contact Us'}/>
                        <FooterSubTitle title={'Advertise'}/>
                        <FooterSubTitle title={'Contact'}/>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'Navigation'}/>
                        <FooterSubTitle title={'About Us'}/>
                        <FooterSubTitle title={'The Team'}/>
                        <FooterSubTitle title={'Cookie Policy'}/>
                        <FooterSubTitle title={'Terms and Conditions'}/>
                        <FooterSubTitle title={'Privacy Policy'}/>
                    </Grid>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
            <Box
                display={'flex'}
                justifyContent="center"
                alignItems="center"
                className={classes.box}
            >
                <i className="fab fa-facebook fa-3x media-icon"/>
                <i className="fab fa-twitter fa-3x media-icon"/>
                <i className="fab fa-linkedin fa-3x media-icon"/>
                <i className="fab fa-google-plus-g fa-3x media-icon"/>
            </Box>
        </Paper>
    )
};

export default Footer;
