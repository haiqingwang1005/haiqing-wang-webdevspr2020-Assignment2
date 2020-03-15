import React from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";
import reducer from "./reducer/reducers";
import {createStore} from "redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import PlayPage from "./pages/play";

const store = createStore(reducer);

/**
 * Index the URL and page components.
 */
render(
    <Provider store={store}>
        <Router>
            <Switch>
                {/* exact makes sure to render ONLY the given component, since this behaves like a switch case logic */}
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/home"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/play/:level?"} component={PlayPage}/>

                {/* This last case is essentially the default case.  Good to have
                if someone types in an incorrect URL.  A component can also be passed here*/}
                <Route render={() => <h1>Not found!</h1>} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);