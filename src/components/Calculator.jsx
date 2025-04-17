import React from "react";
import useCalculatorLogic from "./useCalculatorLogic";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
    const { input, result, handleClick, calculateResult, clearInput } = useCalculatorLogic();

    return (
        <div className="calculator-form">
            {}
            <Display input = {input} result = {result} />

            {}
            <Buttons
                onButtonClick = {
                    (value) =>
                        value === "="
                        ? calculateResult()
                        : value === "AC"
                        ? clearInput()
                        : handleClick(value)
                }
            />
        </div>
    );
};

export default Calculator;