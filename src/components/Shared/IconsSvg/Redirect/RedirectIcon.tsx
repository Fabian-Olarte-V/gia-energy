import React from "react";

interface RedirectIconProps {
  color?: string;
  size?: number;
}

export default function RedirectIcon({ color = "#ffffff", size = 24 }: RedirectIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} 
      height={size} 
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color} 
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14.162 18.488-.72.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72M9.837 14.162l4.325-4.325M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37.72-.72A6.099 6.099 0 0 0 20.998 9"
      />
    </svg>
  );
}