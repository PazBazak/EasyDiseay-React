import React from "react";

class NavbarTogglingButton extends React.Component{
    render() {
        return (
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
            </button>
        )
    }

}

export default NavbarTogglingButton;

