import React from "react";

class Tabs extends React.Component{
    render() {
        return (
            <div className={'navbar-nav'}>
                <a className="nav-item nav-link active" href="#">Relevant</a>
                <a className="nav-item nav-link" href="#">Recent</a>
                <a className="nav-item nav-link" href="#">Followed</a>
            </div>
        )
    }

}

export default Tabs;

