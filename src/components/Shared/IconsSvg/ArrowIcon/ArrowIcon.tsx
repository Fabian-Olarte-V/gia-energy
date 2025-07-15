import React, { useState, useEffect } from "react";

export default function ArrowIcon({ color = "$blue-100", rotation = 0 }) {
    const [size, setSize] = useState("24px");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setSize("14px");
            } else if (window.innerWidth <= 768) {
                setSize("20px");
            } else {
                setSize("24px");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                fill="#0F0F0F"
                d="M16.18 3.269a1 1 0 0 0-1.415 0L8.121 9.913a3 3 0 0 0-.001 4.242l6.57 6.575a1 1 0 1 0 1.415-1.414l-6.573-6.572a1 1 0 0 1 0-1.414l6.648-6.647a1 1 0 0 0 0-1.414Z"
            />
        </svg>
    );
}