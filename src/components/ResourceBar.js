import React, {PropTypes} from "react";
import classnames from "classnames";

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

    const displayMax = props.canOverLimit ? Math.max(actualMax, actualValue) : actualMax;

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
