import React from "react";
import {Link} from "react-router-dom";

function AccountTabs() {
    return (
        <div className={'ml-auto'}>
            <Link to={'/login'}>
                <input id={'login'} className="btn" type="button" value="Login"/>
            </Link>
            <Link to={'/signup'}>
                <input id={'sign-up'} className="btn border-bottom" type="button" value="Sign-Up"/>
            </Link>
        </div>
    )
}

export default AccountTabs;

