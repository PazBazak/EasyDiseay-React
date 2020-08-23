import React from "react";
import SearchBox from "./SearchBox";
import { FixedSizeList as List} from 'react-window'

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

class DiseasesSlider extends React.Component{
    render() {
        return (
            <div>
                <List
                height={150}
                itemCount={20}
                itemSize={35}
                width={150}>
                    {Row}
                </List>
            </div>
        )
    }

}

export default DiseasesSlider;

