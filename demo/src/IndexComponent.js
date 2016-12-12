import React from 'react';
import {browserHistory} from 'react-router';
import main from './main';

const IndexComponent = () => <main.AppRouter history={browserHistory} />;

export default IndexComponent;
