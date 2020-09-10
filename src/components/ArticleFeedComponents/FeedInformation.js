import React from "react";

function FeedInformation(props) {
    return (
        <div className={'d-flex flex-row feed-info-text'}>
            <p>{props.publishedDate}</p>
            <p className={'mx-2'}>|</p>
            <p>{props.website}</p>
            <p className={'mx-2'}>|</p>
            <p>{props.diseases.map((diseases) => diseases.name).join(', ')}</p>
            <p className={'ml-auto mr-5'}>4 min</p>
        </div>
    )
}

export default FeedInformation;

