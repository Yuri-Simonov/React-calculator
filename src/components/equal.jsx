import React from "react";
import propTypes from "prop-types";

const Equal = (props) => {
    return (
        <div className="equal" onClick={props.equal}>
            =
        </div>
    );
};
Equal.propTypes = {
    equal: propTypes.func.isRequired
};

export default Equal;
