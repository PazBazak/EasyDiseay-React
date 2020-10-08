import React from "react";

function AccountTabs({setSignInOpened, setSignUpOpened}) {

    const signInClick = () => {
        setSignInOpened(true);
    };

    const signUpClick = () => {
        setSignUpOpened(true);
    };

    return (
        <div className={'ml-auto'}>
            <input id={'login'}
                   className="btn"
                   type="button"
                   value="Login"
                   onClick={signInClick}/>
            <input id={'sign-up'}
                   className="btn border-bottom"
                   type="button"
                   value="Sign-Up"
                   onClick={signUpClick}/>
        </div>
    )
}

export default AccountTabs;

