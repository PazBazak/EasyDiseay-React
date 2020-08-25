import React from "react";

class SignTabs extends React.Component{
    render() {
        return (
            <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link" href="#">Log In</a>
                <a id={'sign-up'} className="nav-item nav-link border-bottom" href="#">Sign Up</a>
            </div>
        )
    }

}

export default SignTabs;

