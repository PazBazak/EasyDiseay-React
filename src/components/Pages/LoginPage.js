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
import CustomCheckBox from "../RegistrationComponents/CustomCheckBox";
import * as yup from "yup";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {loginUser} from "../../global_state/actions/authActions";
import {useDispatch} from "react-redux";

const STATUS = 0;
const USER = 1;

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

const validationSchema = yup.object({
    email: yup.string()
        .email('Must be a valid email!')
        .required(),
    password: yup.string()
        .required()
        .min(6)
});

export default function LoginPage(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isShowingPassword, setIsShowingPassword] = useState(false);

    const {openSignUp, closeForm} = props;

    const togglePasswordEye = () => setIsShowingPassword(!isShowingPassword);

    // For preventing black outline on btn click
    const handlePasswordMouseDown = e => e.preventDefault();

    const handleLogin = async data => {
        try {
            const response = await fetch(process.env.REACT_APP_LOGIN_API_URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": 'application/json',
                },
            });

            const jsonResponse = await response.json();
            return [
                response.status,
                {
                    token: jsonResponse.token,
                    firstName: jsonResponse.firstName,
                    lastName: jsonResponse.lastName,
                    email: jsonResponse.email
                }
            ]

        } catch (e) {
            console.log('error when login-in (POST) :', e);
        }
    };

    const handleSuccessfulLogin = data => {
        localStorage.setItem('token', data.token);
        dispatch(loginUser(data));
        alert('Login was successful');
        closeForm();
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <RegistrationHeader title={'Login'}/>
                <Formik initialValues={{
                    email: "",
                    password: "",
                    is_remember: false,
                }}
                        onSubmit={(data, {setSubmitting}) => {
                            setSubmitting(true);
                            handleLogin(data).then(data =>
                                data[STATUS] === 200 ?
                                    handleSuccessfulLogin(data[USER]) :
                                    alert('Failed to Login'));
                            setSubmitting(false);
                        }}
                        validationSchema={validationSchema}
                >
                    {({isSubmitting}) => (
                        <Form className={classes.form} noValidate>
                            <Grid container spacing={2}>
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
                                        label={'Remember me!'}
                                        name={'is_remember'}
                                    />
                                </Grid>
                            </Grid>
                            <SubmitButton text={'Login'} disabled={isSubmitting}/>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Typography variant={"body1"} onClick={openSignUp} className={classes.link}>
                                        Don't have an account?
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
            <Copyright topMargin={5} background={'white'}/>
        </Container>
    );
}
