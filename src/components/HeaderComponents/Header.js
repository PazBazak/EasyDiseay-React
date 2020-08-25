import React from "react";
import Logo from "./Logo";
import Tabs from "./Tabs";
import SignTabs from "./SignTabs";
import NavbarTogglingButton from "./NavbarTogglingButton";

class Header extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                   <Logo />
                    <NavbarTogglingButton />
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav tab-container">
                            <Tabs />
                            <SignTabs />
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Header;

