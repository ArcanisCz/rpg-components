import React, {PropTypes, Component} from "react";
import {Panel, Col, FormGroup, ControlLabel, FormControl, Checkbox} from "react-bootstrap";
import {ResourceBar} from '../../../src';

export default class ResourceBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: 10,
            value: 20,
            canOverMax: false,
        };
        this.changeValue = this.changeValue.bind(this);
        this.changeMax = this.changeMax.bind(this);
        this.changeCanOverMax = this.changeCanOverMax.bind(this);
    }

    changeValue(input){
        this.setState({
            value: parseInt(input.target.value)
        })
    }

    changeMax(input){
        this.setState({
            max: parseInt(input.target.value)
        })
    }

    changeCanOverMax(input){
        this.setState({
            canOverMax: !!input.target.checked
        })
    }

    render() {
        return (
            <Panel header="Resource Bar">
                <Col md={6}>
                    <ResourceBar
                        max={this.state.max}
                        value={this.state.value}
                        canOverLimit={this.state.canOverMax}
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
                    <Checkbox
                        onChange={this.changeCanOverMax}
                        checked={this.state.canOverMax}
                    >
                        canOverMax
                    </Checkbox>
                </Col>
            </Panel>
        )
    }
}

ResourceBarDemo.propTypes = {};
