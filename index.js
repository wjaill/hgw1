import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';
import Home from "./javascripts/components/home/Home.js"


import {Router,Route,IndexRedirect,hashHistory} from 'react-router'

let route = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Home}/>
    </Route>
</Router>


ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
