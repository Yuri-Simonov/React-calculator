import React from "react";
import Equal from "./equal";
import LeftPanel from "./leftPanel";
import Operators from "./operators";
import propTypes from "prop-types";

const Buttons = (props) => {
    return (
        <div className="buttons">
            <Operators onChange={props.onChange} operators={props.operators} />
            <LeftPanel
                onChange={props.onChange}
                onReset={props.onReset}
                numbersOfArr={props.numbersOfArr}
            />
            <Equal equal={props.equal} />
        </div>
    );
};
Buttons.propTypes = {
    onChange: propTypes.func.isRequired,
    onReset: propTypes.func.isRequired,
    numbersOfArr: propTypes.array.isRequired,
    operators: propTypes.array.isRequired,
    equal: propTypes.func.isRequired
};

export default Buttons;
