import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: '#1e88e5',
    },
    title: {

    },
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Paper className={classes.paper} square>
            <Grid container spacing={6} className={classes.container}>
                <Grid item xs={4}>
                    <Grid container direction={'column'}>
                        <Typography
                            align={"center"}
                            variant={"h5"}
                            component={"h5"}
                        >EasyDeasy
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction={'column'}>
                        <Typography
                            align={"center"}
                            variant={"h5"}
                            component={"h5"}
                        >Contact Us
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction={'column'}>
                        <Typography
                            align={"center"}
                            variant={"h5"}
                            component={"h5"}
                        >Company
                        </Typography>

                        <Typography align={"center"}>About Us</Typography>
                        <Typography align={"center"}>The Team</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default Footer;
