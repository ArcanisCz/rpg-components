import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import IndexComponent from './IndexComponent';
import './index.less';
import './favicon.ico';

/* eslint-disable no-undef */
render((
  <AppContainer>
    <IndexComponent />
  </AppContainer>
), document.getElementById('app'));
/* eslint-enable no-undef */

if (module.hot) {
  module.hot.accept('./IndexComponent', () => {
        /* eslint-disable global-require*/
        // needs to be here with runtime require
    const Comp = require('./IndexComponent').default;
        /* eslint-enable global-require*/

        /* eslint-disable no-undef */
    render(
      <AppContainer>
        <Comp />
      </AppContainer>
            ,
            document.getElementById('app'),
        );
        /* eslint-enable no-undef */
  });
}
