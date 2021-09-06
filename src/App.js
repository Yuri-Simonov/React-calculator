/* eslint no-eval: 0 */
/* eslint-disable no-console */
import "./App.css";
import Buttons from "./components/buttons";
import React, { useState } from "react";

function App() {
    const initialState = 0;
    const [result, setResult] = useState(initialState);

    const numbersOfArr = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, ".", "AC"]
    ];
    const operators = ["+", "-", "*", "/"];

    const chacgeInputValue = (value) => {
        /* eslint-disable no-console */
        console.log(value);
        /* eslint-enable no-console */
        let subResult;
        if (result === initialState) {
            subResult = "";
        }
        let newResult;
        if (subResult === "") {
            newResult = subResult;
        } else {
            newResult = result;
        }
        const lastValue = String(newResult).slice(-1);
        let newValue;
        operators.forEach((operator) => {
            if (operator === String(lastValue) && isNaN(value)) {
                newValue = String(newResult).slice(0, -1);
                return newValue;
            } else {
                return newValue;
            }
        });
        if (value === "." && String(lastValue) === ".") {
            newValue = String(newResult).slice(0, -1);
            return;
        }
        if (newValue) {
            newValue += String(value);
            setResult(newValue);
        } else {
            newResult += String(value);
            setResult(newResult);
        }
    };

    const resetInputValue = () => {
        setResult(initialState);
    };

    const equalValue = () => {
        const checkTotalValue = result.replace(/^[^1-9]0+/g, "");
        const totalValue = eval(checkTotalValue);
        setResult(totalValue);
    };

    return (
        <div className="calculator">
            <div className="input">{result}</div>
            <Buttons
                onChange={chacgeInputValue}
                onReset={resetInputValue}
                numbersOfArr={numbersOfArr}
                operators={operators}
                equal={equalValue}
            />
        </div>
    );
}

export default App;
