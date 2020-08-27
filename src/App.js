import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'jquery'
import 'fontsource-roboto';
import PersistentDrawerLeft from "./components/kaki";

import Header from "./components/HeaderComponents/Header";
import DiseasesSlider from "./components/DiseaseSliderComponents/DiseasesSlider";
import ArticleFeed from "./components/ArticleFeedComponents/ArticleFeed";

function App() {
    return (
        <div>
           <PersistentDrawerLeft />
        </div>
    );
}

export default App;
