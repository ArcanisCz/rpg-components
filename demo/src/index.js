import React from 'react';
import {render} from 'react-dom';

import IndexComponent from './IndexComponent';
import './index.less';
import './include.less';
import './favicon.ico';

/* eslint-disable no-undef */
render((<IndexComponent />), document.getElementById('app'));
/* eslint-enable no-undef */

if(module.hot){
    module.hot.accept();
}
