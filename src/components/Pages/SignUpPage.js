import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../RegistrationComponents/CopyRight";
import RegistrationHeader from "../RegistrationComponents/RegistrationHeader";
import SubmitButton from "../RegistrationComponents/SubmitButton";
import Typography from "@material-ui/core/Typography";
import {Form, Formik} from "formik";
import CustomTextField from "../RegistrationComponents/CustomTextField";
import * as yup from 'yup';
import {lowerCaseRegex, numericRegex} from '../utils/Constants'
import CustomCheckBox from "../RegistrationComponents/CustomCheckBox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


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
    first_name: yup.string()
        .required()
        .min(3)
        .max(14),
    last_name: yup.string()
        .required()
        .min(3)
        .max(12),
    email: yup.string()
        .email('Must be a valid email!')
        .required(),
    password: yup.string()
        .required()
        .matches(lowerCaseRegex, 'The password must contain at least 1 lowercase character!')
        .matches(numericRegex, 'The password must contain at least 1 number!')
        .min(6)
        .max(14),
    has_agreed_to_terms: yup.bool()
        .required()
        .oneOf([true], 'Must Accept Terms and Conditions!')
});


export default function SignUpPage({openSignIn}) {
    const classes = useStyles();
    const [isShowingPassword, setIsShowingPassword] = useState(false);

    const togglePasswordEye = () => setIsShowingPassword(!isShowingPassword);

    // For preventing black outline on btn click
    const handlePasswordMouseDown = e => e.preventDefault();

    const handleRegister = async data => {
        try {
            const response = await fetch(process.env.REACT_APP_USERS_API_URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": 'application/json',
                },
            });
            return response.status;
        } catch (e) {
            console.log('error when registering (POST) :', e);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <RegistrationHeader title={'Sign-Up'}/>
                <Formik initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    is_accepting_marketing: false,
                    has_agreed_to_terms: false
                }}
                        onSubmit={(data, {setSubmitting}) => {
                            setSubmitting(true);
                            handleRegister(data).then(status => status === 201 ?
                                alert("Successfully registered!") :
                                console.log('failed to register'));
                            setSubmitting(false);
                        }}
                        validationSchema={validationSchema}
                >
                    {({isSubmitting}) => (
                        <Form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        placeholder={"First Name"}
                                        name={'first_name'}
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
                                        name="last_name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        name={'email'}
                                        placeholder={'Email Address'}
                                        label={'Email Address'}
                                        required
                                        variant={'outlined'}
                                        fullWidth
                                        type={'email'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        name={'password'}
                                        placeholder={'Password'}
                                        label={'Password'}
                                        required
                                        variant={'outlined'}
                                        fullWidth
                                        type={isShowingPassword ? 'text' : 'password'}
                                        inputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={togglePasswordEye}
                                                        onMouseDown={handlePasswordMouseDown}
                                                    >
                                                        {isShowingPassword ?
                                                            <Visibility fontSize={"small"}/>
                                                            : <VisibilityOff fontSize={"small"}/>}
                                                    </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomCheckBox
                                        label={'I want to receive marketing promotions and updates via email.'}
                                        name={'is_accepting_marketing'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomCheckBox
                                        label={'I accept terms and conditions.'}
                                        name={'has_agreed_to_terms'}
                                    />
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
                        </Form>
                    )}
                </Formik>
            </div>
            <Copyright/>
        </Container>
    );
}
