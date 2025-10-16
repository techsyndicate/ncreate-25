"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function ChhotaSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPercent, setSliderPercent] = useState(0.5);

  const updatePosition = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0.1, Math.min(x / rect.width, 0.9));
    const newLeftVw = percent * 80;
    setSliderX(newLeftVw);
    setSliderPercent(percent);
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX);
    setIsDragging(true);
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    updatePosition(touch.clientX);
  };
  const handleTouchEnd = () => setIsDragging(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          width: "80vw",
          height: "12vw",
          display: "flex",
          alignItems: "center",
          zIndex: "10",
          touchAction: "none",
        }}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
      >
        <Image
          src="/dottedLine.png"
          width={200}
          height={10}
          alt=""
          style={{ width: "80vw" }}
        ></Image>
        <Image
          src="/miniSliderBtn.png"
          width={50}
          height={50}
          alt=""
          style={{
            height: "6vw",
            width: "auto",
            position: "absolute",
            left: `${sliderX - 3}vw`,
          }}
        ></Image>
      </div>
      <div style={{ fontSize: "5vw" }}>{Math.round(sliderPercent * 100)}%</div>
    </div>
  );
}

export default ChhotaSlider;
