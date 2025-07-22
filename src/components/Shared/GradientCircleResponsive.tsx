"use client"
import { CSSProperties } from 'react';
import dynamic from 'next/dynamic';

type ResponsiveStyles = {
    sm?: CSSProperties;
    md?: CSSProperties;
    lg?: CSSProperties;
};

type GradientCircleProps = {
    size?: number;
    colors?: [string, string];
    style?: CSSProperties;
    responsive?: ResponsiveStyles;
};

function GradientCircle({ size = 140, colors = ['#ff7300', '#ffd700'], style = {}, responsive = {} }: GradientCircleProps) {
    const getResponsiveStyles = () => {
        if (typeof window === 'undefined') return style;
        
        const width = window.innerWidth;
        if (width < 600 && responsive.sm) return { ...style, ...responsive.sm };
        if (width < 900 && responsive.md) return { ...style, ...responsive.md };
        if (width < 1200 && responsive.lg) return { ...style, ...responsive.lg };
        return style;
    };

    return (
        <>
          <style>
            {`
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.55; }
                50% { transform: scale(1.015); opacity: 0.65; }
                100% { transform: scale(1); opacity: 0.55; }
              }
            `}
          </style>
          <div
            style={{
              width: getResponsiveStyles().width || size,
              height: getResponsiveStyles().height || size,
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]})`,
              position: 'absolute',
              filter: 'blur(2px)',
              opacity: 0.7,
              animation: 'pulse 2.8s infinite cubic-bezier(0.4,0,0.2,1)',
              zIndex: -1,
              ...getResponsiveStyles(),
            }}
          />
        </>
    );
}

export default dynamic(() => Promise.resolve(GradientCircle), { ssr: false });
