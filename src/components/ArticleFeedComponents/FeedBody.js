import React from "react";

const altTextPreFix = "Disease and Research News - ";

function FeedBody(props) {
    return (
        <div className={'d-flex border-bottom pb-3'}>
            <img src={props.image}
                 alt={altTextPreFix + props.title}
                 className={'feed-image'}/>
            <p className={'feed-text ml-3'}>{props.bodyText}</p>
        </div>
    )
}

export default FeedBody;

