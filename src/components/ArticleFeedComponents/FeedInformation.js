import React from "react";

class FeedInformation extends React.Component {
    render() {
        return (
            <div className={'d-flex flex-row feed-info-text'}>
                <p>website.com</p>
                <p className={'mx-2'}>|</p>
                <p>Disease 1</p>
                <p className={'mx-2'}>|</p>
                <p>Monday August 20, 2020</p>
            </div>
        )
    }

}

export default FeedInformation;

