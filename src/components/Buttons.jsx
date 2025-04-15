import React from "react";

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
        ["**", "%", "AC"],
    ];

    return (
        <div>
            {}
            {buttons.map((row, rowIndex) => (
                <div key = {rowIndex}>
                    {row.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => onButtonClick(btn)}
                            className={btn === "AC" ? "ac-button" : ""} //AC 스타일 바꾸려고 추가함
                        >
                            {btn} {}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Buttons;