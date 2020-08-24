import React from "react";

class Header extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                    <a className="navbar-brand" href="#">EasyDeasy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100">
                            <a className="nav-item nav-link active" href="#">Home<span
                                className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Top</a>
                            <a className="nav-item nav-link" href="#">New</a>
                            <div className="navbar-nav ml-auto">
                                <a className="nav-item nav-link" href="#">Log In</a>
                                <a id={'sign-up'} className="nav-item nav-link border-bottom" href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Header;

