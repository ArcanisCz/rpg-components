import React, {PropTypes} from "react";

const Avatar = ({width, height, img}) => (
    <div className="rpg-components-avatar" style={{width, height}}>

    </div>
);

Avatar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Avatar;
