import React from "react";
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={4}>
                <Grid container direction={'column'}>
                    <p>Hey</p>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container direction={'column'}>
                    <p>Hey</p>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container direction={'column'}>
                    <p>Hey</p>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Footer;
