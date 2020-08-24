import React from "react";
import {FixedSizeList as List} from "react-window";
import Disease from "./Disease";


const Row = ({index, style}) => (
    <Disease style={style} index={index}/>
);


class DiseaseList extends React.Component {
    render() {
        return (
            <div className={''}>
                <List
                    height={710}
                    itemCount={25}
                    itemSize={35}
                    width={'100%'}>
                    {Row}
                </List>
            </div>
        )
    }
}

export default DiseaseList;

