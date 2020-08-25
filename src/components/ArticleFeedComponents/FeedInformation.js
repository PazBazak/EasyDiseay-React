import React from "react";

function FeedInformation(props) {
    return (
        <div className={'d-flex flex-row feed-info-text'}>
            <p>{props.website}</p>
            <p className={'mx-2'}>|</p>
            <p>{props.disease}</p>
            <p className={'mx-2'}>|</p>
            <p>{props.publishedDate}</p>
        </div>
    )
}

export default FeedInformation;

