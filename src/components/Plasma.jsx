"use client";
import { useEffect, useRef } from "react";

export default function Plasma({
  color = "#02d5e8",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = false,
}) {
  const wrapperRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    if (!mouseInteractive || !wrapperRef.current || !blobRef.current) return;
    const wrapper = wrapperRef.current;
    const blob = blobRef.current;
    function onMove(e) {
      const rect = wrapper.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      blob.style.left = `${x - 20}%`;
      blob.style.top = `${y - 20}%`;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseInteractive]);

  const d1 = (18 / speed).toFixed(2);
  const d2 = (24 / speed).toFixed(2);
  const d3 = (14 / speed).toFixed(2);
  const dir = direction === "backward" ? "reverse" : "normal";
  const blur = Math.round(80 * scale);
  const s = scale;

  return (
    <>
      <style>{`
        @keyframes _pb1 {
          0%   { transform: translate(0,0) rotate(0deg) scale(1); }
          25%  { transform: translate(10%,-15%) rotate(60deg) scale(1.1); }
          50%  { transform: translate(-8%,12%) rotate(120deg) scale(0.95); }
          75%  { transform: translate(14%,8%) rotate(180deg) scale(1.05); }
          100% { transform: translate(0,0) rotate(360deg) scale(1); }
        }
        @keyframes _pb2 {
          0%   { transform: translate(0,0) rotate(0deg) scale(1.05); }
          33%  { transform: translate(-14%,10%) rotate(-90deg) scale(0.9); }
          66%  { transform: translate(10%,-12%) rotate(-180deg) scale(1.15); }
          100% { transform: translate(0,0) rotate(-360deg) scale(1.05); }
        }
        @keyframes _pb3 {
          0%   { transform: translate(0,0) scale(1); }
          40%  { transform: translate(12%,18%) scale(1.2); }
          80%  { transform: translate(-10%,-6%) scale(0.85); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>

      <div
        ref={wrapperRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          opacity,
          pointerEvents: mouseInteractive ? "auto" : "none",
        }}
      >
        {/* blob 1 — large primary sweeping shape */}
        <div style={{
          position: "absolute",
          width: `${Math.round(60 * s)}%`,
          height: `${Math.round(55 * s)}%`,
          background: color,
          borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
          filter: `blur(${blur}px)`,
          opacity: 0.85,
          top: "0%",
          left: "10%",
          willChange: "transform",
          animation: `_pb1 ${d1}s ease-in-out infinite ${dir}`,
        }} />

        {/* blob 2 — secondary offset blob */}
        <div style={{
          position: "absolute",
          width: `${Math.round(50 * s)}%`,
          height: `${Math.round(60 * s)}%`,
          background: color,
          borderRadius: "38% 62% 54% 46% / 44% 56% 44% 56%",
          filter: `blur(${Math.round(blur * 0.9)}px)`,
          opacity: 0.7,
          top: "30%",
          left: "45%",
          willChange: "transform",
          animation: `_pb2 ${d2}s ease-in-out infinite ${dir}`,
        }} />

        {/* blob 3 — small bright accent */}
        <div
          ref={blobRef}
          style={{
            position: "absolute",
            width: `${Math.round(30 * s)}%`,
            height: `${Math.round(35 * s)}%`,
            background: color,
            borderRadius: "50% 50% 38% 62% / 54% 46% 54% 46%",
            filter: `blur(${Math.round(blur * 0.55)}px)`,
            opacity: 0.95,
            top: "15%",
            left: "38%",
            willChange: "transform",
            animation: mouseInteractive ? "none" : `_pb3 ${d3}s ease-in-out infinite ${dir}`,
            transition: mouseInteractive ? "left 0.6s ease, top 0.6s ease" : "none",
          }}
        />
      </div>
    </>
  );
}
