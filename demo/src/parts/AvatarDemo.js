import React, {PropTypes} from "react";
import {Panel, Col} from 'react-bootstrap';
import {Avatar} from '../../../src';

const AvatarDemo = () => (
    <Panel header="Avatar">
        <Col md={6}>
            <Avatar width={300} height={300} />
        </Col>
        <Col md={6}>

        </Col>
    </Panel>
);

export default AvatarDemo;
