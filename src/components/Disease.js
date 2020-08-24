import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faStar as fullStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as star} from '@fortawesome/free-regular-svg-icons'

class Disease extends React.Component {
    render() {
        return (
            <div style={this.props.style} className={'d-flex flex-row'}>
                <p className={'ml-3'}>Disease {this.props.index}</p>
                <FontAwesomeIcon className={'ml-auto mr-2'} icon={star}/>
            </div>
        )
    }

}

export default Disease;

