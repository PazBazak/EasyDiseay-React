import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto';
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router';

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={MainPage}/>
                <Route path={'/login'} component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default App;
