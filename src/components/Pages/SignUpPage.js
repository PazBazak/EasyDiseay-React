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
import {Form, Formik} from "formik";
import CustomTextField from "../RegistrationComponents/CustomTextField";
import * as yup from 'yup';

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


const validationSchema = yup.object({
    firstName: yup.string()
        .required()
        .max(14)
});


export default function SignUpPage({openSignIn}) {
    const classes = useStyles();

    // const handleRegister = async event => {
    //     event.preventDefault();
    //     try {
    //         const responses = await fetch(process.env.REACT_APP_USERS_API_URL, {
    //             method: 'POST',
    //             body: JSON.stringify(formData),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         await console.log(responses);
    //     } catch (e) {
    //         console.log('error when registering (POST) :', e);
    //     }
    // };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <RegistrationHeader title={'Sign-Up'}/>
                <Formik initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    is_accepting_marketing: false,
                    has_agreed_to_terms: false
                }}
                        onSubmit={(data, {setSubmitting}) => {
                            setSubmitting(true);
                            console.log(data);
                            setSubmitting(false);
                        }}
                        // validate={(values) => {
                        //     const errors = {};
                        //
                        //     if (values.firstName.length < 3) {
                        //         errors.firstName = "First name must be 3 characters!"
                        //     }
                        //
                        //     return errors;
                        // }}
                    validationSchema={validationSchema}
                >
                    {({values, handleChange, handleBlur, isSubmitting, errors}) => (
                        <Form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        placeholder={"First Name"}
                                        name={'firstName'}
                                        type={'input'}
                                        label="First Name"
                                        fullWidth
                                        required
                                        variant="outlined"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Last Name"
                                        name="lastName"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <EmailField value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <PasswordField value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SubmitCheckBox
                                        text={'I want to receive marketing promotions and updates via email.'}
                                        checked={values.is_accepting_marketing}
                                        name={'is_accepting_marketing'}
                                        onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SubmitCheckBox
                                        text={'I accept terms and conditions.'}
                                        checked={values.has_agreed_to_terms}
                                        name={'has_agreed_to_terms'}
                                        onChange={handleChange}/>
                                </Grid>
                            </Grid>
                            <SubmitButton text={'Sign Up'} disabled={isSubmitting}/>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Typography variant={"body1"} onClick={openSignIn} className={classes.link}>
                                        Already have an account? Login
                                    </Typography>
                                </Grid>
                            </Grid>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </Form>
                    )}
                </Formik>
            </div>
            <Copyright/>
        </Container>
    );
}
