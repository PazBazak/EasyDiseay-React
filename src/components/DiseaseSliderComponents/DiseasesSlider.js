import React from "react";
import SearchBox from "./SearchBox";
import DiseaseList from "./DiseaseList";


class DiseasesSlider extends React.Component {
    render() {
        return (
            <div className={'col-lg-2 col-md-3 col-sm-4 col-xs-5'}>
                <SearchBox />
                <DiseaseList />
            </div>
        )
    }

}

export default DiseasesSlider;

