import React, { useRef, useState } from "react";

const SpotlightEffect = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed inset-0"
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(160, 22, 240, 0.5), transparent 40%)`,
        }}
      />
    </div>
  );
};

export default SpotlightEffect;
