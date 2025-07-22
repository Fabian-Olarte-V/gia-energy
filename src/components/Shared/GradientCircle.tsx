import React from 'react';

const pulseKeyframes = {
  animation: 'pulse 2.8s infinite cubic-bezier(0.4,0,0.2,1)',
};

export default function GradientCircle({ size = 140, colors = ['#ff7300', '#ffd700'], style = {} }) {
  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.55; }
            50% { transform: scale(1.05); opacity: 0.6; }
            100% { transform: scale(1); opacity: 0.55; }
          }
        `}
      </style>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]})`,
          position: 'absolute',
          filter: 'blur(2px)',
          opacity: 0.5,
          ...pulseKeyframes,
          ...style,
        }}
      />
    </>
  );
}
