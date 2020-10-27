import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import AccountTab from "./AccountTab";

function AuthTabs({setIsLoginOpened, setIsSignUpOpened}) {
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
                <div className={'ml-auto'}>
                    <input id={'login'}
                           className="btn border"
                           type="button"
                           value="Login"
                           onClick={loginClick}/>
                    <input id={'sign-up'}
                           className="btn border"
                           type="button"
                           value="Register"
                           onClick={signUpClick}/>
                </div>}
        </Fragment>

    )
}

export default AuthTabs;

