import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto';
import MainPage from "./components/Pages/MainPage";
import DiseasePage from "./components/Pages/DiseasePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {Provider} from 'react-redux'
import store from "./global_state/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={MainPage}/>
                    <Route path={'/disease/:id'} component={DiseasePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
