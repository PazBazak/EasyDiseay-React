import React from "react";

class FeedInformation extends React.Component {
    render() {
        return (
            <div className={'d-flex flex-row feed-info-text'}>
                <p>{this.props.website}</p>
                <p className={'mx-2'}>|</p>
                <p>{this.props.disease}</p>
                <p className={'mx-2'}>|</p>
                <p>{this.props.publishedDate}</p>
            </div>
        )
    }

}

export default FeedInformation;

