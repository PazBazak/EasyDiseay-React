import React from "react";

const altTextPreFix = "Disease and Research News - ";

function FeedBody(props) {
    return (
        <div className={'row border-bottom pb-2'}>
            <img src={props.image}
                 alt={altTextPreFix + props.title}
                 className={'feed-image col-md-2'}/>
            <p className={'feed-text col-md-6'}>{props.bodyText}</p>
        </div>
    )
}

export default FeedBody;

