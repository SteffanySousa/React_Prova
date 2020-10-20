import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';


import Home from './paginas/home';
import Brocks from './paginas/brocks';
import Cards from './paginas/cards';
import Forms from './paginas/forms';
import Princing from './paginas/princing';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/brocks' component={Brocks}/>
        <Route path='/cards' component={Cards}/>
        <Route path='/forms' component={Forms}/>
        <Route path='/princing' component={Princing}/>
        <Redirect from='*' to='/home'/>
    </Router>
)