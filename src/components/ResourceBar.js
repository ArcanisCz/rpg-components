import React, {PropTypes, Component} from "react";
import shallowCompare from 'react-addons-shallow-compare';
import classnames from "classnames";

const debug = false;

const getValue = (value, max, canOverLimit) => {
    const actualValue = Math.max(value, 0);
    if (canOverLimit) {
        return actualValue;
    }
    return Math.min(max, actualValue);
};

const getMax = (max) => {
    return Math.max(0, max);
};

class ResourceBar extends Component {
    constructor(props) {
        super(props);
        const actualMax = getMax(this.props.max);
        const actualValue = getValue(this.props.value, actualMax, this.props.canOverLimit);
        this.state = {
            max: actualMax,
            value: actualValue,
            displayValue: actualValue,
        };
        this.timer = this.timer.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const actualMax = getMax(nextProps.max);
        const actualValue = getValue(nextProps.value, actualMax, nextProps.canOverLimit);
        this.setState({
            max: actualMax,
            value: actualValue,
            intervalId: null,
        });
        setTimeout(this.timer, 100);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const myCurrentProps = Object.assign({}, this.props);
        delete myCurrentProps.value;
        delete myCurrentProps.max;
        const myNextProps = Object.assign({}, nextProps);
        delete myNextProps.value;
        delete myNextProps.max;
        var instance = {
            props: myCurrentProps,
            state: this.state,
        };
        const changed = shallowCompare(instance, myNextProps, nextState);
        if (debug && changed) {
            Object.keys(nextProps).forEach((key) => {
                if (nextProps[key] !== this.props[key]) {
                    console.log(key, nextProps[key], this.props[key]);
                }
            });
            Object.keys(nextState).forEach((key) => {
                if (nextState[key] !== this.state[key]) {
                    console.log(key, nextState[key], this.state[key]);
                }
            });
        }

        return changed;
    }

    timer() {
        if (this.state.displayValue !== this.state.value) {
            const toAdd = (this.state.value - this.state.displayValue) / 10;
            this.setState({
                displayValue: this.state.displayValue + (toAdd > 0 ? Math.ceil(toAdd) : Math.floor(toAdd)),
                intervalId: null,
            }, () => {
                if (!this.state.intervalId) {
                    setTimeout(this.timer, 5);
                }
            });
        }

    }

    render() {
        // console.log("render", this.state.value, this.state.displayValue);

        const displayMax = this.props.canOverLimit ? Math.max(this.state.max, this.state.displayValue) : this.state.max;

        const fullWidth = Math.min(Math.min(this.state.displayValue, this.state.max) / displayMax * 100, 100);
        const emptyWidth = (displayMax - this.state.displayValue) / displayMax * 100;
        const overlimitWidth = Math.max(0, (this.state.displayValue - this.state.max) / displayMax) * 100;

        const classes = classnames({
            "rpg-components-resouce-bar": true,
        });

        return (
            <div className={classes}>
                <span className="text">{this.state.value} / {this.state.max}</span>
                <span className="full-part" style={{width: fullWidth+"%"}}/>
                <span className="empty-part" style={{width: emptyWidth+"%",left: fullWidth+"%"}}/>
                <span className="overlimit-part" style={{width: overlimitWidth+"%",left: fullWidth+emptyWidth+"%"}}/>
            </div>
        );
    }
}


ResourceBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    canOverLimit: PropTypes.bool,
};

ResourceBar.defaultProps = {
    canOverLimit: false,
};

export default ResourceBar;
