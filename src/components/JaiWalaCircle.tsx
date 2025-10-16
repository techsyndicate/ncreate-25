"use client"
import {useState} from "react";

interface CircleProps {
  content: string;
  top: string;
  left: string;
}

function JaiWalaCircle({ content, top, left }: CircleProps) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((curr) => !curr)
  }

  return (
    <div style={{ position: "absolute", top: top, left: left }}>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
      {/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        style={{
          border: "0.4vw solid #fff",
          borderRadius: "100vw",
          background: "transparent",
          width: "7vw",
          height: "7vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        <div
          style={{
            border: "0.35vw solid #fff",
            borderRadius: "100vw",
            background: `${isClicked ? "white" : "black"}`,
            width: "5.5vw",
            height: "5.5vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3.2vw",
            color: `${isClicked ? "black" : "white"}`
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default JaiWalaCircle;
