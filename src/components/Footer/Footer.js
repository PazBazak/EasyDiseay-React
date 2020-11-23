import React, {Fragment} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FooterSubTitle from "./FooterSubTitle";
import FooterTitle from "./FooterTitle";
import {ANDROID_BADGE_PATH, APPLE_BADGE_PATH} from "../utils/Constants";
import Copyright from "../RegistrationComponents/CopyRight";
import {useMediaQuery} from "@material-ui/core";
import StoreBadge from "./StoreBadge";
import {useSelector} from "react-redux";

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.type === 'light' ? '#0f3d57' : '#1a1a1a',
        paddingTop: '14px',
        paddingBottom: '14px'
    },
    box: {
        backgroundColor: theme.palette.type === 'light' ? '#1b89ff' : '#0e0e0e',
    },
    divider: {
        backgroundColor: 'rgba(255,230,0)',
    },
}));

const Footer = () => {
    const classes = useStyle();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const isDark = useSelector(state => state.themeState.isDark);

    return (
        <Paper square>
            <Grid container className={classes.container}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={2}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'EasyDeasy'}/>
                        <FooterSubTitle title={'About Us'} link={'/aboutus'}/>
                        <FooterSubTitle title={'How it works'} link={'/aboutus'}/>
                        <FooterSubTitle title={'The Team'} link={'/aboutus'}/>
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
                        <FooterSubTitle title={'FAQ'}/>
                        <FooterSubTitle title={'Cookie Policy'}/>
                        <FooterSubTitle title={'Terms and Conditions'}/>
                        <FooterSubTitle title={'Privacy Policy'}/>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction={'column'}>
                        <FooterTitle title={'Subscribe to our newsletter'}/>
                    </Grid>
                </Grid>
                <Grid item container xs={2}>
                    {isSmallScreen
                        ?
                        null
                        :
                        <Fragment>
                            <Grid item xs={2}>
                                <Divider orientation={'vertical'} className={classes.divider}/>
                            </Grid>
                            <Grid item xs={10}>
                                <StoreBadge
                                    src={APPLE_BADGE_PATH}
                                    url={'apple'}
                                />
                                <StoreBadge
                                    src={ANDROID_BADGE_PATH}
                                    url={'apple'}
                                />
                            </Grid>
                        </Fragment>
                    }
                </Grid>
            </Grid>
            <Box
                display={'flex'}
                justifyContent="center"
                alignItems="center"
                className={classes.box}
            >
                <i className="fab fa-facebook fa-2x media-icon"/>
                <i className="fab fa-twitter fa-2x media-icon"/>
                <i className="fab fa-linkedin fa-2x media-icon"/>
                <i className="fab fa-google-plus-g fa-2x media-icon"/>
            </Box>
            <Copyright topMargin={0} background={isDark ? '#0e0e0e' : '#1b89ff'}/>
        </Paper>
    )
};

export default Footer;
