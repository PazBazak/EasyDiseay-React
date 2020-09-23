import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../RegistrationComponents/CopyRight";
import RegistrationHeader from "../RegistrationComponents/RegistrationHeader";
import PasswordField from "../RegistrationComponents/PasswordField";
import EmailField from "../RegistrationComponents/EmailField";
import SubmitButton from "../RegistrationComponents/SubmitButton";
import SubmitCheckBox from "../RegistrationComponents/SubmitCheckBox";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUpPage() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <RegistrationHeader title={'Sign-Up'}/>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <EmailField/>
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordField/>
                        </Grid>
                        <Grid item xs={12}>
                            <SubmitCheckBox text={'I want to receive marketing promotions and updates via email.'}/>
                        </Grid>
                        <Grid item xs={12}>
                            <SubmitCheckBox text={'I accept terms and conditions.'}/>
                        </Grid>
                    </Grid>
                    <SubmitButton text={'Sign Up'}/>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to={'/login'}>
                                {"Already have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}
