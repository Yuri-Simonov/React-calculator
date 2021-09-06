import React from "react";
import propTypes from "prop-types";

const Operators = (props) => {
    return (
        <div className="operators">
            {props.operators.map((operator, index) => {
                return (
                    <div key={index} onClick={() => props.onChange(operator)}>
                        {operator}
                    </div>
                );
            })}
        </div>
    );
};
Operators.propTypes = {
    onChange: propTypes.func.isRequired,
    operators: propTypes.array.isRequired
};

export default Operators;
