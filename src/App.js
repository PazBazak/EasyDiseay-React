import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/HeaderComponents/Header";
import DiseasesSlider from "./components/DiseaseSliderComponents/DiseasesSlider";
import ArticleFeed from "./components/ArticleFeedComponents/ArticleFeed";

function App() {
    return (
        <div>
            <Header/>
            <div className={'d-flex flex-row'}>
                <DiseasesSlider/>
                <ArticleFeed />
            </div>
        </div>
    );
}

export default App;
