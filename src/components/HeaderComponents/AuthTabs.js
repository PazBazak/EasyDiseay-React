import React from "react";

const AuthTabs = ({loginClick, signUpClick}) => {
    return (
        <div className={'ml-auto'}>
            <input id={'header-btn'}
                   className="btn border"
                   type="button"
                   value="Login"
                   onClick={loginClick}/>
            <input id={'sign-up'}
                   className="btn border"
                   type="button"
                   value="Register"
                   onClick={signUpClick}/>
        </div>
    )
};

export default AuthTabs;
