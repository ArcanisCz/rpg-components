import React, {PropTypes} from 'react';
import SampleComponent from "../../components/SampleComponent";

const App = ({children}) => (
    <div>
        <h1>Apaap</h1>
        {children}
        <SampleComponent />
    </div>
);

App.propTypes = {
    children: PropTypes.node,
};

export default App;
