import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import DiseasesSlider from "./components/DiseasesSlider";

function App() {
  return (
      <div>
        <Header />
        <DiseasesSlider />
      </div>
  );
}

export default App;
