import React from "react";

function FeedInformation(props) {
    function diseasesInfo(disease, index) {
        return (props.diseases.length - 1 !== index) ? disease.name + ", " : disease.name;
    }

    return (
        <div className={'d-flex flex-row feed-info-text'}>
            <p>{props.publishedDate}</p>
            <p className={'mx-2'}>|</p>
            <p>{props.website}</p>
            <p className={'mx-2'}>|</p>
            <p>{props.diseases.map(diseasesInfo)}</p>
            <p className={'ml-auto mr-5'}>4 min</p>
        </div>
    )
}

export default FeedInformation;

