import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";

function Feed(props) {
    return (
        <div className={'mt-4 w-75'}>
            <h2 className={'feed-title'}>{props.title}</h2>
            <FeedInformation disease={props.disease} website={props.website}
                             publishedDate={props.publishedDate}/>
            <FeedBody bodyText={props.bodyText} image={props.image}/>
        </div>
    )
}

export default Feed;

