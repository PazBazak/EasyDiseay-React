import React from "react";

const altTextPreFix = "Disease News - ";

class FeedBody extends React.Component {
    render() {
        return (
            <div>
                <img src={'https://images.medicinenet.com/images/newsletter/specialty/oleander-plant.jpg'}
                     alt={altTextPreFix + this.props.title}
                     className={'feed-image'}/>
            </div>
        )
    }

}

export default FeedBody;

