import React from 'react';
import './WhyChooseVisual.css';

/**
 * Why Choose visual – designcrew style: central leaf/shield with three lines,
 * concentric brand rings, bottom triangle, and four icons (blue squares L/R, teal dots top/bottom).
 */
const WhyChooseVisual = () => {
  const cx = 200;
  const cy = 200;
  const rInner = 95;
  const rMid = 115;
  const rOuter = 155;
  // Icons between mid and outer ring
  const rIcons = 135;
  const iconYTop = cy - rIcons;
  const iconYBottom = cy + rIcons;
  const iconXLeft = cx - rIcons;
  const iconXRight = cx + rIcons;

  return (
    <div className="why-choose-visual" aria-hidden>
      <svg
        className="why-choose-visual__svg"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="why-choose-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="why-choose-brand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1db4c5" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="why-choose-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Outer thick ring */}
        <circle
          cx={cx}
          cy={cy}
          r={rOuter}
          className="why-choose-visual__ring why-choose-visual__ring--outer"
          stroke="url(#why-choose-brand)"
          strokeWidth="3"
          fill="none"
        />
        {/* Small upward triangle at bottom center of outer ring */}
        <path
          d={`M ${cx} ${cy + rOuter - 12} L ${cx - 8} ${cy + rOuter + 4} L ${cx + 8} ${cy + rOuter + 4} Z`}
          fill="url(#why-choose-brand)"
          className="why-choose-visual__triangle"
        />
        {/* Inner two concentric circles */}
        <circle
          cx={cx}
          cy={cy}
          r={rMid}
          className="why-choose-visual__circle"
          stroke="url(#why-choose-brand)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
        />
        <circle
          cx={cx}
          cy={cy}
          r={rInner}
          className="why-choose-visual__circle why-choose-visual__circle--inner"
          stroke="url(#why-choose-brand)"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />

        {/* Central leaf/shield shape with three horizontal lines */}
        <g className="why-choose-visual__center" filter="url(#why-choose-glow)">
          <path
            d={`M ${cx} ${cy - 72} Q ${cx + 70} ${cy} ${cx} ${cy + 72} Q ${cx - 70} ${cy} ${cx} ${cy - 72} Z`}
            stroke="url(#why-choose-brand)"
            strokeWidth="2"
            fill="none"
            className="why-choose-visual__leaf"
          />
          <line x1={cx - 50} y1={cy - 22} x2={cx + 50} y2={cy - 22} stroke="url(#why-choose-brand)" strokeWidth="1.5" opacity="0.9" className="why-choose-visual__line" />
          <line x1={cx - 50} y1={cy} x2={cx + 50} y2={cy} stroke="url(#why-choose-brand)" strokeWidth="1.5" opacity="0.9" className="why-choose-visual__line" />
          <line x1={cx - 50} y1={cy + 22} x2={cx + 50} y2={cy + 22} stroke="url(#why-choose-brand)" strokeWidth="1.5" opacity="0.9" className="why-choose-visual__line" />
        </g>

        {/* Four icons: teal dots top & bottom, blue squares left & right */}
        <circle cx={cx} cy={iconYTop} r="7" fill="url(#why-choose-brand)" className="why-choose-visual__icon why-choose-visual__icon--top" />
        <circle cx={cx} cy={iconYBottom} r="7" fill="url(#why-choose-brand)" className="why-choose-visual__icon why-choose-visual__icon--bottom" />
        <rect x={iconXLeft - 8} y={cy - 8} width="16" height="16" rx="3" fill="url(#why-choose-blue)" className="why-choose-visual__icon why-choose-visual__icon--left" />
        <rect x={iconXRight - 8} y={cy - 8} width="16" height="16" rx="3" fill="url(#why-choose-blue)" className="why-choose-visual__icon why-choose-visual__icon--right" />
      </svg>
    </div>
  );
};

export default WhyChooseVisual;
