import React from "react";

class SearchBox extends React.Component{
    render() {
        return (
            <div className={'w-20 p-2 border-right'}>
                <input className={"form-control"} type="text" placeholder="Search" aria-label="Search" />
            </div>
        )
    }

}

export default SearchBox;

