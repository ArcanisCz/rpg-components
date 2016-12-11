import React, {PropTypes} from "react";

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

const ResourceBar = (props) => {
    const actualMax = getMax(props.max);
    const actualValue = getValue(props.value, actualMax, props.canOverLimit);
    return (
        <div>
            {actualValue} / {actualMax}
        </div>
    );
};

ResourceBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    canOverLimit: PropTypes.bool,
};

ResourceBar.defaultProps = {
    canOverLimit: false,
};

export default ResourceBar;
