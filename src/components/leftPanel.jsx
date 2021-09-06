import React from "react";
import propTypes from "prop-types";

const LeftPanel = (props) => {
    return (
        <div className="leftPanel">
            <div className="numbers">
                <div onClick={() => props.onChange(props.numbersOfArr[0][0])}>
                    {props.numbersOfArr[0][0]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[0][1])}>
                    {props.numbersOfArr[0][1]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[0][2])}>
                    {props.numbersOfArr[0][2]}
                </div>
            </div>
            <div className="numbers">
                <div onClick={() => props.onChange(props.numbersOfArr[1][0])}>
                    {props.numbersOfArr[1][0]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[1][1])}>
                    {props.numbersOfArr[1][1]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[1][2])}>
                    {props.numbersOfArr[1][2]}
                </div>
            </div>
            <div className="numbers">
                <div onClick={() => props.onChange(props.numbersOfArr[2][0])}>
                    {props.numbersOfArr[2][0]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[2][1])}>
                    {props.numbersOfArr[2][1]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[2][2])}>
                    {props.numbersOfArr[2][2]}
                </div>
            </div>
            <div className="numbers">
                <div onClick={() => props.onChange(props.numbersOfArr[3][0])}>
                    {props.numbersOfArr[3][0]}
                </div>
                <div onClick={() => props.onChange(props.numbersOfArr[3][1])}>
                    {props.numbersOfArr[3][1]}
                </div>
                <div onClick={props.onReset}>{props.numbersOfArr[3][2]}</div>
            </div>
        </div>
    );
};
LeftPanel.propTypes = {
    onChange: propTypes.func.isRequired,
    onReset: propTypes.func.isRequired,
    numbersOfArr: propTypes.array.isRequired
};

export default LeftPanel;
