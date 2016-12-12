import React, {PropTypes, Component} from "react";

const getValue = (value, max) => {
    return Math.max(Math.min(value, max), 0);
};

const getMax = (max) => {
    return Math.max(0, max);
};

class ResourceBar extends Component {
    constructor(props) {
        super(props);
        const max = getMax(this.props.max);
        const value = getValue(this.props.value, max);
        this.state = {
            max,
            value,
            displayValue: value,
        };
        this.timer = this.timer.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const max = getMax(nextProps.max);
        const value = getValue(nextProps.value, max);
        this.setState({
            max,
            value,
        }, () => setTimeout(this.timer, 5));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.max !== this.state.max ||
            nextState.displayValue !== this.state.displayValue ||
            nextState.value !== this.state.value;
    }

    timer() {
        if (this.state.displayValue !== this.state.value) {
            const toAdd = (this.state.value - this.state.displayValue) / 10;
            this.setState({
                displayValue: this.state.displayValue + (toAdd > 0 ? Math.ceil(toAdd) : Math.floor(toAdd)),
            }, () => setTimeout(this.timer, 5));
        }
    }

    render() {
        const displayMax = Math.max(this.state.max, this.state.displayValue);

        const fullWidth = Math.min(Math.min(this.state.displayValue, this.state.max) / displayMax * 100, 100);
        const emptyWidth = (displayMax - this.state.displayValue) / displayMax * 100;
        const overlimitWidth = Math.max(0, (this.state.displayValue - this.state.max) / displayMax) * 100;

        return (
            <div className="rpg-components-resouce-bar">
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

};

ResourceBar.defaultProps = {};

export default ResourceBar;
