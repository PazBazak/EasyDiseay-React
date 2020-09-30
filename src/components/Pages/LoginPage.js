import React from 'react';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <RegistrationHeader title={'Login'}/>
                <form className={classes.form} noValidate>
                    <EmailField margin={'normal'} autoFocus={true}/>
                    <PasswordField margin={'normal'}/>
                    <SubmitCheckBox text={'Remember me!'}/>
                    <SubmitButton text={'Login'}/>
                    <Grid container>
                        <Grid item xs>
                            <Link to={'/'}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={'/signup'}>
                                Don't have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Copyright/>
        </Container>
    );
}
