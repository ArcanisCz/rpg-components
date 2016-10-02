import React from 'react';
import main from "./main";
import {browserHistory} from "react-router";

const IndexComponent = () => <main.AppRouter history={browserHistory} />;

export default IndexComponent;
