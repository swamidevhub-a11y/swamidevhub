import React, { useEffect, useRef } from "react";
import "./GoldenParticlesBackground.css";

const GoldenParticlesBackground = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 120 }).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2.5,
      // slower vertical speed for a calmer feel
      speedY: 0.007 + Math.random() * 0.018,
      twinkleOffset: i * 37.1,
    }));

    const draw = (t) => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#020309";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY * (height / 600);
        if (p.y > 1.2) p.y = -0.2;

        const alpha =
          0.2 +
          0.8 *
            (0.5 +
              0.5 *
                Math.sin((t / 1000 + p.twinkleOffset) * 0.8));

        ctx.beginPath();
        ctx.fillStyle = `rgba(29, 180, 197, ${alpha})`;
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="gp-bg__canvas" />;
};

export default GoldenParticlesBackground;

