import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";

function Feed(props) {
    return (
        <div className={'mt-4'}>
            <h2>{props.title}</h2>
            <FeedInformation diseases={props.diseases} website={props.website}
                             publishedDate={props.publishedDate}
                             timeToRead={props.timeToRead} />
            <FeedBody bodyText={props.bodyText} image={props.image} />
        </div>
    )
}

export default Feed;

