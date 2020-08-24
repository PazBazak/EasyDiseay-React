import React from "react";
import {FixedSizeList as List} from 'react-window'
import SearchBox from "./SearchBox";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


const Row = ({index, style}) => (
    <div style={style}>
        <p>Disease {index}</p>
    </div>
);

class DiseasesSlider extends React.Component {
    render() {
        return (
            <div>
                <SearchBox />
                <div className={'w-20'}>
                    <List
                        height={510}
                        itemCount={25}
                        itemSize={35}
                        width={'100%'}>
                        {Row}
                    </List>
                </div>
            </div>
        )
    }

}

export default DiseasesSlider;

