import React from "react";

function AccountTabs({setIsLoginOpened, setIsSignUpOpened}) {

    const loginClick = () => {
        setIsLoginOpened(true);
    };

    const signUpClick = () => {
        setIsSignUpOpened(true);
    };

    return (
        <div className={'ml-auto'}>
            <input id={'login'}
                   className="btn border"
                   type="button"
                   value="Login"
                   onClick={loginClick}/>
            <input id={'sign-up'}
                   className="btn border"
                   type="button"
                   value="Sign-Up"
                   onClick={signUpClick}/>
        </div>
    )
}

export default AccountTabs;

