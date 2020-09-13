import React from "react";

function FeedInformation(props) {
    const {publishedDate, website, diseases, timeToRead} = props;

    return (
        <div className={'d-flex flex-row feed-info-text'}>
            <p>{publishedDate}</p>
            <p className={'mx-2'}>|</p>
            <p>{website}</p>
            <p className={'mx-2'}>|</p>
            <p>{diseases.map((disease) => disease.name).join(', ')}</p>
            <p className={'ml-auto mr-5'}>{timeToRead} min</p>
        </div>
    )
}

export default FeedInformation;

