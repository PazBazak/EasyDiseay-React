import React from "react";

const altTextPreFix = "Disease and Research News - ";

function FeedBody(props) {
    const {img, title, summary} = props;

    return (
        <div className={'d-flex'}>
            <img src={img}
                 alt={altTextPreFix + title}
                 className={'feed-image'}/>
            <p className={'feed-text ml-3'}>{summary}</p>
        </div>
    )
}

export default FeedBody;

