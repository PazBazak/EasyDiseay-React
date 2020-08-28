import React from "react";

const altTextPreFix = "Disease and Research News - ";

function FeedBody(props) {
    return (
        <div className={'row border-bottom pb-3'}>
            <img src={props.image}
                 alt={altTextPreFix + props.title}
                 className={'feed-image col-md-3'}/>
            <p className={'feed-text col'}>{props.bodyText}</p>
        </div>
    )
}

export default FeedBody;

