import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../RegistrationComponents/CopyRight";
import RegistrationHeader from "../RegistrationComponents/RegistrationHeader";
import PasswordField from "../RegistrationComponents/PasswordField";
import EmailField from "../RegistrationComponents/EmailField";
import SubmitButton from "../RegistrationComponents/SubmitButton";
import SubmitCheckBox from "../RegistrationComponents/SubmitCheckBox";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    paper: {
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
    link: {
        color: "#2f76ee",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        }
    },
}));

export default function LoginPage({openSignUp}) {
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
                            <Typography variant={"body1"} className={classes.link}>
                                Forgot password?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"body1"} onClick={openSignUp} className={classes.link}>
                                Don't have an account?
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Copyright/>
        </Container>
    );
}
