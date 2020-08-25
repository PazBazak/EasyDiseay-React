import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faStar as fullStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as star} from '@fortawesome/free-regular-svg-icons'

function Disease(props) {
    return (
        <div className={'d-flex flex-row border-bottom'} style={props.style}>
            <p className={'disease-item-row align-self-center mb-0'}>Disease {props.index}</p>
            <FontAwesomeIcon className={'ml-auto mr-2 align-self-center'} icon={star}/>
        </div>
    )
}

export default Disease;

