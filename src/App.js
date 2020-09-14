import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto';
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={MainPage}/>
            </Switch>
        </Router>
    );
}

export default App;
