import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import AccountTab from "./AccountTab";
import AuthTabs from "./AuthTabs";

function HeaderTab({setIsLoginOpened, setIsSignUpOpened}) {
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

    const loginClick = () => {
        setIsLoginOpened(true);
    };

    const signUpClick = () => {
        setIsSignUpOpened(true);
    };

    return (
        <Fragment>
            {isAuthenticated ?
                <AccountTab />
                :
                <AuthTabs
                    loginClick={loginClick}
                    signUpClick={signUpClick}
                />}
        </Fragment>

    )
}

export default HeaderTab;

