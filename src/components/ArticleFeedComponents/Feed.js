import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";

class Feed extends React.Component {
    render() {
        return (
            <div className={''}>
                <h2 className={'feed-title'}>{this.props.title}</h2>
                <FeedInformation />
                <FeedBody />
            </div>
        )
    }

}

export default Feed;

