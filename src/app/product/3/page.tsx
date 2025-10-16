"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const [frameNumber, setFrameNumber] = useState(1);

  const updatePosition = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0.1, Math.min(x / rect.width, 0.9));
    const newLeftVw = percent * 60;
    setSliderX(newLeftVw);
    setFrameNumber(Math.ceil(percent * 20));
    if (Math.ceil(percent * 20) - 10 <= 0) {
      setFrameNumber(10 + Math.ceil(percent * 20));
    } else {
      setFrameNumber(Math.ceil(percent * 20) - 10);
    }
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
    <div>
      <div style={{ position: "fixed", top: "6vw", left: "7vw" }}>
        <Image
          alt=""
          width={50}
          height={50}
          src="/backBtn.png"
          style={{ height: "5vw", width: "auto" }}
          onClick={() => {
            router.push('/');
          }}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "6vw",
          gap: "2vw",
        }}
      >
        <Image
          alt=""
          width={50}
          height={50}
          src="/profileIcon.png"
          style={{ width: "6vw" }}
        ></Image>
        <p style={{ fontSize: "4vw", lineHeight: "1" }}>J0xn_d03</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5vw",
          marginTop: "-5vh",
        }}
      >
        <Image
          alt=""
          width={50}
          height={50}
          src="/leftButton.png"
          style={{ width: "6vw" }}
          onClick={() => {
            router.push("/product/2");
          }}
        ></Image>
        <div>
          <Image
            alt=""
            width={200}
            height={400}
            src={`/torbs-animation/${String(frameNumber).padStart(4, "0")}.png`}
            style={{ width: "67vw" }}
          ></Image>
        </div>
        <Image
          alt=""
          width={50}
          height={50}
          src="/rightButton.png"
          style={{ width: "6vw" }}
          onClick={() => {
            router.push("/product/1");
          }}
        ></Image>
      </div>
      <div
        style={{
          position: "relative",
          width: "60vw",
          height: "12vw",
          marginLeft: "20vw",
          display: "flex",
          alignItems: "center",
          marginTop: "-7.5vh",
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
          style={{ width: "60vw" }}
        ></Image>
        <Image
          src="/slider.png"
          width={50}
          height={50}
          alt=""
          style={{
            height: "12vw",
            width: "auto",
            position: "absolute",
            left: `${sliderX - 6}vw`,
          }}
        ></Image>
      </div>
      <div
        style={{
          position: "absolute",
          height: "53vw",
          bottom: "-10vw",
          width: "104vw",
          left: "-2vw",
        }}
      >
        <div style={{ padding: "2vw 6vw 0 6vw" }}>
          <h1 style={{ fontSize: "6vw", lineHeight: "1.2" }}>
            THE<br></br>X-ORBS
          </h1>
          <p
            className="oxanium"
            style={{ fontSize: "2.67vw", marginTop: "2vw", color: "#bbb" }}
          >
            COMPACT, LEVITATING NEURAL LINK SPHERES THAT MOVE AS A DIRECT
            EXTENSION OF YOUR WILL. UNLIKE AUTONOMOUS DRONES, XORBS ACT PURELY
            THROUGH YOUR NEURAL IMPULSES, OFFERING PRECISION WITHOUT DETACHMENT:
            TECHNOLOGY AS A TRUE EXTENSION OF SELF.
          </p>
        </div>
        <Image
          alt=""
          width={300}
          height={200}
          src="/tedhiMedhiPhotu.png"
          style={{
            width: "104vw",
            height: "auto",
            position: "absolute",
            bottom: "0",
            zIndex: "-1",
          }}
        ></Image>
      </div>
    </div>
  );
}
