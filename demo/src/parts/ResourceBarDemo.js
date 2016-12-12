import React, {PropTypes, Component} from "react";
import {Panel, Col, FormGroup, ControlLabel, FormControl, Checkbox} from "react-bootstrap";
import {ResourceBar} from '../../../src';

export default class ResourceBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 200,
            value: 50,
        };
        this.changeValue = this.changeValue.bind(this);
        this.changeMax = this.changeMax.bind(this);
    }

    changeValue(input){
        this.setState({
            value: parseInt(input.target.value || 0)
        })
    }

    changeMax(input){
        this.setState({
            max: parseInt(input.target.value || 0)
        })
    }

    render() {
        return (
            <Panel header="Resource Bar">
                <Col md={6}>
                    <ResourceBar
                        max={this.state.max}
                        value={this.state.value}
                    />
                </Col>
                <Col md={6}>
                    <FormGroup controlId="formControlsText">
                        <ControlLabel>Value</ControlLabel>
                        <FormControl
                            id="formControlsText"
                            type="number"
                            value={this.state.value}
                            onChange={this.changeValue}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsText1">
                        <ControlLabel>Max</ControlLabel>
                        <FormControl
                            id="formControlsText1"
                            type="number"
                            value={this.state.max}
                            onChange={this.changeMax}
                        />
                    </FormGroup>
                </Col>
            </Panel>
        )
    }
}

ResourceBarDemo.propTypes = {};
