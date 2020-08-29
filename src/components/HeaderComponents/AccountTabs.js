import React from "react";

function AccountTabs() {
    return (
        <div className={'ml-auto'}>
            <input id={'login'} className="btn" type="button" value="Login" />
            <input id={'sign-up'} className="btn border-bottom" type="button" value="Sign-Up" />
        </div>
    )
}

export default AccountTabs;

