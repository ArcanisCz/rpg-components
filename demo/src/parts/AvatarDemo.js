import React, {Component} from "react";
import {Panel, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Avatar} from '../../../src';

import avatarImg from "./img/avatar.jpg";

export default class AvatarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            height: 200,
        };
        this.changeWidth = this.changeWidth.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
    }

    changeWidth(input) {
        this.setState({
            width: parseInt(input.target.value || 0),
        });
    }

    changeHeight(input) {
        this.setState({
            height: parseInt(input.target.value || 0),
        });
    }

    render() {
        return (
            <Panel header="Avatar">
                <Col md={6}>
                    <Avatar width={this.state.width} height={this.state.height} img={avatarImg} />
                </Col>
                <Col md={6}>
                    <FormGroup controlId="formControlsText">
                        <ControlLabel>Width</ControlLabel>
                        <FormControl
                            id="formControlsText"
                            type="number"
                            value={this.state.width}
                            onChange={this.changeWidth}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsText1">
                        <ControlLabel>Height</ControlLabel>
                        <FormControl
                            id="formControlsText1"
                            type="number"
                            value={this.state.height}
                            onChange={this.changeHeight}
                        />
                    </FormGroup>
                </Col>
            </Panel>
        );
    }
}

