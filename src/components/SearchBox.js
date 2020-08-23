import React from "react";

class SearchBox extends React.Component{
    render() {
        return (
            <div>
                <div className={"md-form mt-0"}>
                    <input className={"form-control"} type="text" placeholder="Search" aria-label="Search" />
                </div>
            </div>
        )
    }

}

export default SearchBox;

