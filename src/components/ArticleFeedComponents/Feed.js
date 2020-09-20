import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";

function Feed(props) {
    const {title, diseases, summary, img, website, timeToRead, publishedDate} = props;

    return (
        <div className={'mt-4'}>
            <h2>{title}</h2>
            <FeedInformation diseases={diseases}
                             website={website}
                             publishedDate={publishedDate}
                             timeToRead={timeToRead} />
            <FeedBody summary={summary} img={img} />
        </div>
    )
}

export default Feed;

