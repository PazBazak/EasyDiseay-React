import React from "react";
import {Button} from "@material-ui/core";

function AccountTabs({setIsLoginOpened, setIsSignUpOpened}) {

    const loginClick = () => {
        setIsLoginOpened(true);
    };

    const signUpClick = () => {
        setIsSignUpOpened(true);
    };

    return (
        <div className={'ml-auto'}>
            <Button
                onClick={loginClick}
                className={'btn border'}
                id={'login'}
            >
                Login
            </Button>
            <Button
                onClick={signUpClick}
                className="btn border"
                id={'sign-up'}
            >
                Register
            </Button>
        </div>
    )
}

export default AccountTabs;

