import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Project = ({ match }) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/counter`} />
            <Route path={`${match.url}/counter`} component={asyncComponent(() => import('./routes/counter'))} />
            <Route path={`${match.url}/peopleTable`} component={asyncComponent(() => import('./routes/peopleTable'))} />
            <Route path={`${match.url}/contacts`} component={asyncComponent(() => import('./routes/contacts'))} />
            <Route path={`${match.url}/faker`} component={asyncComponent(() => import('./routes/faker'))} />
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
        </Switch>
    </div>
);

export default Project;
