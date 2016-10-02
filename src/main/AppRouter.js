import React from 'react';
import {Router, Route} from "react-router";

import App from "./App";

const AppRouter = ({history}) => (
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>

);

export default AppRouter;
