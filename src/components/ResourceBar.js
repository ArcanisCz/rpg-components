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
        const oldMax = getMax(this.props.max);
        const newValue = getValue(nextProps.value, max);
        if (max !== oldMax) {
            this.setState({
                max,
                value: newValue,
                displayValue: newValue,
            });
        } else {
            this.setState({
                max,
                value: newValue,
            }, () => setTimeout(this.timer, 250));
        }

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
        const fullWidth = (this.state.value / this.state.max) * 100;
        const fullTempWidth = ((this.state.displayValue - this.state.value) / this.state.max) * 100;
        const emptyTempWidth = ((this.state.value - this.state.displayValue) / this.state.max) * 100;
        const emptyWidth = 100 - (fullWidth + fullTempWidth + emptyTempWidth);

        return (
            <div className="rpg-components-resouce-bar">
                <span className="text">{this.state.value} / {this.state.max}</span>
                <span className="full-part" style={{width: fullWidth+"%", left: 0+"%"}}/>
                <span className="full-temp-part" style={{width: fullTempWidth+"%", left: fullWidth+"%"}}/>
                <span className="empty-temp-part" style={{width: emptyTempWidth+"%", left: (fullWidth+fullTempWidth)+"%"}}/>
                <span className="empty-part" style={{width: emptyWidth+"%",left: (fullWidth+fullTempWidth+emptyTempWidth)+"%"}}/>
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
