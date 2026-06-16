import React from 'react';
import './MethodologyAnimation.css';

const METHODOLOGY_STEPS = [
  { id: 1, label: 'Discovery', number: '01' },
  { id: 2, label: 'Design', number: '02' },
  { id: 3, label: 'Development', number: '03' },
  { id: 4, label: 'Testing', number: '04' },
  { id: 5, label: 'Launch', number: '05' },
  { id: 6, label: 'Support', number: '06' },
];

const MethodologyAnimation = ({ centerText = 'Our Process' }) => {
  return (
    <div className="methodology-animation" aria-hidden>
      <div className="methodology-animation__container">
        {/* Center circle */}
        <div className="methodology-animation__center">
          <div className="methodology-animation__center-content">
            <span className="methodology-animation__center-label">{centerText}</span>
          </div>
        </div>

        {/* Rotating orbit with step cards and circle line */}
        <div className="methodology-animation__orbit">
          {/* Continuous circle line */}
          <svg className="methodology-animation__circle" viewBox="0 0 400 400">
            <circle
              className="methodology-animation__circle-path"
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="rgba(29, 180, 197, 0.3)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Step cards positioned on the circle */}
          {METHODOLOGY_STEPS.map((step, index) => {
            const angle = (360 / METHODOLOGY_STEPS.length) * index;
            const radius = 150; // Match circle radius
            const radian = (angle * Math.PI) / 180;
            const x = 200 + radius * Math.sin(radian);
            const y = 200 - radius * Math.cos(radian);
            
            return (
              <div
                key={step.id}
                className="methodology-animation__step"
                style={{
                  left: `${(x / 400) * 100}%`,
                  top: `${(y / 400) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="methodology-animation__step-card">
                  <span className="methodology-animation__step-number">{step.number}</span>
                  <span className="methodology-animation__step-label">{step.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MethodologyAnimation;
