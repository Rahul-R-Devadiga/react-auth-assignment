import { useEffect, useRef, useState } from "react";

const Background = () => {
  const containerRef = useRef(null);
  const [gradient, setGradient] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradient({ x, y });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute w-[300%] h-[300%] rounded-full opacity-60 blur-[120px] brightness-110 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 pointer-events-none transition-all duration-300"
        style={{
          left: `${gradient.x - 150}%`,
          top: `${gradient.y - 150}%`,
        }}
      />
    </div>
  );
};

export default Background;
