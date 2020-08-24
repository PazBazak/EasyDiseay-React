import React from "react";
import SearchBox from "./SearchBox";
import DiseaseList from "./DiseaseList";


class DiseasesSlider extends React.Component {
    render() {
        return (
            <div>
                <SearchBox />
                <DiseaseList />
            </div>
        )
    }

}

export default DiseasesSlider;

