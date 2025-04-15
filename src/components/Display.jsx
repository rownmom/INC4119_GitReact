import React from "react";

const Display = ({ input, result }) => {
    return (
        <div>
        {}
        {}
        <div>{input || "0"}</div>

        {}
        <div>{result}</div>
    </div>
    );
};

export default Display;