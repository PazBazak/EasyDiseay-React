import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        boxShadow: 'none',
        textTransform: 'none',
        margin: theme.spacing(.5),
        border: '1px solid white',
        color: 'white',
        '&:hover, &:focus, &:active': {
            boxShadow: 'none',
            outline: 'none'
        },
    },
}));

const AuthTabs = ({loginClick, signUpClick}) => {
    const classes = useStyles();
    const buttonProps = {
        className: classes.buttonStyle,
        size: 'large',
        disableRipple: true,
        disableFocusRipple: true,
    };
    return (
        <div>
            <Button {...buttonProps}
                    onClick={loginClick}>
                Login
            </Button>
            <Button {...buttonProps}
                    onClick={signUpClick}>
                Register
            </Button>
        </div>
    )
};

export default AuthTabs;
