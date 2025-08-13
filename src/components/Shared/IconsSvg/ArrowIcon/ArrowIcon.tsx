import React from "react";

export default function ArrowIcon({ color = "#000", rotation = 0, size = "20px" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 0 20 24"
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                width: size,
                height: size,
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center",
            }}
        >
            <path
                fill={color}
                d="M16.18 3.269a1 1 0 0 0-1.415 0L8.121 9.913a3 3 0 0 0-.001 4.242l6.57 6.575a1 1 0 1 0 1.415-1.414l-6.573-6.572a1 1 0 0 1 0-1.414l6.648-6.647a1 1 0 0 0 0-1.414Z"
            />
        </svg>
    );
}