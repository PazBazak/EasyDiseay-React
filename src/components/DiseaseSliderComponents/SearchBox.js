import React from "react";

class SearchBox extends React.Component{
    render() {
        return (
            <div className={'py-2 pr-3 border-right'}>
                <input className={"form-control"} type="text" placeholder="Search" aria-label="Search" />
            </div>
        )
    }

}

export default SearchBox;

