import React from "react";

const altTextPreFix = "Disease News - ";

class FeedBody extends React.Component {
    render() {
        return (
            <div className={'row border-bottom pb-2'}>
                <img src={this.props.image}
                     alt={altTextPreFix + this.props.title}
                     className={'feed-image col-md-2'}/>
                <p className={'feed-text col-md-6'}>{this.props.bodyText}</p>
            </div>
        )
    }

}

export default FeedBody;

