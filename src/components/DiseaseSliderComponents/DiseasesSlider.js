import React from "react";
import SearchBox from "./SearchBox";
import DiseaseList from "./DiseaseList";


class DiseasesSlider extends React.Component {
    render() {
        return (
            <div className={'col-3'}>
                <SearchBox />
                <DiseaseList />
            </div>
        )
    }

}

export default DiseasesSlider;

