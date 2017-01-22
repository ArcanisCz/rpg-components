import React, {PropTypes} from "react";

const Avatar = ({width, height, img}) => (
    <div
        className="rpg-components-avatar"
        style={{width, height, "background-image": "url("+img+")"}}
    >
    </div>
);

Avatar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};

export default Avatar;
