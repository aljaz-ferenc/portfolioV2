import React, { useEffect, useRef, useState } from "react";

export default function Mouse() {
  const canvasRef = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    setWidth(innerWidth);
    setHeight(innerHeight);

    const mouse = {
      x: -500,
      y: -500,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      setWidth(innerWidth);
      setHeight(innerHeight);
    });

    function animate() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.beginPath();
      ctx.strokeStyle = "#ff4c29";
      ctx.lineWidth = 3;
      ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
      ctx.stroke();

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -10 }}
    ></canvas>
  );
}
