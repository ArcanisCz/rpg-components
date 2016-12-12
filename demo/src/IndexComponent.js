import React from 'react';
import {hashHistory} from 'react-router';
import main from './main';

const IndexComponent = () => <main.AppRouter history={hashHistory} />;

export default IndexComponent;
