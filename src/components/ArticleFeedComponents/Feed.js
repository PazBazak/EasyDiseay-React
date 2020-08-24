import React from "react";
import FeedInformation from "./FeedInformation";
import FeedBody from "./FeedBody";

class Feed extends React.Component {
    render() {
        return (
            <div className={'mt-4 w-75'}>
                <h2 className={'feed-title'}>{this.props.title}</h2>
                <FeedInformation disease={this.props.disease} website={this.props.website}
                publishedDate={this.props.publishedDate}/>
                <FeedBody bodyText={this.props.bodyText} image={this.props.image}/>
            </div>
        )
    }

}

export default Feed;

