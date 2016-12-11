import React, { PropTypes } from 'react';
import { SampleComponent } from '../../../src';

const App = ({ children }) => (
  <div>
    <h1>Apps</h1>
    {children}
    <SampleComponent />
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
