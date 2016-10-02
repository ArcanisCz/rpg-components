import React, {PropTypes} from 'react';
import {Router, Route} from "react-router";

import App from "./App";

const AppRouter = ({history}) => (
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>

);

AppRouter.propTypes = {
    history: PropTypes.object.isRequired,
};

export default AppRouter;
