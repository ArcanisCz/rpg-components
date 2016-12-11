import React, {PropTypes} from 'react';

const App = ({children}) => (
    <div>
        <h1>Apps</h1>
        {children}
    </div>
);

App.propTypes = {
    children: PropTypes.node,
};

export default App;
