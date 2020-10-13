import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
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
        marginTop: theme.spacing(3),
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

export default function SignUpPage({openSignIn}) {
    const classes = useStyles();
    const [formData, setFormData] = useState(
        {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            is_accepting_marketing: false,
            has_agreed_to_terms: false
        });

    const {first_name, last_name, email, password, is_accepting_marketing, has_agreed_to_terms} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onChangeCheckbox = e => {
        setFormData({...formData, [e.target.name]: e.target.checked});
    };

    const validateEmail = email => {
        // Allows anything@anything.anything
        let re = /\S+@\S+\.\S+/;
        return re.test(email)
    };

    const validateForm = async () => {
        if (!validateEmail(email)) {

        }
    };

    const handleRegister = async event => {
        event.preventDefault();
        try {
            const responses = await fetch(process.env.REACT_APP_USERS_API_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            await console.log(responses);
        } catch (e) {
            console.log('error when registering (POST) :', e);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <RegistrationHeader title={'Sign-Up'}/>
                <form className={classes.form} noValidate onSubmit={handleRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="first_name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={first_name}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="last_name"
                                autoComplete="lname"
                                value={last_name}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <EmailField value={email} onChange={onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordField value={password} onChange={onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <SubmitCheckBox
                                text={'I want to receive marketing promotions and updates via email.'}
                                checked={is_accepting_marketing}
                                name={'is_accepting_marketing'}
                                onChange={onChangeCheckbox}/>
                        </Grid>
                        <Grid item xs={12}>
                            <SubmitCheckBox
                                text={'I accept terms and conditions.'}
                                checked={has_agreed_to_terms}
                                name={'has_agreed_to_terms'}
                                onChange={onChangeCheckbox}/>
                        </Grid>
                    </Grid>
                    <SubmitButton text={'Sign Up'}/>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Typography variant={"body1"} onClick={openSignIn} className={classes.link}>
                                Already have an account?
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Copyright/>
        </Container>
    );
}
