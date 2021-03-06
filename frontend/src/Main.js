import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Map from './Map';
import VenueSummaries from './VenueSummaries';

const Main = () => {
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/' component={Map} />
            <Route path='/' component={VenueSummaries} />
        </Switch>
    </main>

};

export default Main;