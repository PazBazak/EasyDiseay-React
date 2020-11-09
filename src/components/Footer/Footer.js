import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FooterSubTitle from "./FooterSubTitle";
import FooterTitle from "./FooterTitle";
import StoreBadge from "./StoreBadge";
import {APPLE_BADGE_PATH, ANDROID_BADGE_PATH} from "../utils/Constants";

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: '#0f3d57',
        paddingTop: '14px',
        paddingBottom: '14px'
    },
    box: {
        backgroundColor: '#1b89ff',
    },
    divider: {
        backgroundColor: '#fff'
    }
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Paper className={classes.paper} square>
            <Grid container className={classes.container}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={2}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'EasyDeasy'}/>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'Contact Us'}/>
                        <FooterSubTitle title={'Advertise'}/>
                        <FooterSubTitle title={'Support'}/>
                        <FooterSubTitle title={'Contact'}/>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'Navigation'}/>
                        <FooterSubTitle title={'About Us'}/>
                        <FooterSubTitle title={'The Team'}/>
                        <FooterSubTitle title={'Cookie Policy'}/>
                        <FooterSubTitle title={'Terms and Conditions'}/>
                        <FooterSubTitle title={'Privacy Policy'}/>
                    </Grid>
                </Grid>
                <Grid item container xs={2}>
                    <Grid item xs={2}>
                         <Divider orientation={'vertical'} className={classes.divider}/>
                    </Grid>
                    <Grid item xs={8}>
                         <StoreBadge
                             src={APPLE_BADGE_PATH}
                             url={'apple'}
                         />
                         <StoreBadge
                             src={ANDROID_BADGE_PATH}
                             url={'apple'}
                         />
                    </Grid>
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
