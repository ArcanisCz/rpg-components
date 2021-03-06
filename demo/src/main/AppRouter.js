import React, {PropTypes} from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import App from './App';
import PageFirst from './PageFirst';
import PageSecond from './PageSecond';

const AppRouter = ({history}) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/first" />
            <Route path="first" component={PageFirst} />
            <Route path="second" component={PageSecond} />
        </Route>
    </Router>
);

AppRouter.propTypes = {
    history: PropTypes.oneOf([hashHistory]).isRequired,
};

export default AppRouter;
