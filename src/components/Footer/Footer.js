import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: '#0f3d57',
        paddingTop: '14px'
    },
    title: {
        color: 'white'
    },
    divider: {
        backgroundColor: 'white',
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
                        <Typography
                            className={classes.title}
                            align={"center"}
                            variant={"h5"}
                            component={"h5"}
                        >EasyDeasy
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction={'column'}>
                        <Typography
                            className={classes.title}
                            align={"center"}
                            variant={"h5"}
                            component={"h5"}
                        >Contact Us
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction={'column'}>
                        <Typography
                            className={classes.title}
                            align={"center"}
                            variant={"h5"}
                            component={"h5"}
                        >Company
                        </Typography>

                        <Typography align={"center"}>About Us</Typography>
                        <Typography align={"center"}>The Team</Typography>
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
