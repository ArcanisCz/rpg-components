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
        };
    }

    componentWillReceiveProps(nextProps) {
        const actualMax = getMax(nextProps.max);
        const actualValue = getValue(nextProps.value, actualMax, nextProps.canOverLimit);
        this.setState({
            max: actualMax,
            value: actualValue,
        })
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
                if(nextProps[key] !== this.props[key]){
                    console.log(key, nextProps[key], this.props[key]);
                }
            });
            Object.keys(nextState).forEach((key) => {
                if(nextState[key] !== this.state[key]){
                    console.log(key, nextState[key], this.state[key]);
                }
            });
        }

        return changed;
    }

    render() {
        const actualMax = getMax(this.state.max);
        const actualValue = getValue(this.state.value, actualMax, this.props.canOverLimit);

        const displayMax = this.props.canOverLimit ? Math.max(actualMax, actualValue) : actualMax;

        const fullWidth = Math.min(Math.min(actualValue, actualMax) / displayMax * 100, 100);
        const emptyWidth = (displayMax - actualValue) / displayMax * 100;
        const overlimitWidth = Math.max(0, (actualValue - actualMax) / displayMax) * 100;

        const classes = classnames({
            "rpg-components-resouce-bar": true,
        });

        return (
            <div className={classes}>
            <span className="text">
                {actualValue} / {actualMax}
            </span>
            <span
                className="full-part"
                style={{
                    width: fullWidth+"%",
                }}
            />
            <span
                className="empty-part"
                style={{
                    width: emptyWidth+"%",
                    left: fullWidth+"%",
                }}
            />
            <span
                className="overlimit-part"
                style={{
                    width: overlimitWidth+"%",
                    left: fullWidth+emptyWidth+"%",
                }}
            />
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
