import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Feed extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className={'d-flex flex-row'}>
                    <p>website.com</p>
                    <p className={'mx-2'}>|</p>
                    <p>Disease 1</p>
                    <p className={'mx-2'}>|</p>
                    <p>Monday August 20, 2020</p>
                </div>
            </div>
        )
    }

}

export default Feed;

