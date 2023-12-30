import React from "react";
import "./button.css";

const Button = (props) => {
    const { type, title, onClick, disable } = props;

    return (
        <button
            className={`btn ${type === "add" && "add"
                } ${type === "remove" && "remove"
                } ${type === "checkout" && "checkout"
                } ${disable === true && "disabled"
                }`}
            disabled={disable}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;