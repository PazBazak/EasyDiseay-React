import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const altTextPreFix = "Disease and Research News - ";

function FeedBody(props) {
    const {img, title, summary} = props;

    return (
        <div className={'d-flex border-bottom pb-3'}>
            <img src={img}
                 alt={altTextPreFix + title}
                 className={'feed-image'}/>
            <p className={'feed-text ml-3'}>{summary}</p>
        </div>
    )
}

export default FeedBody;

